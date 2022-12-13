import React from 'react';
import { Text } from '@chakra-ui/react';

type Props = {
  title: string;
};

export function FilterTitle({ title }: Props) {
  return (
    <Text fontWeight="semibold" fontSize="xs" color="gray.500" lineHeight="normal" pt={2}>
      {title}
    </Text>
  );
}
