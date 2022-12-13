import { useMemo } from 'react';

import { useNutratherapy } from '../../../../../contexts/Nutratherapy';
import { useHabitsContext } from '../../../../../contexts/Habits';

import { DietarySupplementProps } from '../../../../../services/nutratherapy/types';

export const useHabits = () => {
  const context = useNutratherapy();
  const { selectedDietarySupplements, habits } = context;

  const habitsContext = useHabitsContext();
  const { foods } = habitsContext;

  const foodlessDietarySupplements = selectedDietarySupplements.filter(
    (selectedDietarySupplement) =>
      !foods
        .reduce((acc: string[], curr) => [...acc, ...curr.interactions], [])
        .includes(selectedDietarySupplement.slug),
  );

  const foodlessMessage = useMemo(() => {
    const query = foodlessDietarySupplements
      .reduce((acc: string[], curr) => [...acc, curr.title], [])
      .join(', ')
      .replace(/,(?=[^,]*$)/, ' and');

    const verb = foodlessDietarySupplements.length > 1 ? 'are' : 'is';

    const text = `For ${query} there ${verb} no adjustments to be made for your list of sleep supplements.`;

    return {
      query,
      text,
    };
  }, [foodlessDietarySupplements]);

  const reducedDietarySupplements = useMemo(() => {
    return selectedDietarySupplements.filter((dietarySupplement) => {
      const discountedDietarySupplements = habits
        .filter((habit) => !!habit.frequency)
        .reduce((acc: string[], habit) => [...acc, ...habit.dietarySupplementsSlugs], []);

      return discountedDietarySupplements.includes(dietarySupplement.slug);
    });
  }, [selectedDietarySupplements, habits]);

  const reducedMessage = useMemo(() => {
    const query = reducedDietarySupplements
      .reduce((acc: string[], curr) => [...acc, curr.title], [])
      .join(', ')
      .replace(/,(?=[^,]*$)/, ' and');

    const verb = reducedDietarySupplements.length > 1 ? 'were' : 'was';

    const text = `Based on your current food intake, the dosage of ${query} ${verb} adjusted.`;

    return {
      query,
      text,
    };
  }, [reducedDietarySupplements]);

  const removedDietarySupplements: DietarySupplementProps[] = [];

  const removedMessage = useMemo(() => {
    const query = removedDietarySupplements
      .reduce((acc: string[], curr) => [...acc, curr.title], [])
      .join(', ')
      .replace(/,(?=[^,]*$)/, ' and');

    const verb = removedDietarySupplements.length > 1 ? 'were' : 'was';

    const text = `Based on your current food intake, ${query} ${verb} removed.`;

    return {
      query,
      text,
    };
  }, [removedDietarySupplements]);

  return {
    foodlessDietarySupplements,
    foodlessMessage,
    reducedDietarySupplements,
    reducedMessage,
    removedDietarySupplements,
    removedMessage,
  };
};
