import {
  Button, Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react';
import React, { Dispatch, FC, SetStateAction } from 'react';


interface FinishGameModalProps {
  isOpen: boolean,
  onClose: () => void,
  resetGameId: Dispatch<SetStateAction<void>>,
}

export const FinishGameModal: FC<FinishGameModalProps> = ({isOpen, onClose, resetGameId}) => {
  const onResetClick = () => {
    resetGameId();
  };
  
  return (
    <Modal onClose={onClose} size='xs' isOpen={isOpen}>
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
            size='sm'
            variant='outline'
          >
            Cancel
          </Button>
          <Button
            onClick={onResetClick}
            m={2}
            size='sm'
            variant='ghost'
          >
            Reset
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};