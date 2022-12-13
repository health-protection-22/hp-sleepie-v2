import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

import { MatrixTable } from '../../components/MatrixTable';

import { HealthGoalProps } from '../../@types/HealthGoalProps';

type RelationsProps = {
  healthGoal: HealthGoalProps;
};

export function Relations({ healthGoal }: RelationsProps) {
  const { relations } = healthGoal;

  const columns = [
    { key: 'dietarySupplement', label: 'Dietary supplement' },
    { key: 'evidenceLevel', label: 'Consistent Effects' },
    { key: 'magnitudeLevel', label: 'Strength of Effects' },
    { key: 'studies', label: 'Scientific articles' },
  ];

  return relations.length ? (
    <Box as="section">
      <Heading size="md" pb={2} mb={4} borderBottom="1px" borderColor="gray.200">
        Table of relations
      </Heading>
      <MatrixTable columns={columns} rows={relations} />
    </Box>
  ) : (
    <></>
  );
}
