import Capability from "../capabilities/Capability";

export default class Entity {
  public name: String;
  public hp: Number;
  public energy: Number;
  public capabilities: Capability[] = [];
  constructor(data) {
    this.name = data.name;
    this.hp = data.hp ?? 100;
    this.energy = data.energy ?? 100;
    console.log(data);
    data.capabilities?.forEach((capabilityData) => {
      this.capabilities.push(new Capability(capabilityData));
    });
  }
}
