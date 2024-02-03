import { FC, useEffect, useState } from 'react';
import { Box, Card, Flex, HStack, Text, Center, AvatarGroup, Avatar, AvatarBadge } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { Player } from '../types/player.types';
import { useAppSelector } from '../store/hooks';
import { RootState } from '../store/store';
import { GameColors } from '../types/color.types';


const POS_COLOR = [
  {bcg: 'gray.50', front: 'gray.900', key: 1},
  {bcg: 'gray.100', front: 'gray.800', key: 2},
  {bcg: 'gray.200', front: 'gray.700', key: 3},
  {bcg: 'gray.300', front: 'gray.600', key: 4},
  {bcg: 'gray.400', front: 'gray.500', key: 5},
  {bcg: 'gray.500', front: 'gray.400', key: 6},
  {bcg: 'gray.600', front: 'gray.300', key: 7},
  {bcg: 'gray.700', front: 'gray.200', key: 8},
  {bcg: 'gray.800', front: 'gray.100', key: 9},
  {bcg: 'gray.900', front: 'gray.50', key: 10},
];


const getArrangedPlayersByScore = (players: Player[]): Array<Player[]> => {
  const arranged: Array<Player[]> = [];
  
  if (players.length === 0) {
    return arranged;
  }
  
  const sortedPlayers = players.sort((a, b) => {
    if (a.totalScore < b.totalScore) {
      return 1;
    } else if (a.totalScore > b.totalScore) {
      return -1;
    }
    return 0;
  });
  
  let scoreLevel: Player[] = [];
  sortedPlayers.forEach(player => {
    if (scoreLevel.length !== 0 && scoreLevel[0].totalScore !== player.totalScore) {
      arranged.push(scoreLevel);
      scoreLevel = [];
    }
    scoreLevel.push(player);
  });
  arranged.push(scoreLevel);
  
  return arranged;
};

export const LeaderBoard: FC = () => {
  const players = useAppSelector(state => state.player.players);
  const [arrangedPlayers, setArrangedPlayers] = useState<Array<Player[]>>([]);
  
  useEffect(() => {
    const playersList = Object.keys(players).map(id => players[id]);
    setArrangedPlayers(getArrangedPlayersByScore(playersList));
  }, [players]);
  
  if (!Object.keys(players).length) {
    return <></>;
  }
  
  return (
    <Card p={2} pl={4}>
      <HStack>
        <FontAwesomeIcon icon={faTrophy} />
        <Text as='b' ml={2} fontSize='2xl'>Leaders</Text>
      </HStack>
      <Flex flexWrap='nowrap' flexDirection='column' p={4}>
        {POS_COLOR.map((posColor, index) =>
          <Flex
            justifyContent='center'
            key={posColor.key}
            alignItems='baseline'
            background={posColor.bcg}
          >
            <Flex flexWrap='wrap'>
              {arrangedPlayers[index] && arrangedPlayers[index].length &&
                arrangedPlayers[index]
                  .map(player => <Avatar key={player.id} src={player.avatar} my={1} mx={2}>
                    <AvatarBadge
                      minW='22px'
                      bg={GameColors[player.color].background}
                      px={1}
                      mb={1}
                      placement='bottom-start'
                      fontSize='xs'
                      sx={{
                        left: '40px'
                      }}
                    >{player.totalScore}</AvatarBadge>
                  </Avatar>)
              }
            </Flex>
          </Flex>
        )}
      </Flex>
    </Card>
  );
};