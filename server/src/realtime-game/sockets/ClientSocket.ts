import { Socket } from "socket.io";
import PairDataInterface, { ClientType } from "./PairDataInterface";
import GameManagerFactory from "../game/GameManagerFactory";

export default class ClientSocket {
  get clientType(): ClientType {
    return this._clientType;
  }
  public socket: Socket;
  private _clientType: ClientType;

  constructor(socket: Socket) {
    this.socket = socket;
    socket.emit("start");
    this.bindSocket();
  }
  bindSocket() {
    this.socket.on("pair", this.pair.bind(this));
  }
  pair(data: PairDataInterface) {
    this._clientType = data.type;
    const gameManager = GameManagerFactory.getInstance().getGameWithId(data.id);
    gameManager.join(this);
  }
  emit(event, payload?) {
    return this.socket.emit(event, payload);
  }
  on(event, listener?) {
    return this.socket.on(event, listener);
  }
}
