import { FC, SetStateAction, Dispatch, useEffect } from 'react';
import { QueryStatus } from '@reduxjs/toolkit/query';
import { Button, Center, Spinner } from '@chakra-ui/react';
import { usePostNewGameMutation } from '../api/gameApi';
import { createNew } from '../store/gameSlice';
import { useAppDispatch } from '../store/hooks';
import image from '../images/scorer.png';


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
    <Center
      h='100vh'
      w='100vw'
      backgroundImage={image}
      backgroundPosition='center'
      backgroundSize='contain'
    >
      <Center w='100vw' h='20%' minH='2.5rem' backgroundColor='white'>
        {
          gameResponse.status === QueryStatus.pending ?
            <Spinner
              thickness='8px'
              speed='1s'
              emptyColor='gray.200'
              color='gray.600'
              size='xl'
            />
            : <Button onClick={() => postNewGame()}>START</Button>
        }
      </Center>
    </Center>
  );
};