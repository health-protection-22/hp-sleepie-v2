import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

import { parseHtmlText } from '../../utils/parseHtmlText';

import { DietarySupplementProps } from '../../@types/DietarySupplementProps';

type BenefitsProps = {
  dietarySupplement: DietarySupplementProps;
};

export function Benefits({ dietarySupplement }: BenefitsProps) {
  const { title, benefits } = dietarySupplement;

  return (
    <Box as="section">
      <Heading
        size="md"
        pb={2}
        mb={4}
        borderBottom="1px"
        borderColor="gray.200"
      >{`What are ${title} benefits?`}</Heading>
      <Flex direction="column" gap={4} textAlign="justify">
        {parseHtmlText(benefits)}
      </Flex>
    </Box>
  );
}
