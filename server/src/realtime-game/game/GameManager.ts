import ClientSocket from "../sockets/ClientSocket";
import { ClientType } from "../sockets/PairDataInterface";
import GameContext from "./GameContext";
import Capability from "../capabilities/Capability";
import { delay } from "../../helpers/timers";

export default class GameManager {
  public id: string;
  private castSocket: ClientSocket;
  private playerSocket: ClientSocket;
  private readonly context;

  constructor(id: string) {
    this.id = id;
    this.context = new GameContext();

    this.context.on("bossPlay", () => this.onBossPlay());
    this.context.on("victory", () => this.onVictory());
  }

  private bindPlayerSocket(socket: ClientSocket) {
    socket.socket.on("config", (config) => this.config(config));
    socket.socket.on("startFight", () => this.startFight());
    socket.socket.on("useCapability", (capability) =>
      this.currentPlayerUseCapability(new Capability(capability))
    );
    socket.socket.on("skipTurn", () => this.currentPlayerSkipTurn());
  }

  public join(socket: ClientSocket) {
    if (socket.clientType === ClientType.Cast) {
      this.castSocket = socket;
    } else if (socket.clientType === ClientType.Player) {
      this.bindPlayerSocket(socket);
      this.playerSocket = socket;
    }
    this.checkReady();
  }

  /**
   * Checks if the game is ready to start, i.e. if there is a cast connected
   * @private
   */
  private checkReady() {
    if (this.playerSocket && this.castSocket) {
      console.log(`Room ${this.id} ready`);
      this.playerSocket.emit("askConfig");
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
    this.castSocket.emit(message, payload);
    this.playerSocket.emit(message, payload);
  }

  /**
   * Send the current state to all clients
   * @private
   */
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
    this.broadCast("startFight", this.context);
  }

  private async currentPlayerUseCapability(capability: Capability) {
    if (this.context.turnIndex < 0) return;
    capability.use(this.context);
    this.context.nextTurn();
    this.broadcastState();
  }

  private currentPlayerSkipTurn() {
    if (this.context.turnIndex < 0) return;
    this.context.nextTurn();
    this.broadcastState();
  }

  // Listeners
  async onBossPlay() {
    this.broadcastState();
    await delay(3000);
    this.context.nextTurn();
    this.context.bossAttack = null;
    this.broadcastState();
  }
  async onVictory() {
    this.broadCast("victory", this.context);
  }
}
