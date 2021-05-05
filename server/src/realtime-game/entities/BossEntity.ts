import Entity from './Entity';

interface BossImg {
  decor: String;
  character: String;
}

export default class BossEntity extends Entity {
  img: BossImg;
  introReplica: string;

  constructor(data) {
    super(data);
    this.img = data.img
    this.introReplica = data.introReplica
  }
}
