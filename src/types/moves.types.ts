export interface Move {
  partialScore: number,
  playerId: string,
  timestamp: number,
}

export interface MovesState {
  moves: Move[],
}

