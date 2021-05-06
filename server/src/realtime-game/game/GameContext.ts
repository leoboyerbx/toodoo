import { Game } from "@prisma/client";
import prismaClient from "../../database/prismaClient";
import BossEntity from "../entities/BossEntity";
import PlayerEntity from "../entities/PlayerEntity";
import Common from "../../helpers/Common";
import Entity from "../entities/Entity";

export default class GameContext {
  public game: Game;
  public boss: BossEntity;
  public players: PlayerEntity[];
  public week: number;

  // Index of who's turn. If -1, its boss turn
  public turnIndex?: number;
  public turnEntity?: Entity;

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
    } else {
      this.turnEntity = this.players[index];
    }
  }
  nextTurn() {
    if (this.turnIndex >= this.players.length - 1) {
      this.setTurn(-1);
    } else {
      this.setTurn(this.turnIndex + 1);
    }
  }
}
