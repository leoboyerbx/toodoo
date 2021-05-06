import GameContext from "../game/GameContext";
import Entity from "../entities/Entity";
import PlayerEntity from "../entities/PlayerEntity";

export enum CapabilityTarget {
  boss = "boss",
  randomPlayer = "randomPlayer",
  specificPlayer = "specificPlayer",
  self = "self",
}

export interface CapabilityEffect {
  attack: number;
  heal: number;
}
export interface CapabilityUsageResult {
  capability: Capability;
  effectiveTarget: Entity;
}

export default class Capability {
  public name: String;
  public cost: number;
  public target: CapabilityTarget;
  public effect: CapabilityEffect;
  constructor(data) {
    Object.assign(this, data);
  }
  use(
    context: GameContext,
    targetPlayer?: PlayerEntity
  ): CapabilityUsageResult {
    let target: Entity;
    switch (this.target) {
      case CapabilityTarget.boss:
        target = context.boss;
        break;
      case CapabilityTarget.randomPlayer:
        target =
          context.players[Math.floor(Math.random() * context.players.length)];
        break;
      case CapabilityTarget.specificPlayer:
        target = targetPlayer;
        break;
      case CapabilityTarget.self:
        target = context.turnEntity;
        break;
    }

    if (this.effect.attack) target.hp -= this.effect.attack;
    if (this.effect.heal) target.hp += this.effect.heal;

    context.turnEntity.energy -= this.cost;

    return {
      capability: this,
      effectiveTarget: target,
    };
  }
}
