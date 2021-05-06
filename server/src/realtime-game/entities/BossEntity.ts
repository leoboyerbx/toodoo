import Entity from "./Entity";
import GameContext from "../game/GameContext";
import ComputerPlayer from "./ComputerPlayer";

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
    const capabilityResult = usedCapability.use(context);
    return `Le boss utilise l'attaque ${this.name} sur ${capabilityResult.effectiveTarget.name} ! Moins ${capabilityResult.capability.effect.attack} PV !`;
  }
}
