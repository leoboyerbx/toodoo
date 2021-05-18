import GameManager from "./GameManager";

/**
 * Class used to generate Game manager instances, in order to link socket clients with same ID to the same GameManager
 */
export default class GameManagerFactory {
  private static instance: GameManagerFactory;
  private gameInstances: Array<GameManager> = [];

  /**
   * Returns a game corresponding to the provided id, creating it if doesn't exist
   * @param id
   */
  getGameWithId(id: string): GameManager {
    const existingGame = this.gameInstances.find((game: GameManager) => {
      return game.id === id;
    });
    if (existingGame) {
      return existingGame;
    } else {
      const newGame = new GameManager(id);
      this.gameInstances.push(newGame);
      return newGame;
    }
  }

  /**
   * Get class singleton instance
   */
  public static getInstance(): GameManagerFactory {
    if (!GameManagerFactory.instance) {
      GameManagerFactory.instance = new GameManagerFactory();
    }
    return GameManagerFactory.instance;
  }
}
