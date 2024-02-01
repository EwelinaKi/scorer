import { FC } from 'react';
import { Center, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice } from '@fortawesome/free-solid-svg-icons';


export const PlayersEmptyList: FC = () => {
  return (
    <Center h='300px'>
      <Center height='50px' width='50px'>
        <Text color='gray.300' as='i'>Someone's missing? Hurry up! Add players</Text>
        <FontAwesomeIcon
          size='8x'
          icon={faDice}
          style={{
            animationDuration: '5s'
          }}
          color='#EDF2F7'
          fade={true}
        />
      </Center>
    </Center>
  );
};