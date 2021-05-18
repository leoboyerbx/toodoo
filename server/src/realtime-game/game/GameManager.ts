import ClientSocket from "../sockets/ClientSocket";
import { ClientType } from "../sockets/PairDataInterface";
import GameContext from "./GameContext";
import Capability from "../capabilities/Capability";
import { delay } from "../../helpers/timers";

/**
 * Main controller of a boss game
 */
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

  /**
   * Add a socket (game or player) to the current game manager
   * @param socket
   */
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
   * Bind all required events of a player socket
   * (The events sent by the mobile app acting as a joystick)
   * @param socket
   * @private
   */
  private bindPlayerSocket(socket: ClientSocket) {
    socket.socket.on("config", (config) => this.config(config));
    socket.socket.on("startFight", () => this.startFight());
    socket.socket.on("useCapability", (capability) =>
      this.currentPlayerUseCapability(new Capability(capability))
    );
    socket.socket.on("skipTurn", () => this.currentPlayerSkipTurn());
  }

  /**
   * Check if the game is ready to start, i.e. if there is a cast connected
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
   * Send the current game state to all clients
   * @private
   */
  private broadcastState() {
    this.broadCast("updateContext", this.context);
  }

  // Socket events methods
  /**
   * Called when the mobile app send config data
   * @param configData
   * @private
   */
  private async config(configData) {
    await this.context.setGame(configData.gameId);
    this.broadCast("initContext", this.context);
  }

  /**
   * Called when players click on "start"
   * @private
   */
  private async startFight() {
    this.context.setTurn(0);
    this.broadCast("startFight", this.context);
  }

  /**
   * Called when the mobile app send the instruction to use a capability
   * @param capability
   * @private
   */
  private async currentPlayerUseCapability(capability: Capability) {
    if (this.context.turnIndex < 0) return;
    capability.use(this.context);
    this.context.nextTurn();
    this.broadcastState();
  }

  /**
   * Called when the mobile app send a "skip turn" instruction
   * @private
   */
  private currentPlayerSkipTurn() {
    if (this.context.turnIndex < 0) return;
    this.context.nextTurn();
    this.broadcastState();
  }

  // Listeners

  /**
   * Send infos to all clients after the server played the turn of the boss
   */
  async onBossPlay() {
    this.broadcastState();
    await delay(3000);
    this.context.nextTurn();
    this.context.bossAttack = null;
    this.broadcastState();
  }

  /**
   * Called when the boss or the players won
   */
  async onVictory() {
    this.broadCast("victory", this.context);
  }
}
