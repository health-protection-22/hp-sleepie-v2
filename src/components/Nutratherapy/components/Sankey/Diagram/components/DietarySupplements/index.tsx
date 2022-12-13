import React from 'react';
import { Flex } from '@chakra-ui/react';

import { useNutratherapy } from '../../../../../../../contexts/Nutratherapy';

import { DietarySupplement } from './components/DietarySupplement';

export function DietarySupplements() {
  const context = useNutratherapy();
  const { selectedDietarySupplements } = context;

  return (
    <Flex
      id={'dietarySupplements'}
      direction="column"
      gap={8}
      minW={['none', 'none', 'none', 'none', '200px']}
      maxW={['40%', '40%', '40%', '40%', '30%']}
      justifySelf="flex-end"
    >
      {selectedDietarySupplements.map((dietarySupplement) => (
        <DietarySupplement key={dietarySupplement.slug} dietarySupplement={dietarySupplement} />
      ))}
    </Flex>
  );
}
