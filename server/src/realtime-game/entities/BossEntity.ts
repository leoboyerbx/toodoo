import Entity from "./Entity";
import GameContext from "../game/GameContext";
import ComputerPlayer from "./ComputerPlayer";
import PlayerEntity from "./PlayerEntity";
import BossAttackResult from "../capabilities/BossAttackResult";
import { BossImg } from "./BossImg";

export default class BossEntity extends Entity implements ComputerPlayer {
  img: BossImg;
  introSentence: string;

  constructor(data) {
    super(data);
    this.img = data.img;
    this.introSentence = data.introSentence;
  }

  /**
   * @inheritDoc
   * @todo Refactor this method to implement a better playing boss
   */
  playTurn(context: GameContext): BossAttackResult {
    // Capabilities that the boss can use
    const capabilitiesToUse = this.capabilities.filter((capability) => {
      return (
        capability.cost <= this.energy &&
        !(this.hp === this.initialHp && capability.effect.heal)
      );
    });
    const usedCapability =
      capabilitiesToUse[Math.floor(Math.random() * capabilitiesToUse.length)];
    const result = usedCapability.use(context);
    let message = "";
    if (usedCapability.effect.attack) {
      const playerName =
        usedCapability.target === "allPlayers"
          ? "tout le monde"
          : (result.effectiveTarget as PlayerEntity).player.name;
      message = `Le boss utilise l'attaque ${usedCapability.name} sur ${playerName} ! Moins ${usedCapability.effect.attack} PV !`;
    } else if (usedCapability.effect.heal) {
      message = `Le boss utilise ${usedCapability.name} pour récupérer de la vie ! Il gagne ${usedCapability.effect.heal} PV !`;
    }
    return {
      message,
      capabilityResult: result,
    };
  }
}
