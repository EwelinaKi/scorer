import {
  Box,
  Button,
  Modal, ModalBody,
  ModalCloseButton,
  ModalContent, ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { useAppSelector } from '../store/hooks';
import { RootState } from '../store/store';


interface GameHeaderProps {
  resetGameId: Dispatch<SetStateAction<void>>,
}

export const GameHeader: FC<GameHeaderProps> = ({resetGameId}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const startedAt = useAppSelector((state: RootState) => state.game.startedAt);
  const [dateString, setDateString] = useState('');
  
  useEffect(() => {
    if (startedAt) {
      setDateString(new Date(startedAt).toLocaleString());
    }
  }, [startedAt]);
  
  const onResetClick = () => {
    resetGameId();
  };
  
  return (
    <>
      <Box bg={'gray.600'} p={2}>
        <Text
          as="i"
          fontSize="xs"
          color="gray.50"
        >Game started at: {dateString}
          <Button
            size="xs"
            ml={1}
            colorScheme="gray"
            variant="ghost"
            onClick={onOpen}
          >
            <FontAwesomeIcon icon={faArrowsRotate} color="pink"/>
          </Button>
        </Text>
      </Box>
      <Modal onClose={onClose} size="xs" isOpen={isOpen}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Finish this game</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
            By clicking on Reset button you will lose all your progress.
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={onClose}
              m={2}
              size="sm"
            >
              Cancel
            </Button>
            <Button
              onClick={onResetClick}
              m={2}
              size="sm"
              variant="ghost"
              colorScheme="pink"
            >
              Reset
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};