import { FC } from 'react';
import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Text,
  Heading,
  IconButton
} from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/all';
import { Player } from '../types/player.types';
import { ScoreWrapper } from './ScoreWrapper';
import { GameColors } from '../types/color.types';


export const PlayerCard: FC<Player> = ({color, id, name, scores, avatar}) => {
  return (
    <Card maxW='xs' margin={2}>
      <CardHeader>
        <Flex>
          <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Box
              borderRadius='50%'
              borderColor={GameColors[color].background}
              borderWidth='3px' p='2px'
            >
              <Avatar name={name} src={avatar} size='md' />
            </Box>
            <Box>
              <Heading size='sm'>{name}</Heading>
              <Text as='i'>score: {scores?.reduce((acc, curr) => acc + curr, 0)}</Text>
            </Box>
          </Flex>
          <IconButton
            variant='ghost'
            colorScheme='gray'
            aria-label='See menu'
            isDisabled={true}
            icon={<BsThreeDotsVertical />}
          />
        </Flex>
      </CardHeader>
      <CardBody pt='0'>
        <ScoreWrapper playerId={id} color={color} />
      </CardBody>
    </Card>
  );
};