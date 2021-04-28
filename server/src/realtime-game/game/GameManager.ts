import ClientSocket from '../sockets/ClientSocket';
import {ClientType} from '../sockets/PairDataInterface';

export default class GameManager {
  public id: string;
  private castSocket: ClientSocket;
  private playerSockets: Array<ClientSocket> = [];

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
    console.log(this.playerSockets.length && this.castSocket);
  }
}
