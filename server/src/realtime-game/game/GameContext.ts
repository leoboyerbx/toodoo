import { Game } from "@prisma/client";
import prismaClient from "../../database/prismaClient";
import BossEntity from "../entities/BossEntity";
import PlayerEntity from "../entities/PlayerEntity";
import Common from "../../helpers/Common";
import Entity from "../entities/Entity";
import BossPlayListener from "../listeners/BossPlayListener";
import { delay } from "../../helpers/timers";
import EventEmitter from "events";

export default class GameContext extends EventEmitter {
  public game: Game;
  public boss: BossEntity;
  public players: PlayerEntity[];
  public week: number;

  // Index of who's turn. If -1, its boss turn
  public turnIndex?: number;
  public playerTurn?: number;
  public turnEntity?: Entity;

  public bossMessage?: string;

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
      this.players.push(new PlayerEntity(avatar, player));
    }
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
    if (this.turnIndex === -1) {
      if (this.playerTurn < this.players.length - 1) {
        this.playerTurn++;
      } else {
        this.playerTurn = 0;
      }
      this.setTurn(this.playerTurn);
    } else {
      this.setTurn(-1);
    }
  }

  async playBossTurn() {
    await delay(2000);
    this.bossMessage = this.boss.playTurn(this);
    this.emit("bossPlay");
  }
}
