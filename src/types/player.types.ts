export interface PlayerState {
  players: {
    [key: string]: Player
  },
}

export interface Player {
  id: string,
  name: string,
  color: string,
  scores: number[],
}

export type PostNewPlayerBody = Pick<Player, 'name' | 'color'>;

export interface PostPlayerScore {
  playerId: string,
  score: number,
}