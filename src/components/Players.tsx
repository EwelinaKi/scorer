import { FC, useEffect } from 'react';
import { Box, Button, Flex, HStack, Text, useDisclosure } from '@chakra-ui/react';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetPlayerMutation } from '../api/playerApi';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { updatePlayers } from '../store/playerSlice';
import { RootState } from '../store/store';
import { Player } from '../types/player.types';
import { AddPlayerModal } from './modals/AddPlayerModal';
import { PlayerCard } from './PlayerCard';


export const Players: FC = () => {
  const players = useAppSelector((state: RootState) => state.player.players);
  const playersIds = useAppSelector((state: RootState) => state.game.playerIds);
  const [getPlayerData] = useGetPlayerMutation();
  const dispatch = useAppDispatch();
  
  const {
    isOpen: isAddPlayerModalOpen,
    onClose: onCloseAddPlayerModal,
    onOpen: onOpenAddPlayerModal,
  } = useDisclosure();
  
  const getAllPlayersData = async (): Promise<Player[]> => {
    let promises = playersIds.map(id => getPlayerData(id).unwrap());
    return Promise.all(promises);
  };
  
  useEffect(() => {
    if (!Object.keys(players).length && playersIds.length) {
      getAllPlayersData()
        .then(allPlayersData => dispatch(updatePlayers(allPlayersData)));
    }
  }, [players, playersIds]);
  
  return (
    <Box>
      <HStack ml={2}>
        <Button
          size='sm'
          variant='solid'
          color={Object.keys(players).length ? 'gray.500': 'pink.500'}
          onClick={onOpenAddPlayerModal}
        >
          <FontAwesomeIcon icon={faUserPlus} />
        </Button>
        <Text as='b' ml={2} fontSize='2xl'>Players</Text>
      </HStack>
      <Flex mt={2} justify={'space-around'} flexWrap='wrap'>
        {Object.keys(players).map(id => <PlayerCard key={id} {...players[id]}/>)}
      </Flex>
      <AddPlayerModal isOpen={isAddPlayerModalOpen} closeModal={onCloseAddPlayerModal}/>
    </Box>
  );
};