import Entity from "./Entity";
import { Player } from "@prisma/client";
import { AvatarImg } from "./AvatarImg";

/**
 * An entity of the real players (not the boss) in the game
 */
export default class PlayerEntity extends Entity {
  img: AvatarImg;
  color: string;
  player: Player;

  constructor(avatarData, player: Player) {
    super(avatarData);
    this.img = avatarData.img;
    this.player = player;
    this.color = avatarData.color ?? "#f00";
    this.capabilities = []; // capabilities are not defined by the avatar
  }
}
