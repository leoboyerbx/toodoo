import Entity from './Entity';

interface AvatarImg {
  portrait: String;
  character: String;
}

export default class AvatarEntity extends Entity {
  img: AvatarImg;
  constructor(data) {
    super(data);
    this.img = data.img
  }
}
