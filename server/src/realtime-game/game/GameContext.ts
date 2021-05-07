import { Game } from "@prisma/client";
import prismaClient from "../../database/prismaClient";
import BossEntity from "../entities/BossEntity";
import PlayerEntity from "../entities/PlayerEntity";
import Common from "../../helpers/Common";
import Entity from "../entities/Entity";
import BossPlayListener from "../listeners/BossPlayListener";
import { delay } from "../../helpers/timers";
import EventEmitter from "events";
import BossAttackResult from "../capabilities/BossAttackResult";
import { CapabilityUsageResult } from "../capabilities/CapabilityUsageResult";

export default class GameContext extends EventEmitter {
  public game: Game;
  public boss: BossEntity;
  public players: PlayerEntity[];
  public week: number;

  // Index of who's turn. If -1, its boss turn
  public turnIndex?: number;
  public playerTurn?: number;
  public turnEntity?: Entity;

  public bossAttack?: BossAttackResult;
  public winner: string = null;

  public capabilitiesHistory: CapabilityUsageResult[] = [];

  constructor() {
    super();
  }

  public async setGame(gameId: number) {
    this.game = await prismaClient.game.findFirst({
      where: {
        id: Number(gameId),
      },
      include: {
        team: {
          include: {
            players: true,
          },
        },
      },
    });
    this.week = this.game.currentWeek;
    const bossData = await Common.getBossForWeek(this.week);
    this.boss = new BossEntity(bossData);
    const players = await prismaClient.player.findMany({
      where: {
        teamId: this.game.teamId,
      },
    });
    this.players = [];
    for (const player of players) {
      const avatar = await Common.getAvatar(player.avatar);
      avatar.energy = player.points;
      this.players.push(new PlayerEntity(avatar, player));
    }
  }
  get alivePlayers() {
    return this.players.filter((player) => player.hp > 0);
  }
  setTurn(index: number) {
    this.turnIndex = index;
    if (index === -1) {
      this.turnEntity = this.boss;
      this.playBossTurn();
    } else {
      this.playerTurn = index;
      this.turnEntity = this.players[index];
    }
  }

  nextTurn() {
    this.checkVictory();
    if (this.turnIndex === -1) {
      do {
        this.incrementPlayerTurn();
        this.setTurn(this.playerTurn);
      } while (this.turnEntity.hp === 0 && !this.winner);
    } else {
      this.setTurn(-1);
    }
  }

  private checkVictory() {
    if (this.boss.hp === 0) {
      this.winner = "players";
      this.emit("victory");
    } else if (this.players.every((player) => player.hp === 0)) {
      this.winner = "boss";
      this.emit("victory");
    }
  }

  private incrementPlayerTurn() {
    if (this.playerTurn < this.players.length - 1) {
      this.playerTurn++;
    } else {
      this.playerTurn = 0;
    }
  }

  async playBossTurn() {
    await delay(3000);
    this.bossAttack = this.boss.playTurn(this);
    this.emit("bossPlay");
  }
}
