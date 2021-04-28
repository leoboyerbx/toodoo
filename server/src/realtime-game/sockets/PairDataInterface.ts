export enum ClientType {
  Cast = 'cast',
  Player = 'player'
}

export default interface PairDataInterface {
  id: string,
  type: ClientType
}
