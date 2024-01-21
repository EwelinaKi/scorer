export interface Player {
  id: string,
  name: string,
  color: string,
  scores: number[],
}

export type PostNewPlayerBody = Pick<Player, 'name' | 'color'>;