import React, { FC, useEffect, useState } from 'react';
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
  const [getHealthCheck, healthCheckResponse] = useGetHealthCheckMutation(); // TODO loading screen
  const gameStartedAt = useAppSelector((state: RootState) => state.game.startedAt);
  const dispatch = useAppDispatch();
  
  // prevent backend service to sleep TODO -> https://redux-toolkit.js.org/rtk-query/usage/polling
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
    if (getGameResponse.status !== QueryStatus.fulfilled) {
      return;
    }
    if (getGameResponse.data?.gameId) {
      dispatch(createNew(getGameResponse.data));
    } else {
      resetGame();
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