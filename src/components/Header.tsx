import {
  Button, Flex,
  Modal, ModalBody,
  ModalCloseButton,
  ModalContent, ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { faArrowsRotate, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { useAppSelector } from '../store/hooks';
import { RootState } from '../store/store';
import { AddPlayerModal } from './modals/AddPlayerModal';
import { FinishGameModal } from './modals/FinishGameModal';


interface GameHeaderProps {
  resetGameId: Dispatch<SetStateAction<void>>,
}

export const Header: FC<GameHeaderProps> = ({resetGameId}) => {
  const {
    isOpen: isFinishModalOpen,
    onClose: onCloseFinishModal,
    onOpen: onOpenFinishModal,
  } = useDisclosure();
  const {
    isOpen: isAddPlayerModalOpen,
    onClose: onCloseAddPlayerModal,
    onOpen: onOpenAddPlayerModal,
  } = useDisclosure();
  const startedAt = useAppSelector((state: RootState) => state.game.startedAt);
  const [dateString, setDateString] = useState('');
  
  useEffect(() => {
    if (startedAt) {
      setDateString(new Date(startedAt).toLocaleString());
    }
  }, [startedAt]);
  
  return (
    <>
      <Flex bg={'gray.600'} p={2}>
        <Text
          as='i'
          fontSize='xs'
          color='gray.50'
        >Game started at: {dateString}
          <Button
            size='xs'
            ml={1}
            colorScheme='blackAlpha'
            onClick={onOpenFinishModal}
          >
            <FontAwesomeIcon icon={faArrowsRotate} color='pink'/>
          </Button>
          <Button
            size='xs'
            ml={1}
            colorScheme='blackAlpha'
            onClick={onOpenAddPlayerModal}
          >
            <FontAwesomeIcon icon={faUserPlus} color='pink'/>
          </Button>
        </Text>
      </Flex>
      <FinishGameModal isOpen={isFinishModalOpen} onClose={onCloseFinishModal} resetGameId={resetGameId}/>
      <AddPlayerModal isOpen={isAddPlayerModalOpen} closeModal={onCloseAddPlayerModal}/>
    </>
  );
};