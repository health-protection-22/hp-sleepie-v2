import { useState, useCallback } from 'react';
import { useDisclosure } from '@chakra-ui/react';

import { wordpressServices } from '../../../../../../../../../../services/wordpress';

import { useNutratherapy } from '../../../../../../../../../../contexts/Nutratherapy';
import { useSankey } from '../../../../../../contexts/sankey';

import { DietarySupplementProps } from '../../../../../../../../@types/DietarySupplementProps';
import { RelationProps } from '../../../../../@types/RelationProps';

export const useDietarySupplement = () => {
  const context = useNutratherapy();
  const { filters, combinations, updateFilters } = context;
  const { choices } = filters;

  const sankeyContext = useSankey();
  const { removedDietarySupplements, updateRemovedDietarySupplements } = sankeyContext;

  const [relations, setRelations] = useState<RelationProps[]>([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const relatedSubHealthGoals = useCallback(
    (dietarySupplementSlug: string) => {
      return Object.entries(choices).reduce(
        (acc: string[], { 0: subHealthGoal, 1: activeOption }) => {
          const selectedCombination = Object.values(combinations).find((combination) =>
            Object.keys(combination.suboutcomes).includes(subHealthGoal),
          );

          if (selectedCombination) {
            const combinationOptions = selectedCombination.suboutcomes[subHealthGoal].options;
            const selectedOption = Object.entries(combinationOptions).find(
              ({ 0: option }) => option === activeOption,
            );

            if (selectedOption?.length && selectedOption[1].items?.length) {
              const selectedDietarySupplements = selectedOption[1].items;
              const selectedDietarySupplementsSlugs = selectedDietarySupplements.map(
                (dietarySupplement) => dietarySupplement.slug,
              );

              if (selectedDietarySupplementsSlugs.includes(dietarySupplementSlug)) {
                acc.push(subHealthGoal);
              }
            }
          }

          return acc;
        },
        [],
      );
    },
    [combinations],
  );

  const handleStudiesClick = useCallback(
    async (dietarySupplement: DietarySupplementProps) => {
      const updatedRelations = await wordpressServices().getRelations(dietarySupplement.slug);

      setRelations(updatedRelations);
      onOpen();
    },
    [onOpen],
  );

  const handleBlackListClick = useCallback(
    (dietarySupplement: DietarySupplementProps) => {
      const existentBlacklist = filters.blacklist || [];
      const updatedFilters = {
        ...filters,
        blacklist: [...existentBlacklist, dietarySupplement.slug],
      };

      const updatedRemovedDietarySupplements = [...removedDietarySupplements, dietarySupplement];

      updateFilters(updatedFilters);
      updateRemovedDietarySupplements(updatedRemovedDietarySupplements);
    },
    [filters, removedDietarySupplements, updateFilters, updateRemovedDietarySupplements],
  );

  return {
    isOpen,
    onClose,
    relations,
    relatedSubHealthGoals,
    handleStudiesClick,
    handleBlackListClick,
  };
};
