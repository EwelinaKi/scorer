import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useEffect, useState } from 'react';
import { Box, Flex, HStack, Stack } from '@chakra-ui/react';
import { GameColors } from '../types/color.types';


interface ColorSelectorProps {
  onColorChange: (color: string) => void,
};

export const ColorSelector: FC<ColorSelectorProps> = ({onColorChange}) => {
  const [color, setColor] = useState('');
  
  useEffect(() => {
    onColorChange(color);
    
  }, [color]);
  
  return (
    <Flex mt={2} wrap='wrap' gap={1}>
      {Object.keys(GameColors).map(key =>
        <Box
          w='30px'
          h='30px'
          borderRadius='50%'
          background={GameColors[key].background}
          key={GameColors[key].name}
          onClick={() => setColor(GameColors[key].name)}
        >
          {color === GameColors[key].name &&
            <Box        >
              <FontAwesomeIcon
                icon={faCircleCheck}
                color={GameColors[key].text}
                style={{width: '22px', height: '22px', margin: '4px', opacity: 0.8}}
                // width='25px'
                // height='25px'
              />
            </Box>
          }
        </Box>
      )}
    </Flex>
  );
};
