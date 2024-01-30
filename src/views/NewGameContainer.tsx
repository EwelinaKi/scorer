import { FC, SetStateAction, Dispatch, useEffect } from 'react';
import { QueryStatus } from '@reduxjs/toolkit/query';
import { Button, Center } from '@chakra-ui/react';
import { usePostNewGameMutation } from '../api/gameApi';
import { createNew } from '../store/gameSlice';
import { useAppDispatch } from '../store/hooks';


interface NewGameContainerProps {
  setGameId: Dispatch<SetStateAction<string>>,
}

export const NewGameContainer: FC<NewGameContainerProps> = ({setGameId}) => {
  const [postNewGame, gameResponse] = usePostNewGameMutation();
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    if (gameResponse.status === QueryStatus.fulfilled && gameResponse.data?.gameId) {
      dispatch(createNew(gameResponse.data));
      setGameId(gameResponse.data.gameId);
    }
  }, [gameResponse]);
  
  return (
    <Center mt={12}>
      <Button onClick={() => postNewGame()}>START</Button>
    </Center>
  );
};