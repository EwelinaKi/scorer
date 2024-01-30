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


export const PlayerCard: FC<Player> = ({color, id, name, scores}) => {
  return (
    <Card maxW='xs' margin={2}>
      <CardHeader>
        <Flex>
          <Flex flex='1' gap="4" alignItems='center' flexWrap='wrap'>
            <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo'/>
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
            icon={<BsThreeDotsVertical/>}
          />
        </Flex>
      </CardHeader>
      <CardBody pt='0'>
        <ScoreWrapper playerId={id} color={color}/>
      </CardBody>
    </Card>
  );
};