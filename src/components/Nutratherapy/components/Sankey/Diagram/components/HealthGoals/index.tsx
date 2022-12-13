import React from 'react';
import { Flex } from '@chakra-ui/react';

import { useNutratherapy } from '../../../../../../../contexts/Nutratherapy';

import { HealthGoal } from './components/HealthGoal';

export function HealthGoals() {
  const { combinations } = useNutratherapy();

  const healthGoals = Object.values(combinations);

  return (
    <Flex
      id="healthGoals"
      direction="column"
      gap={[5, 8]}
      maxW={['50%', '50%', '50%', '50%', '30%']}
    >
      {healthGoals.map((healthGoal) => (
        <HealthGoal key={healthGoal.slug} {...healthGoal} />
      ))}
    </Flex>
  );
}
