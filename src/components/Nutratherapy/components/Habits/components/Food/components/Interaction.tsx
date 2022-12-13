import React, { useMemo } from 'react';
import { Text } from '@chakra-ui/react';

import { DietarySupplementProps } from '../../../../../@types/DietarySupplementProps';

interface InteractionProps {
  dietarySupplement: DietarySupplementProps;
}

export function Interaction({ dietarySupplement }: InteractionProps) {
  const hasDiscounts = false;

  const isReduced = hasDiscounts;

  const isRemoved = hasDiscounts;

  const color = useMemo(() => {
    if (isRemoved) {
      return 'red';
    } else if (isReduced) {
      return 'orange';
    } else {
      return 'gray.600';
    }
  }, [isReduced, isRemoved]);

  return (
    <Text
      as="span"
      fontSize={['xs', 'xs', 'sm']}
      fontWeight="semibold"
      textDecoration={isRemoved ? 'line-through' : ''}
      borderWidth={2}
      borderColor={color}
      color={color}
      px={2}
      borderRadius="3xl"
    >
      {dietarySupplement.title}
    </Text>
  );
}
