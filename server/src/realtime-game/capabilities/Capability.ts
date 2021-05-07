import GameContext from "../game/GameContext";
import Entity from "../entities/Entity";
import PlayerEntity from "../entities/PlayerEntity";
import { CapabilityTarget } from "./CapabilityTarget";
import { CapabilityEffect } from "./CapabilityEffect";
import { CapabilityUsageResult } from "./CapabilityUsageResult";

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
          context.alivePlayers[
            Math.floor(Math.random() * context.alivePlayers.length)
          ];
        break;
      case CapabilityTarget.specificPlayer:
        target = targetPlayer;
        break;
      case CapabilityTarget.self:
        target = context.turnEntity;
        break;
    }

    const targetPreviousState = new Entity(target);

    if (this.effect.attack) {
      const newHp = target.hp - this.effect.attack;
      target.hp = Math.max(newHp, 0);
    }
    if (this.effect.heal) {
      const newHp = target.hp + this.effect.heal;
      target.hp = Math.min(newHp, context.turnEntity.initialHp);
    }

    if (context.turnEntity.energy > -1) {
      // An entity with "-1" as power has unlimited power
      const newEnergy = context.turnEntity.energy - this.cost;
      context.turnEntity.energy = Math.max(newEnergy, 0);
    }

    const result: CapabilityUsageResult = {
      capability: this,
      effectiveTarget: target,
      targetPreviousState,
    };
    context.capabilitiesHistory.unshift(result);
    return result;
  }
}
