export enum ClientType {
  Cast = "cast",
  Player = "player",
}

/**
 * Interface representing the data sent by a client when pairing
 */
export default interface PairData {
  id: string;
  type: ClientType;
}
