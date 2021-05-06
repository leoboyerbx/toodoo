import Entity from "./Entity";

interface BossImg {
  decor: String;
  character: String;
}

export default class BossEntity extends Entity {
  img: BossImg;
  introSentence: string;

  constructor(data) {
    super(data);
    this.img = data.img;
    this.introSentence = data.introSentence;
  }
}
