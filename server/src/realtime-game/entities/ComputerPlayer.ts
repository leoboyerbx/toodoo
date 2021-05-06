import GameContext from "../game/GameContext";
import Capability from "../capabilities/Capability";

export default interface ComputerPlayer {
  capabilities: Capability[];
  energy: number;
  playTurn(context: GameContext): string;
}
