import Entity from "../entities/Entity";

/**
 * Class representing a target of a capability: can be one or many entities
 */
export default class CapabilityTarget {
  targets: Entity[];

  constructor(target) {
    if (Array.isArray(target)) {
      this.targets = target;
    } else {
      this.targets = [target];
    }
  }

  /**
   * Call a callback on each entity of the target
   * @param callback
   */
  apply(callback: (Entity) => void) {
    this.targets.forEach((entity) => callback(entity));
  }

  /**
   * Get the target result
   * @todo Refactor this to match cases with many entities in target
   */
  get effectiveTarget() {
    return this.targets[0];
  }
}
