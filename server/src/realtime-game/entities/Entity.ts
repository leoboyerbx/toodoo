import Capability from "../capabilities/Capability";

/**
 * An entity of the game: player or boss
 */
export default class Entity {
  public name: String;
  public hp: number;
  public initialHp: number;
  public energy: number;
  public capabilities: Capability[] = [];
  public protected: boolean = false;

  constructor(data) {
    this.name = data.name;
    this.hp = data.hp ?? 100;
    this.initialHp = this.hp;
    this.energy = data.energy ?? 100;
    data.capabilities?.forEach((capabilityData) => {
      this.capabilities.push(new Capability(capabilityData));
    });
  }

  get canPlay() {
    return this.capabilities.some(
      (capability) => capability.cost <= this.energy
    );
  }
}
