import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

import { MatrixTable } from '../MatrixTable';

import { DietarySupplementProps } from '../../@types/DietarySupplementProps';

type RelationsProps = {
  dietarySupplement: DietarySupplementProps;
};

export function Relations({ dietarySupplement }: RelationsProps) {
  const columns = [
    { key: 'healthGoal', label: 'Health goal' },
    { key: 'evidenceLevel', label: 'Consistent Effects' },
    { key: 'magnitudeLevel', label: 'Strength of Effects' },
    { key: 'studies', label: 'Scientific articles' },
  ];

  const { relations } = dietarySupplement;

  return (
    <Box as="section">
      <Heading size="md" pb={2} mb={4} borderBottom="1px" borderColor="gray.200">
        Table of relations
      </Heading>
      <MatrixTable columns={columns} rows={relations} />
    </Box>
  );
}
