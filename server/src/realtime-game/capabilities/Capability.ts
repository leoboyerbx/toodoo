export enum CapabilityTarget {
  boss = 'boss',
  randomPlayer = 'randomPlayer',
  specificPlayer = 'specificPlayer',
  self = 'self',
}

export interface CapabilityEffect {
  attack: number;
  heal: number;
}

export default class Capability {
  public name: String;
  public cost: Number;
  public target: CapabilityTarget;
  public effect: CapabilityEffect;
  constructor(data) {
    Object.assign(this, data)
  }
}
