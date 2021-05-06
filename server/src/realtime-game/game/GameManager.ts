import ClientSocket from "../sockets/ClientSocket";
import { ClientType } from "../sockets/PairDataInterface";
import GameContext from "./GameContext";

class SocketsArray extends Array<ClientSocket> {
  private constructor(items?: Array<ClientSocket>) {
    super(...items);
  }
  public emit(event, payload: any = null) {
    this.forEach((socket: ClientSocket) => {
      socket.socket.emit(event, payload);
    });
  }

  static create(): SocketsArray {
    return Object.create(SocketsArray.prototype);
  }
}

export default class GameManager {
  public id: string;
  private castSocket: ClientSocket;
  private playerSockets: SocketsArray = SocketsArray.create();
  private context = new GameContext();

  constructor(id: string) {
    this.id = id;
  }

  private bindClientSocket(socket: ClientSocket) {
    socket.socket.on("config", (config) => this.config(config));
    socket.socket.on("startFight", () => this.startFight());
  }

  public join(socket: ClientSocket) {
    if (socket.clientType === ClientType.Cast) {
      this.castSocket = socket;
    } else if (socket.clientType === ClientType.Player) {
      this.bindClientSocket(socket);
      this.playerSockets.push(socket);
    }
    this.checkReady();
  }

  /**
   * Checks if the game is ready to start, i.e. if there is a cast connected
   * @private
   */
  private checkReady() {
    if (this.playerSockets.length && this.castSocket) {
      console.log(`Room ${this.id} ready`);
      this.playerSockets.emit("askConfig");
    } else {
      console.log("room not ready yet");
    }
  }

  /**
   * Send Socket.io message to every client: players and cast
   * @param message
   * @param payload
   * @private
   */
  private broadCast(message: string, payload: any = null) {
    this.castSocket.socket.emit(message, payload);
    this.playerSockets.emit(message, payload);
  }
  private broadcastState() {
    this.broadCast("updateContext", this.context);
  }

  // Socket events methods
  private async config(configData) {
    await this.context.setGame(configData.gameId);
    this.broadCast("initContext", this.context);
  }
  private async startFight() {
    console.log("startFight");
    this.context.setTurn(0);
    this.broadCast("startFight");
  }
}
