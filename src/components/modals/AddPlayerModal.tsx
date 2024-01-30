import { createAvatar } from '@dicebear/core';
import { QueryStatus } from '@reduxjs/toolkit/query';
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import {
  Box,
  Button, HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react';
import { useAddPlayerMutation } from '../../api/gameApi';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { updatePlayers } from '../../store/playerSlice';
import { RootState } from '../../store/store';
import { GameColors } from '../../types/color.types';
import { ColorSelector } from '../ColorSelector';
import { bottts } from '@dicebear/collection';


interface AddPlayerModalProps {
  isOpen: boolean,
  closeModal: () => void,
}

const defaultBottColor = 'a9a9a9';

export const AddPlayerModal: FC<AddPlayerModalProps> = ({isOpen, closeModal}) => {
  const gameId = useAppSelector((state: RootState) => state.game.gameId);
  const initialRef = useRef(null);
  const [avatar, setAvatar] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [postNewPlayer, playerResp] = useAddPlayerMutation();
  const dispatch = useAppDispatch();
  const onSaveClick = () => {
    postNewPlayer({
      gameId,
      body: {
        color: selectedColor,
        name: playerName,
      }
    })
    onCloseModal();
  };
  
  const onCloseModal = () => {
    setPlayerName('');
    setSelectedColor('');
    closeModal();
  };
  
  useEffect(() => {
    const avatar = createAvatar(bottts, {
      seed: playerName || 'default',
      randomizeIds: true,
      baseColor: [selectedColor ? GameColors[selectedColor].avatar : defaultBottColor],
    }).toDataUriSync();
    setAvatar(avatar);
  }, [selectedColor, playerName]);
  
  useEffect(() => {
    if (playerResp.status === QueryStatus.fulfilled) {
      dispatch(updatePlayers([{...playerResp.data, avatar}]));
    }
  }, [playerResp]);
  
  return (
    <Modal
      onClose={onCloseModal}
      size="sm"
      isOpen={isOpen}
      initialFocusRef={initialRef}
    >
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>Add new player</ModalHeader>
        <ModalCloseButton/>
        <ModalBody>
          <HStack>
            <Box h='80px' w='80px'>
              <img src={avatar} alt="Avatar" style={{opacity: playerName && selectedColor ? '1' : '0.2'}}/>
            </Box>
              <Input
                variant="flushed"
                placeholder="player's name"
                ref={initialRef}
                onChange={(el: ChangeEvent<HTMLInputElement>) => setPlayerName(el.target.value)}
              />
          </HStack>
          <ColorSelector onColorChange={setSelectedColor}/>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={onCloseModal}
            m={2}
            size="sm"
            variant="outline"
          >
            Cancel
          </Button>
          <Button
            onClick={() => onSaveClick()}
            m={2}
            size="sm"
            variant="solid"
            colorScheme="gray"
            isDisabled={!playerName || !selectedColor}
          >
            Save & Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};