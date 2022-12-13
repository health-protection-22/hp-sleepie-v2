import React from 'react';
import { Progress, Text } from '@chakra-ui/react';

type EvidenceLevelProps = {
  title: string;
  value: number;
};

export function EvidenceLevel({ title, value }: EvidenceLevelProps) {
  return (
    <>
      <Text
        display={['inline-block', 'inline-block', 'none']}
        textTransform="uppercase"
        fontWeight="semibold"
        marginRight="1"
      >
        {title}
      </Text>
      <Progress
        value={value * (100 / 5)}
        colorScheme="primary"
        width="100%"
        bg="gray.300"
        borderRadius="xl"
        flex="1"
        hasStripe
        isAnimated
      />
    </>
  );
}
