import Entity from "../entities/Entity";

export default class CapabilityTarget {
  targets: Entity[];

  constructor(target) {
    if (Array.isArray(target)) {
      this.targets = target;
    } else {
      this.targets = [target];
    }
  }

  apply(callback: (Entity) => void) {
    this.targets.forEach((entity) => callback(entity));
  }

  get effectiveTarget() {
    return this.targets[0];
  }
}
