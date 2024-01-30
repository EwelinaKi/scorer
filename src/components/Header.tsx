import {
  Button,
  Flex,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { useAppSelector } from '../store/hooks';
import { RootState } from '../store/store';
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
        </Text>
      </Flex>
      <FinishGameModal isOpen={isFinishModalOpen} onClose={onCloseFinishModal} resetGameId={resetGameId}/>
    </>
  );
};