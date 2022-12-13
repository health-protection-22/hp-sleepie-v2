import React, { useCallback, useMemo } from 'react';
import { SimpleGrid } from '@chakra-ui/react';

import { DietarySupplement } from './DietarySupplement';

type DietarySupplementsListProps = {
  dietarySupplements: DietarySupplementsItem[];
  limit?: number;
  order?: 'asc' | 'desc';
};

type DietarySupplementsItem = {
  slug: string;
  title: string;
  category: {
    slug: string;
    name: string;
    color: string;
  };
};

export function DietarySupplementsList({
  dietarySupplements,
  limit,
  order = 'asc',
}: DietarySupplementsListProps) {
  const sortArray = useCallback(
    (dietarySupplements: DietarySupplementsItem[], order: 'asc' | 'desc') => {
      switch (order) {
        case 'asc':
          return dietarySupplements.sort((a, b) => (a.slug > b.slug ? 1 : -1));

        case 'desc':
          return dietarySupplements.sort((a, b) => (a.slug > b.slug ? -1 : 1));

        default:
          return dietarySupplements;
      }
    },
    [dietarySupplements, order],
  );

  const sortedDietarySupplements = useMemo(
    () => sortArray(dietarySupplements, order),
    [dietarySupplements, order],
  );

  return (
    <SimpleGrid columns={[1, 1, 2, 4]} gap={6} mt={8} textAlign="left">
      {sortedDietarySupplements.slice(0, limit).map(({ slug, title, category }) => (
        <DietarySupplement key={slug} slug={slug} title={title} category={category} />
      ))}
    </SimpleGrid>
  );
}
