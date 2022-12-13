import { useCallback } from 'react';

import { useNutratherapy } from '../../../../../../../../contexts/Nutratherapy';
import { useSankey } from '../../../../contexts/sankey';

import { DietarySupplementProps } from '../../../../../../@types/DietarySupplementProps';

export const useBlacklist = () => {
  const context = useNutratherapy();
  const { filters, updateFilters } = context;

  const sankeyContext = useSankey();
  const { removedDietarySupplements, updateRemovedDietarySupplements } = sankeyContext;

  const handleRestoreClick = useCallback(
    (dietarySupplement: DietarySupplementProps) => {
      const existentBlacklist = filters.blacklist || [];
      const updatedFilters = {
        ...filters,
        blacklist: existentBlacklist.filter((slug) => slug !== dietarySupplement.slug),
      };

      const updatedRemovedDietarySupplements = removedDietarySupplements.filter(
        (removedDietarySupplement) => removedDietarySupplement.slug !== dietarySupplement.slug,
      );

      updateRemovedDietarySupplements(updatedRemovedDietarySupplements);
      updateFilters(updatedFilters);
    },
    [filters, removedDietarySupplements, updateFilters, updateRemovedDietarySupplements],
  );

  return {
    handleRestoreClick,
  };
};
