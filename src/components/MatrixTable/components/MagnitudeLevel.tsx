import React from 'react';
import { Flex, Icon, Text } from '@chakra-ui/react';
import {
  MdOutlineSentimentNeutral,
  MdSentimentSatisfiedAlt,
  MdSentimentVerySatisfied,
} from 'react-icons/md';

type MagnitudeLevelProps = {
  title: string;
  value: number;
};

export function MagnitudeLevel({ title, value }: MagnitudeLevelProps) {
  const magnitudeLevelIcons = [
    MdOutlineSentimentNeutral,
    MdSentimentSatisfiedAlt,
    MdSentimentVerySatisfied,
  ];

  return (
    <Flex justify="center" width="100%">
      <Text
        display={['inline-block', 'inline-block', 'none']}
        textTransform="uppercase"
        fontWeight="semibold"
        marginRight="1"
      >
        {title}
      </Text>
      {magnitudeLevelIcons.map((icon, index) => (
        <Icon
          key={index}
          as={icon}
          boxSize={7}
          color={value === index + 1 ? 'brand.habits' : 'gray.400'}
        />
      ))}
    </Flex>
  );
}
