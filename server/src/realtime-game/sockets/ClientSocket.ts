import { Socket } from "socket.io";
import PairData, { ClientType } from "./PairData";
import GameManagerFactory from "../game/GameManagerFactory";

/**
 * Class wrapping a Socket.io socket, with pairing properties
 */
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

  /**
   * Bind socket events
   */
  bindSocket() {
    this.socket.on("pair", this.pair.bind(this));
  }

  /**
   * Pair the socket with the game manager with specified ID
   * @param data
   */
  pair(data: PairData) {
    this._clientType = data.type;
    const gameManager = GameManagerFactory.getInstance().getGameWithId(data.id);
    gameManager.join(this);
  }

  /**
   * Pass-through to Socket.io emit() method
   * @param event
   * @param payload
   */
  emit(event, payload?) {
    return this.socket.emit(event, payload);
  }

  /**
   * Pass-through to Socket.io on() method
   * @param event
   * @param listener
   */
  on(event, listener?) {
    return this.socket.on(event, listener);
  }
}
