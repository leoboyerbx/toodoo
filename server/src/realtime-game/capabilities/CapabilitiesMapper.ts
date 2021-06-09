/**
 * Maps capabilities to players
 */
import Common from "../../helpers/Common";
import Capability from "./Capability";
import PlayerEntity from "../entities/PlayerEntity";
import shuffle from "../../helpers/shuffle";
import { arrayShallowEqual } from "../../helpers/arrayEqual";

export default class CapabilitiesMapper {
  private capabilities: Array<Capability>;
  private capabilitiesPerPlayer = 4;

  constructor() {
    this.capabilities = Common.getPlayersCapabilities();
  }

  mapRandomCapabilitiesToPlayers(players: Array<PlayerEntity>) {
    const randomCaps = [...shuffle(this.capabilities)];
    players.forEach((player: PlayerEntity) => {
      player.capabilities = [];
      for (let i = 0; i < this.capabilitiesPerPlayer; i++) {
        const capability = randomCaps.pop();
        if (capability) player.capabilities.push(capability);
      }
      this.sortCapabilities(player.capabilities);
    });
    return players;
  }

  sortCapabilities(capabilities: Array<Capability>) {
    return capabilities.sort((a: Capability, b: Capability) => {
      const numberOfA = capabilities.filter((capability) =>
        arrayShallowEqual(Object.keys(capability.effect), Object.keys(a.effect))
      ).length;
      const numberOfB = capabilities.filter((capability) =>
        arrayShallowEqual(Object.keys(capability.effect), Object.keys(b.effect))
      ).length;
      return numberOfB - numberOfA;
    });
  }
}
