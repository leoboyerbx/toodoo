import { Game } from "@prisma/client";
import prismaClient from "../../database/prismaClient";
import BossEntity from "../entities/BossEntity";
import PlayerEntity from "../entities/PlayerEntity";
import Common from "../../helpers/Common";
import Entity from "../entities/Entity";
import { delay } from "../../helpers/timers";
import EventEmitter from "events";
import BossAttackResult from "../capabilities/BossAttackResult";
import { CapabilityUsageResult } from "../capabilities/CapabilityUsageResult";
import CapabilitiesMapper from "../capabilities/CapabilitiesMapper";

/**
 * Class representing the current game context
 * Can emit events on certain game actions
 */
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

  public capabilitiesMapper = new CapabilitiesMapper();

  constructor() {
    super();
  }

  /**
   * Fetch game context data corresponding to the game ID
   *
   * @todo Extract data fetching to a separate function
   *
   * @param gameId
   */
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
    this.mapCapabilities();
    console.log(this.players);
  }

  /**
   * Getter returning every player with HP higher than 0
   */
  get alivePlayers() {
    return this.players.filter((player) => player.hp > 0);
  }

  /**
   * Set turns to a specific index, updating every side variables
   * @param index
   */
  setTurn(index: number) {
    this.turnIndex = index;
    if (index === -1) {
      this.turnEntity = this.boss;
      this.playBossTurn();
    } else {
      this.playerTurn = index;
      this.turnEntity = this.players[index];
      if (this.turnIndex === 0) {
        this.onFirstPlayerTurn();
      }
    }
  }

  onFirstPlayerTurn() {
    this.mapCapabilities();
  }

  mapCapabilities() {
    this.capabilitiesMapper.mapRandomCapabilitiesToPlayers(this.players);
  }

  /**
   * Increment turn following the pattern:
   * player 1 - boss - player 2 - boss - player n - boss -> repeat
   */
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

  /**
   * Check if the boss or the players won, and emit the corresponding event.
   * @private
   */
  private checkVictory() {
    if (this.boss.hp === 0) {
      this.winner = "players";
      this.emit("victory");
    } else if (this.players.every((player) => player.hp === 0)) {
      this.winner = "boss";
      this.emit("victory");
    }
  }

  /**
   * Increment index of current playing player (ignoring boss)
   * @private
   */
  private incrementPlayerTurn() {
    if (this.playerTurn < this.players.length - 1) {
      this.playerTurn++;
    } else {
      this.playerTurn = 0;
    }
  }

  /**
   * Call the boss to play his turn, and emitting teh related event after that
   */
  async playBossTurn() {
    await delay(3433);
    this.bossAttack = this.boss.playTurn(this);
    this.emit("bossPlay");
  }
}
