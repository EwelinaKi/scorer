import { FC, useEffect, useState } from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useChangePlayersScoreMutation } from '../api/playerApi';
import { useAppDispatch } from '../store/hooks';
import { updatePlayerScore } from '../store/playerSlice';
import { GameColors } from '../types/color.types';


const Buttons = [1, 2, 5, 10, 20, 50, -1, -2, -5, -10, -20, -50];

interface ScoreWrapperProps {
  playerId: string,
  color: string,
}

export const ScoreWrapper: FC<ScoreWrapperProps> = ({playerId, color}) => {
  const getScoreString = (value: number): string => {
    if (value == 0) {
      return '--';
    } else if (value > 0) {
      return `+${value}`;
    } else {
      return value.toString();
    }
  };
  
  const [score, setScore] = useState(0);
  const [scoreString, setScoreString] = useState(getScoreString(0));
  const [postNewScore, newScoreResp] = useChangePlayersScoreMutation();
  const dispatch = useAppDispatch();
  
  const addPointsForPlayer = () => {
    postNewScore({playerId, score})
      .unwrap()
      .then(resp => dispatch(updatePlayerScore({id: playerId, scores: resp.scores})));
    setScore(0);
  };
  
  useEffect(() => {
    setScoreString(getScoreString(score));
  }, [score]);
  
  return (
    <Box>
      <Flex gap={2} flexWrap='wrap'>
        {
          Buttons.map(points =>
            <Button w={6} key={`score_${points}`} onClick={() => setScore(prevState => prevState + points)}>
              {getScoreString(points)}
            </Button>
          )
        }
      </Flex>
      <Flex mt={2} justify={'space-between'}>
        <Button
          variant='ghost'
          w={'30%'}
          isDisabled={!score}
          onClick={() => setScore(0)}>
          <FontAwesomeIcon icon={faTrashCan} />
        </Button>
        <Box
          borderRadius='10px'
          minW={'75px'}
          px={2}
          mx={8}
          textAlign={'center'}
          sx={{
            border: '3px solid',
            borderColor: score != 0 ? GameColors[color].background : '#e3e3e3',
          }}
        >
          <Text lineHeight={8} as='b'>
            {scoreString}
          </Text>
        </Box>
        <Button
          variant='ghost'
          isDisabled={!score}
          onClick={addPointsForPlayer}
        >
          Add
        </Button>
      </Flex>
    
    </Box>
  );
};