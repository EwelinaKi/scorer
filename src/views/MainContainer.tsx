import { FC, useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { QueryStatus } from '@reduxjs/toolkit/query';
import { getCurrentGameId } from '../api/gameApi';
import { useGetGameDataMutation } from '../api/gameApi';
import { useGetHealthCheckMutation } from '../api/healthCheckApi';
import { createNew } from '../store/gameSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { RootState } from '../store/store';
import { GameContainer } from './GameContainer';
import { NewGameContainer } from './NewGameContainer';


export const MainContainer: FC = () => {
  const HC_INTERVAL = 60 * 1000 // 60sec
  const [gameId, setGameId] = useState<string>(getCurrentGameId());
  const [getGameData, getGameResponse] = useGetGameDataMutation();
  const [getHealthCheck, healthCheckResponse] = useGetHealthCheckMutation();
  const gameStartedAt = useAppSelector((state: RootState) => state.game.startedAt);
  const dispatch = useAppDispatch();
  
  // prevent backend service to sleep
  useEffect(() => {
    setInterval(()=> {
      getHealthCheck();
    }, HC_INTERVAL);
  }, []);
  
  useEffect(() => {
    if (gameId && !gameStartedAt) {
      getGameData(gameId);
    }
  }, [gameId, gameStartedAt]);
  
  useEffect(() => {
    if (getGameResponse.status === QueryStatus.fulfilled) {
      dispatch(createNew(getGameResponse.data));
    }
  }, [getGameResponse, dispatch]);
  
  const resetGame = () => {
    setGameId('');
  };
  
  return (
    <Box>
      {gameId && <GameContainer resetGameId={resetGame}/>}
      {!gameId && <NewGameContainer setGameId={setGameId}/>}
    </Box>
  );
};