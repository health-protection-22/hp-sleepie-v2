import React from 'react';
import { Flex } from '@chakra-ui/react';

import { HealthGoals } from './components/HealthGoals';
import { SubHealthGoals } from './components/SubHealthGoals';
import { DietarySupplements } from './components/DietarySupplements';
import { Blacklist } from './components/Blacklist';

export function Diagram() {
  return (
    <>
      <Flex
        justifyContent="space-between"
        flex={1}
        px={[0, 0, 0, 8]}
        py={8}
        gap={['12', '12', '24', '24', '32']}
      >
        <HealthGoals />
        <SubHealthGoals />
        <DietarySupplements />
      </Flex>
      <Blacklist />
    </>
  );
}
