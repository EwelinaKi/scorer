import { Button, HStack } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { BiLike } from 'react-icons/all';
import { usePostNewGameMutation } from '../api/gameApi';
import { useChangePlayersScoreMutation } from '../api/playerApi';
import { useAppDispatch } from '../store/hooks';
import { updatePlayers } from '../store/playerSlice';


const Buttons = [-10, -1, 1, 10];

interface ScoreWrapperProps {
  playerId: string,
}

export const ScoreWrapper: FC<ScoreWrapperProps> = ({playerId}) => {
  const [score, setScore] = useState(0);
  const [postNewGame, gameResponse] = usePostNewGameMutation();
  const [postNewScore, newScoreResp] = useChangePlayersScoreMutation();
  const dispatch = useAppDispatch();
  
  const addPointsForPlayer = () => {
    console.log('addPoints', playerId, score);
    
    postNewScore({playerId, score})
      .unwrap()
      .then(
        resp => {
          console.log(resp);
          dispatch(updatePlayers([resp]))
        }
      )
    setScore(0);
  };
  
  return (
    <div>xxxxxxxxxxxxxxx
      <HStack>
        {
          Buttons.map(score =>
            <Button key={`score_${score}`} onClick={() => setScore(prevState => prevState + score)}>
              {score}
            </Button>
          )
        }
      </HStack>
      
      <p>SCORE TO ADD {score}</p>
      
      <Button flex="1" variant="ghost" leftIcon={<BiLike/>} onClick={addPointsForPlayer}>
        Submit
      </Button>
      xxxxxxxxxxxxxxxxxx
    </div>
  );
};