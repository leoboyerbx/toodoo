import GameContext from "../game/GameContext";

/**
 * Interface representing an object that can receive a game context and play by itself
 */
export default interface ComputerPlayer {
  /**
   * Play the turn according to the game context
   * @param context
   */
  playTurn(context: GameContext);
}
