import Entity from "./Entity";
import GameContext from "../game/GameContext";
import ComputerPlayer from "./ComputerPlayer";
import PlayerEntity from "./PlayerEntity";

interface BossImg {
  decor: String;
  character: String;
  positionInDecor: any;
}
export default class BossEntity extends Entity implements ComputerPlayer {
  img: BossImg;
  introSentence: string;

  constructor(data) {
    super(data);
    this.img = data.img;
    this.introSentence = data.introSentence;
  }

  playTurn(context: GameContext): string {
    // Capabilities that the boss can use
    const availableCapabilities = this.capabilities.filter(
      (capability) => capability.cost <= this.energy
    );
    const usedCapability =
      availableCapabilities[
        Math.floor(Math.random() * availableCapabilities.length)
      ];
    const result = usedCapability.use(context);
    const playerName = (result.effectiveTarget as PlayerEntity).player.name;
    return `Le boss utilise l'attaque ${result.capability.name} sur ${playerName} ! Moins ${result.capability.effect.attack} PV !`;
  }
}
