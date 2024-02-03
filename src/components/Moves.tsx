import { FC } from 'react';
import { Avatar, Box, Card, Flex, HStack, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMonument } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from '../store/hooks';


export const Moves: FC = () => {
  const players = useAppSelector(state => state.player.players);
  const moves = useAppSelector(state => state.moves.moves);
  
  if (!Object.keys(players).length) {
    return <></>;
  }
  
  console.log(Date.now());
  return (
    <Card p={2} pl={4}>
      <HStack>
        <FontAwesomeIcon icon={faMonument} />
        <Text as='b' ml={2} fontSize='2xl'>Moves</Text>
      </HStack>
      {
        moves.map(move =>
          <Flex key={move.timestamp} alignItems='center'>
            <Text color='gray.500' width='65px'>{new Date(move.timestamp).toLocaleTimeString('pl-PL')}</Text>
            <Avatar src={players[move.playerId].avatar} size='xs' mx={2} />
            <Text as='i'>{move.partialScore > 0 ? '+' : ''}{move.partialScore}</Text>
          </Flex>
        )
      }
    </Card>
  );
};