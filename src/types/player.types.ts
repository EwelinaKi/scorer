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
  avatar: string,
}

export type PostNewPlayerBody = Pick<Player, 'name' | 'color'>;
export type UpdatePlayerScore = Pick<Player, 'id' | 'scores'>;

export interface PostPlayerScore {
  playerId: string,
  score: number,
}