import Entity from "./Entity";
import { Player } from "@prisma/client";
import { AvatarImg } from "./AvatarImg";

/**
 * An entity of the real players (not the boss) in the game
 */
export default class PlayerEntity extends Entity {
  img: AvatarImg;
  player: Player;

  constructor(avatarData, player: Player) {
    super(avatarData);
    this.img = avatarData.img;
    this.player = player;
  }
}
