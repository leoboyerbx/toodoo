import Entity from "./Entity";
import GameContext from "../game/GameContext";
import ComputerPlayer from "./ComputerPlayer";
import PlayerEntity from "./PlayerEntity";
import BossAttackResult from "../capabilities/BossAttackResult";

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

  playTurn(context: GameContext): BossAttackResult {
    // Capabilities that the boss can use
    const usedCapability = this.capabilities[
      Math.floor(Math.random() * this.capabilities.length)
    ];
    const result = usedCapability.use(context);
    const playerName = (result.effectiveTarget as PlayerEntity).player.name;
    return {
      message: `Le boss utilise l'attaque ${result.capability.name} sur ${playerName} ! Moins ${result.capability.effect.attack} PV !`,
      capabilityResult: result,
    };
  }
}
