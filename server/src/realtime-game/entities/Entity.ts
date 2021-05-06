import Capability from "../capabilities/Capability";

export default class Entity {
  public name: String;
  public hp: number;
  public initialHp: number;
  public energy: number;
  public capabilities: Capability[] = [];
  constructor(data) {
    this.name = data.name;
    this.hp = data.hp ?? 100;
    this.initialHp = this.hp;
    this.energy = data.energy ?? 100;
    data.capabilities?.forEach((capabilityData) => {
      this.capabilities.push(new Capability(capabilityData));
    });
  }
}
