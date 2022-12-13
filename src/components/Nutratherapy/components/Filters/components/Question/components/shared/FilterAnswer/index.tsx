import React from 'react';
import { Box, Flex, Text, Spinner } from '@chakra-ui/react';

import { useNutratherapy } from '../../../../../../../../../contexts/Nutratherapy';

import { When } from '../../../../../../../../shared/When';

type Props = {
  value: string;
  suffix?: string;
  label: string;
};

export function FilterAnswer({ value, label, suffix }: Props) {
  const { isLoading } = useNutratherapy();

  return (
    <Flex alignItems="center" justifyContent="space-between" gap={2}>
      <When value={!!value}>
        <Text>
          {value}{' '}
          <When value={!!suffix}>
            {' '}
            <Text as="span" fontSize="xs">
              ({suffix})
            </Text>
          </When>
        </Text>
      </When>
      <When value={!value}>
        <Text color="gray.400" className="step-two-interaction">
          {label}
        </Text>
      </When>
      <Box width={2} lineHeight={1}>
        <When value={isLoading}>
          <Spinner
            color="brand.filters"
            emptyColor="gray.200"
            size="sm"
            thickness="2px"
            speed="0.75s"
          />
        </When>
      </Box>
    </Flex>
  );
}
