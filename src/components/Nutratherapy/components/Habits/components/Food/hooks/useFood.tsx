import { useCallback, useMemo } from 'react';

import { useNutratherapy } from '../../../../../../../contexts/Nutratherapy';

import { FoodProps } from '../../../../../../../services/nutratherapy/types';

interface ComponentProps {
  food: FoodProps;
}

export const useFood = ({ food }: ComponentProps) => {
  const context = useNutratherapy();
  const { selectedDietarySupplements, habits, updateHabits, filters, updateFilters } = context;

  const getActualValue = (foodSlug: string) => {
    const habits = filters.habits;
    if (!habits) return undefined;
    return habits[foodSlug];
  };

  const interactedDietarySupplements = useMemo(
    () =>
      food.interactions.filter((item) =>
        selectedDietarySupplements
          .reduce((acc: string[], curr) => [...acc, curr.slug], [])
          .includes(item),
      ),
    [food.interactions, selectedDietarySupplements],
  );

  const interactedDietarySupplementsSlugs = useMemo(
    () => interactedDietarySupplements.reduce((acc: string[], curr) => [...acc, curr], []),
    [interactedDietarySupplements],
  );

  const currentFrequency = useMemo(
    () => habits.find((habit) => habit.food === food.slug)?.frequency,
    [food.slug, habits],
  );

  const handleSelectChange = useCallback(
    (selectedFood: string, foodDietarySupplementsSlugs: string[], frequency: string) => {
      let actualHabits;
      if (filters.habits) {
        actualHabits = filters.habits;
      } else {
        actualHabits = {};
      }
      actualHabits = {
        ...actualHabits,
        [selectedFood]: frequency,
      };

      updateFilters({
        ...filters,
        habits: actualHabits,
      });
    },
    [habits, updateHabits],
  );

  return {
    interactedDietarySupplementsSlugs,
    currentFrequency,
    handleSelectChange,
    getActualValue,
  };
};
