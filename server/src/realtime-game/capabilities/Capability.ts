import GameContext from "../game/GameContext";
import Entity from "../entities/Entity";
import PlayerEntity from "../entities/PlayerEntity";
import { CapabilityTargetType } from "./CapabilityTargetType";
import { CapabilityEffect } from "./CapabilityEffect";
import { CapabilityUsageResult } from "./CapabilityUsageResult";
import CapabilityTarget from "./CapabilityTarget";

export default class Capability {
  public name: String;
  public cost: number;
  public target: CapabilityTargetType;
  public effect: CapabilityEffect;
  public animationSegment: Array<string>;

  constructor(data) {
    Object.assign(this, data);
  }

  /**
   * Applies the effects of the capability to a given GameContext.
   *
   * @todo Break down this into smaller functions
   *
   * @param context
   * @param targetPlayer
   */
  use(
    context: GameContext,
    targetPlayer?: PlayerEntity
  ): CapabilityUsageResult {
    // Select the target according to the capability settings
    let target: CapabilityTarget;
    switch (this.target) {
      case CapabilityTargetType.boss:
        target = new CapabilityTarget(context.boss);
        break;
      case CapabilityTargetType.randomPlayer:
        target = new CapabilityTarget(
          context.alivePlayers[
            Math.floor(Math.random() * context.alivePlayers.length)
          ]
        );
        break;
      case CapabilityTargetType.specificPlayer:
        target = new CapabilityTarget(targetPlayer);
        break;
      case CapabilityTargetType.allPlayers:
        target = new CapabilityTarget(context.players);
        break;
      case CapabilityTargetType.currentPlayer:
        target = new CapabilityTarget(context.players[context.playerTurn]);
        break;
      case CapabilityTargetType.self:
        target = new CapabilityTarget(context.turnEntity);
        break;
    }

    // Store the entity state before the capability is used
    const targetPreviousState = new Entity(target.effectiveTarget);

    // Apply the effects of the attack
    if (this.effect.attack) {
      target.apply((entity) => {
        if (entity.protected) {
          entity.protected = false;
        } else {
          const newHp = entity.hp - this.effect.attack;
          entity.hp = Math.max(newHp, 0);
        }
      });
    }
    if (this.effect.heal) {
      target.apply((entity) => {
        const newHp = entity.hp + this.effect.heal;
        entity.hp = Math.min(newHp, context.turnEntity.initialHp);
      });
    }
    if (this.effect.protect) {
      target.apply((entity) => {
        entity.protected = true;
      });
    }

    // Compute new energy of the entity
    if (context.turnEntity.energy > -1) {
      // An entity with "-1" as power has unlimited power
      const newEnergy = context.turnEntity.energy - this.cost;
      context.turnEntity.energy = Math.max(newEnergy, 0);
    }

    const result: CapabilityUsageResult = {
      capability: this,
      effectiveTarget: target.effectiveTarget,
      targetPreviousState,
    };
    context.capabilitiesHistory.unshift(result);
    return result;
  }
}
