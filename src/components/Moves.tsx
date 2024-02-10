import { FC } from 'react';
import { Avatar, Box, Card, Flex, HStack, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMonument } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from '../store/hooks';


export const Moves: FC<{ height: number }> = ({height}) => {
  const players = useAppSelector(state => state.player.players);
  const moves = useAppSelector(state => state.moves.moves);
  
  if (!Object.keys(players).length) {
    return <></>;
  }
  
  return (
    <Card p={2} pl={4}   pb={4}>
      <HStack mb={2}>
        <FontAwesomeIcon icon={faMonument} />
        <Text as='b' ml={2} fontSize='2xl'>Moves</Text>
      </HStack>
      <Box height={`${height - 30}px`} overflow='scroll'>
      {
        moves.map(move =>
          <Flex key={move.timestamp} alignItems='center' >
            <Text color='gray.500' width='70px'>{new Date(move.timestamp).toLocaleTimeString('pl-PL')}</Text>
            <Avatar src={players[move.playerId].avatar} size='xs' mx={2} />
            <Text as='i'>{move.partialScore > 0 ? '+' : ''}{move.partialScore}</Text>
          </Flex>
        )
      }
      </Box>
    </Card>
  );
};