import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

import { DietarySupplementsList } from '../../components/DietarySupplementsList';

import { HealthGoalProps } from '../../@types/HealthGoalProps';

type DietarySupplementsProps = {
  healthGoal: HealthGoalProps;
};

export function DietarySupplements({ healthGoal }: DietarySupplementsProps) {
  const { dietarySupplements } = healthGoal;

  return (
    <Box as="section">
      <Heading size="md" pb={2} mb={4} borderBottom="1px" borderColor="gray.200">
        Related sleep supplements
      </Heading>
      <DietarySupplementsList dietarySupplements={dietarySupplements} />
    </Box>
  );
}
