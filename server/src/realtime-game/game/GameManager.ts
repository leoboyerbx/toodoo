import ClientSocket from '../sockets/ClientSocket';
import {ClientType} from '../sockets/PairDataInterface';
import GameContext from './GameContext';

class SocketsArray extends Array<ClientSocket> {
  private constructor(items?: Array<ClientSocket>) {
    super(...items)
  }
  public emit(event, payload: any = null) {
    this.forEach((socket: ClientSocket) => {
      socket.socket.emit(event, payload)
    })
  }

  static create(): SocketsArray {
    return Object.create(SocketsArray.prototype);
  }
}

export default class GameManager {
  public id: string;
  private castSocket: ClientSocket;
  private playerSockets: SocketsArray = SocketsArray.create();
  private gameContext = new GameContext();

  constructor(id: string) {
    this.id = id
  }

  private bindClientSocket(socket: ClientSocket) {
    socket.socket.on('config', config => this.config(config))
  }

  public join(socket: ClientSocket) {
    if (socket.clientType === ClientType.Cast) {
      this.castSocket = socket
    } else if (socket.clientType === ClientType.Player) {
      this.bindClientSocket(socket)
      this.playerSockets.push(socket)
    }
    this.checkReady()
  }

  /**
   * Checks if the game is ready to start, i.e. if there is a cast connected
   * @private
   */
  private checkReady () {
    if (this.playerSockets.length && this.castSocket) {
      console.log(`Room ${this.id} ready`)
      this.playerSockets.emit('askConfig')
    } else {
      console.log('room not ready yet')
    }
  }
  private async config(configData) {
    await this.gameContext.setGame(configData.gameId)
  }
}
