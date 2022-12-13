import { useCallback } from 'react';

import { useNutratherapy } from '../../../../../../../../../../../../../../contexts/Nutratherapy';

import { HealthGoalProps } from '../../../../../../../../../@types/HealthGoalProps';
import { SuboutcomeProps } from '../../../../../../../../../../../../../../services/nutratherapy/types';

type Props = {
  healthGoal: HealthGoalProps;
  subHealthGoal: SuboutcomeProps;
};

export const useSubConnection = ({ healthGoal, subHealthGoal }: Props) => {
  const context = useNutratherapy();
  const { filters, combinations } = context;
  const { choices } = filters;

  const relatedDietarySupplements = useCallback(
    (subHealthGoal: SuboutcomeProps) => {
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

  const connectionHead = `${healthGoal.slug}_sub_${subHealthGoal.slug}`;
  const connectionTail = `sub_${subHealthGoal.slug}`;

  const connectionHeadExists = !!document.getElementById(connectionHead);
  const connectionTailExists = !!document.getElementById(connectionTail);

  const connectionExists = connectionHeadExists && connectionTailExists;

  return {
    relatedDietarySupplements,
    connectionExists,
  };
};
