import GameManager from './GameManager';

export default class GameManagerFactory {
  private static instance: GameManagerFactory;
  private gameInstances: Array<GameManager> = []

  getGameWithId(id: string): GameManager {
    const existingGame = this.gameInstances.find((game: GameManager) => {
      return game.id === id
    })
    if (existingGame) {
      return existingGame
    } else {
      const newGame = new GameManager(id)
      this.gameInstances.push(newGame)
      return newGame
    }
  }

  public static getInstance(): GameManagerFactory {
    if (!GameManagerFactory.instance) {
      GameManagerFactory.instance = new GameManagerFactory();
    }
    return GameManagerFactory.instance;
  }
}
