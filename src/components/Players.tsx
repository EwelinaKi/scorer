import { Box } from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import { useGetPlayerMutation } from '../api/playerApi';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { updatePlayers } from '../store/playerSlice';
import { RootState } from '../store/store';
import { Player } from '../types/player.types';
import { PlayerCard } from './PlayerCard';


export const Players: FC = () => {
  const players = useAppSelector((state: RootState) => state.player.players);
  const playersIds = useAppSelector((state: RootState) => state.game.playerIds);
  const [getPlayerData] = useGetPlayerMutation();
  const dispatch = useAppDispatch();
  
  const getAllPlayersData = async (): Promise<Player[]> => {
    let promises = playersIds.map(id => getPlayerData(id).unwrap());
    return Promise.all(promises);
  };
  
  useEffect(() => {
    if (!Object.keys(players).length && playersIds.length) {
      getAllPlayersData()
        .then(allPlayersData => dispatch(updatePlayers(allPlayersData)));
    }
  }, [players, playersIds]);
  
  useEffect(() => {
    console.log('players change in PlayersList', players)
  }, [players]);
  
  return (
    <Box>
      {Object.keys(players).map(id => <PlayerCard key={id} {...players[id]}/>)}
    </Box>
  );
};