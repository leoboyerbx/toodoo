import { Game, Player } from "@prisma/client";
import prismaClient from "../../database/prismaClient";
import BossEntity from "../entities/BossEntity";
import PlayerEntity from "../entities/PlayerEntity";
import Common from "../../helpers/Common";

export default class GameContext {
  public game: Game;
  public boss: BossEntity;
  public players: PlayerEntity[];
  public week: Number;

  public async setGame(gameId: Number) {
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
}
