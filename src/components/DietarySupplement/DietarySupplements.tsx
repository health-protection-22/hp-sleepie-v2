import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

import { DietarySupplementsList } from '../../components/DietarySupplementsList';

import { DietarySupplementProps } from '../../@types/DietarySupplementProps';

type DietarySupplementsProps = {
  dietarySupplement: DietarySupplementProps;
};

export function DietarySupplements({ dietarySupplement }: DietarySupplementsProps) {
  const { category } = dietarySupplement;

  return (
    <Box as="section">
      <Heading
        size="md"
        pb={2}
        mb={4}
        borderBottom="1px"
        borderColor="gray.200"
      >{`Other ${category.name}`}</Heading>
      <DietarySupplementsList
        dietarySupplements={category.dietarySupplements.filter(
          ({ slug }) => slug !== dietarySupplement.slug,
        )}
      />
    </Box>
  );
}
