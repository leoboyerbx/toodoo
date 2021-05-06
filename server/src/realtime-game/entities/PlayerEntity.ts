import Entity from "./Entity";
import { Player } from "@prisma/client";

interface AvatarImg {
  portrait: String;
  character: String;
}

export default class PlayerEntity extends Entity {
  img: AvatarImg;
  player: Player;

  constructor(avatarData, player: Player) {
    super(avatarData);
    this.img = avatarData.img;
    this.player = player;
  }
}
