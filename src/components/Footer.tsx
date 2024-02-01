import { FC } from 'react';
import { Flex, Link, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export const Footer: FC = () => {
  return (
    <Flex bg={'gray.600'} h={8} p={2}>
      <Text color='gray.300' fontSize='xs'>© 2024 - made with ♥ by ewelinaKi
        <Link href='https://www.linkedin.com/in/ewelinakijanowska/' m={1} isExternal>
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link href='https://github.com/EwelinaKi/scorer'  isExternal>
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </Text>
    </Flex>
  );
};