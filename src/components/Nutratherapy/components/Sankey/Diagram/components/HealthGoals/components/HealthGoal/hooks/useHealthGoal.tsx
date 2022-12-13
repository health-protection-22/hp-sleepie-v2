import { useCallback } from 'react';

import { useNutratherapy } from '../../../../../../../../../../contexts/Nutratherapy';

import { HealthGoalProps } from '../../../../../@types/HealthGoalProps';

export const useHealthGoal = () => {
  const context = useNutratherapy();
  const { filters, combinations } = context;
  const { choices } = filters;

  const healthGoalHeight = useCallback(
    (healthGoal: HealthGoalProps) =>
      Object.values(healthGoal.suboutcomes)
        .map((suboutcome) => {
          const activeChoice = choices[suboutcome.slug];
          const activeOption = Object.entries(suboutcome.options).find(
            ({ 0: option }) => option === activeChoice,
          );
          const activeDietarySupplements = activeOption?.[1].items || [];
          const activeConnections = activeDietarySupplements.length || 1;

          return activeConnections;
        })
        .reduce((acc, curr) => acc + curr, 0),
    [combinations],
  );

  return {
    healthGoalHeight,
  };
};
