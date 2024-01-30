import { FC } from 'react';
import { Player } from '../types/player.types';
export const PlayerCard: FC<Player> = ({color, id,name,scores}) => {
  return (
    <div>
      <p>NAME: {name} <span>COLOR: {color}</span></p>
    </div>
  )
}