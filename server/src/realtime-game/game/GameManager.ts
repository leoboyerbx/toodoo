import ClientSocket from '../sockets/ClientSocket';
import {ClientType} from '../sockets/PairDataInterface';

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

  constructor(id: string) {
    this.id = id
  }
  public join(socket: ClientSocket) {
    if (socket.clientType === ClientType.Cast) {
      this.castSocket = socket
    } else if (socket.clientType === ClientType.Player) {
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
      this.castSocket.socket.emit('ready')
      this.playerSockets.emit('ready')
    } else {
      console.log('room not ready yet')
    }
  }
}
