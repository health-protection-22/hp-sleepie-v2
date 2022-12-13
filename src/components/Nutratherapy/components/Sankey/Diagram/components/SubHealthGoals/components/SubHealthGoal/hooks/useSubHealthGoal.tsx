import { useCallback } from 'react';

import { DietarySupplementProps } from '../../../../../../../../@types/DietarySupplementProps';
import { useNutratherapy } from '../../../../../../../../../../contexts/Nutratherapy';
import { useSankey } from '../../../../../../contexts/sankey';

import { SubHealthGoalProps } from '../../../../../@types/SubHealthGoalProps';

export const useSubHealthGoal = () => {
  const nutratherapyContext = useNutratherapy();
  const {
    filters,
    combinations,
    selectedDietarySupplements,
    updateFilters,
    updateSelectedDietarySupplements,
  } = nutratherapyContext;

  const context = useSankey();
  const { updateClickedSubHealthGoal } = context;

  const { choices } = filters;

  const isActive = useCallback(
    (subHealthGoalSlug: string) => {
      const selectedChoice = Object.entries(choices).find(
        ({ 0: choice }) => choice === subHealthGoalSlug,
      );

      if (!selectedChoice) {
        return false;
      }

      return !!selectedChoice && selectedChoice[1] !== 'no';
    },
    [choices],
  );

  const activeOption = useCallback(
    (subHealthGoalSlug: string) => choices[subHealthGoalSlug] || 'no',
    [choices],
  );

  const relatedDietarySupplements = useCallback(
    (subHealthGoal: SubHealthGoalProps) => {
      const selectedChoiceEntry = Object.entries(choices).find(
        ({ 0: key }) => key === subHealthGoal.slug,
      );

      if (!selectedChoiceEntry) return [];

      const selectedChoice = selectedChoiceEntry[1];

      const isValidChoice =
        selectedChoice === 'min' || selectedChoice === 'med' || selectedChoice === 'max';

      if (isValidChoice) {
        return subHealthGoal.options[selectedChoice].items;
      }

      return [];
    },
    [combinations],
  );

  const handleFineTuneClick = useCallback(
    (subHealthGoal: string, option: string, optionDietarySupplements: DietarySupplementProps[]) => {
      const updatedFilters = {
        ...filters,
        choices: { ...filters.choices, [subHealthGoal]: option },
      };

      const filterHasBeenUpdated = JSON.stringify(filters) !== JSON.stringify(updatedFilters);

      if (filterHasBeenUpdated) {
        updateFilters(updatedFilters);
      }

      updateClickedSubHealthGoal(subHealthGoal);
    },
    [
      filters,
      selectedDietarySupplements,
      updateFilters,
      updateSelectedDietarySupplements,
      updateClickedSubHealthGoal,
    ],
  );

  return {
    isActive,
    activeOption,
    relatedDietarySupplements,
    handleFineTuneClick,
  };
};
