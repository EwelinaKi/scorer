import { Box } from '@chakra-ui/react';
import { Dispatch, FC, SetStateAction } from 'react';
import { GameHeader } from '../components/GameHeader';


interface GameContainerProps {
  resetGameId: Dispatch<SetStateAction<void>>,
}

export const GameContainer: FC<GameContainerProps> = ({resetGameId}) => {
  return (
    <Box>
      <GameHeader resetGameId={resetGameId}/>
    </Box>
  );
};