import { Game } from '@prisma/client'
import { getBossForWeek } from '../../../../common/entities/getEntityServer'
import prismaClient from '../../database/prismaClient';
import BossEntity from '../entities/BossEntity';

export default class GameContext {
  public game: Game;
  public boss: BossEntity;
  public week: Number;

  public async setGame(gameId: Number) {
    this.game = await prismaClient.game.findFirst({
      where: {
        id: Number(gameId)
      },
    })
    this.week = this.game.currentWeek
    const bossData = await getBossForWeek(this.week)
    this.boss = new BossEntity(bossData)
  }
}
