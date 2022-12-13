import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  ReactNode,
  useEffect,
} from 'react';

import { NutratherapyContextProps } from './types';
import { CombinationsProps, RelatedQuestionProps } from '../../services/nutratherapy/types';
import { HabitProps } from '../../@types/HabitProps';
import { DietarySupplementProps } from '../../components/Nutratherapy/@types/DietarySupplementProps';
import { FiltersProps } from '../../components/Nutratherapy/@types/FiltersProps';

import { useCartContext } from '../Cart';
import { useFilters } from '../Filters';
import { useHabitsContext } from '../Habits';

import { useGetCombinations } from '../../services/nutratherapy/hooks/useGetCombinations';
import { useGetDrugs } from '../../services/nutratherapy/hooks/useGetDrugs';
import { useGetDietarySupplements } from '../../services/nutratherapy/hooks/useGetDietarySupplements';
import { UserProfile } from '../Cart/types';

interface NutratherapyProviderProps {
  defaultCombinations: CombinationsProps;
  children: ReactNode;
}

const NutratherapyContext = createContext<NutratherapyContextProps>({} as NutratherapyContextProps);

export const NutratherapyProvider = ({
  defaultCombinations,
  children,
}: NutratherapyProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [relatedQuestions, setRelatedQuestions] = useState<RelatedQuestionProps[]>([]);
  const [combinations, setCombinations] = useState<CombinationsProps>(defaultCombinations);
  const [selectedDietarySupplements, setSelectedDietarySupplements] = useState<
    DietarySupplementProps[]
  >([]);
  const [filters, setFilters] = useState<FiltersProps>(() => {
    const defaultChoices = Object.values(defaultCombinations).reduce((acc, { suboutcomes }) => {
      const defaultSuboutcomes = Object.values(suboutcomes).reduce(
        (subAcc, suboutcome) => ({ ...subAcc, [suboutcome.slug]: 'no' }),
        {},
      );

      return { ...acc, ...defaultSuboutcomes };
    }, {});

    return { choices: defaultChoices };
  });

  const [habits, setHabits] = useState<HabitProps[]>([]);

  const { setCartItems, setProductsPacks, setUserProfile } = useCartContext();

  const { data } = useGetCombinations({ filters });
  const { data: drugs } = useGetDrugs({});
  const { data: nutraceuticals } = useGetDietarySupplements({});

  const { setDrugs } = useFilters();

  const { setNutraceuticals } = useFilters();

  const { setFoods } = useHabitsContext();

  useEffect(() => {
    if (!drugs) return;

    setDrugs(drugs);
  }, [drugs]);

  useEffect(() => {
    if (!nutraceuticals) return;

    setNutraceuticals(nutraceuticals);
  }, [nutraceuticals]);

  useEffect(() => {
    setIsLoading(true);

    if (!data) return;

    const { choices } = filters;
    const { combinations, relatedFoods, products, relatedQuestions, productsPacks } = data;
    const newUserProfile = {
      filters,
      responseCombinations: {
        excludedNutraceuticals: data.excludedNutraceuticals,
        excludedFoods: data.excludedFoods,
        combinations: data.combinations,
      },
    } as UserProfile;

    setRelatedQuestions(relatedQuestions);
    setProductsPacks(productsPacks);
    setUserProfile(newUserProfile);
    setFoods(relatedFoods);
    setCartItems(products);

    if (drugs) {
      setDrugs(drugs);
    }

    const updateCombinations = async () => {
      const activeDietarySupplements = Object.entries(choices).reduce(
        (acc: DietarySupplementProps[], { 0: subHealthGoal, 1: activeOption }) => {
          const selectedCombination = Object.values(combinations).find((combination) =>
            Object.keys(combination.suboutcomes).includes(subHealthGoal),
          );

          if (selectedCombination) {
            const combinationOptions = selectedCombination.suboutcomes[subHealthGoal].options;
            const selectedOption = Object.entries(combinationOptions).find(
              ({ 0: option }) => option === activeOption,
            );

            if (selectedOption) {
              const selectedDietarySupplements = selectedOption[1].items;

              return [...acc, ...selectedDietarySupplements];
            }
          }

          return acc;
        },
        [],
      );

      const uniqueActiveDietarySupplements = activeDietarySupplements.filter(
        (dietarySupplement, index) =>
          activeDietarySupplements.findIndex((item) => item.slug === dietarySupplement.slug) ===
          index,
      );

      setSelectedDietarySupplements(uniqueActiveDietarySupplements);

      setCombinations(combinations);
    };

    updateCombinations();

    setIsLoading(false);
  }, [filters, data]);

  const updateCombinations = useCallback((updatedCombinations: CombinationsProps) => {
    setCombinations(updatedCombinations);
  }, []);

  const updateFilters = useCallback((updatedFilters: FiltersProps) => {
    setFilters(updatedFilters);
  }, []);

  const updateHabits = useCallback(
    (updatedHabits: HabitProps[]) => {
      const sortedHabits = [...habits].sort((a, b) => (a.food > b.food ? 1 : -1));
      const sortedUpdateddHabits = [...updatedHabits].sort((a, b) => (a.food > b.food ? 1 : -1));

      const hasUpdate = JSON.stringify(sortedHabits) !== JSON.stringify(sortedUpdateddHabits);

      if (hasUpdate) {
        setHabits(updatedHabits);
      }
    },
    [selectedDietarySupplements, habits],
  );

  const updateSelectedDietarySupplements = useCallback(
    (updatedSelectedDietarySupplements: DietarySupplementProps[]) => {
      setSelectedDietarySupplements(updatedSelectedDietarySupplements);
    },
    [],
  );

  const clearFilters = () => {
    const defaultChoices = Object.values(defaultCombinations).reduce((acc, { suboutcomes }) => {
      const defaultSuboutcomes = Object.values(suboutcomes).reduce(
        (subAcc, suboutcome) => ({ ...subAcc, [suboutcome.slug]: 'no' }),
        {},
      );

      return { ...acc, ...defaultSuboutcomes };
    }, {});

    setFilters({ choices: defaultChoices });
  };

  const contextValue = useMemo(
    () => ({
      isLoading,
      combinations,
      selectedDietarySupplements,
      filters,
      habits,
      relatedQuestions,
      updateCombinations,
      updateSelectedDietarySupplements,
      updateFilters,
      updateHabits,
      clearFilters,
    }),
    [
      isLoading,
      combinations,
      selectedDietarySupplements,
      filters,
      habits,
      updateCombinations,
      updateSelectedDietarySupplements,
      updateFilters,
      updateHabits,
    ],
  );

  return (
    <NutratherapyContext.Provider value={contextValue}>{children}</NutratherapyContext.Provider>
  );
};

export function useNutratherapy() {
  return useContext(NutratherapyContext);
}
