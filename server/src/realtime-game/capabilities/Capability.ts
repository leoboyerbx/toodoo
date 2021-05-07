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

    if (this.effect.attack) {
      const newHp = target.hp - this.effect.attack;
      target.hp = Math.max(newHp, 0);
    }
    if (this.effect.heal) {
      const newHp = target.hp + this.effect.heal;
      target.hp = Math.min(newHp, context.turnEntity.initialHp);
    }

    const newEnergy = context.turnEntity.energy - this.cost;
    context.turnEntity.energy = Math.max(newEnergy, 0);

    return {
      capability: this,
      effectiveTarget: target,
    };
  }
}
