import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

import { parseHtmlText } from '../../utils/parseHtmlText';

import { HealthGoalProps } from '../../@types/HealthGoalProps';

type IntroProps = {
  healthGoal: HealthGoalProps
}

export function Intro({ healthGoal }: IntroProps) {
  const { title, description } = healthGoal;

  return (
    <Box as="section">
      <Heading
        size="md"
        pb={2}
        mb={4}
        borderBottom="1px"
        borderColor="gray.200"
      >
        {title}
      </Heading>
      <Flex direction="column" gap={4} textAlign="justify">
        {parseHtmlText(description)}
      </Flex>
    </Box>
  );
}
