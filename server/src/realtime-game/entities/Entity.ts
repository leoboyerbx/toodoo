import Capability from '../capabilities/Capability';

export default class Entity {
  public hp: Number;
  public energy: Number;
  public capabilities: Capability[] = [];
  constructor(data) {
    this.hp = data.hp ?? 100
    this.energy = data.energy ?? 100
    data.capabilities.forEach(capabilityData => {
      this.capabilities.push(new Capability(capabilityData))
    })
  }
}
