import React from 'react';
import NextLink from 'next/link';
import { Box, Link, SimpleGrid } from '@chakra-ui/react';

import { HealthGoalSimpleProps } from '../../@types/HealthGoalSimpleProps';

interface HealthGoalsListProps {
  healthGoals: HealthGoalSimpleProps[];
}

export function HealthGoalsList({ healthGoals }: HealthGoalsListProps) {
  return (
    <SimpleGrid columns={[1, 2, 4, 4]} gap={6}>
      {healthGoals.map(({ slug, title }) => (
        <Box key={slug} p={3} bg="gray.100" borderRadius="xl">
          <NextLink href={`/health-goals/${slug}`} passHref>
            <Link textTransform="uppercase" fontSize="sm" fontWeight="bold">
              {title}
            </Link>
          </NextLink>
        </Box>
      ))}
    </SimpleGrid>
  );
}
