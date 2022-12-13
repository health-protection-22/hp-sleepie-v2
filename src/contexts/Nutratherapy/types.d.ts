import { CombinationsProps } from '../../services/nutratherapy/types';
import { HabitProps } from '../../@types/HabitProps';
import { DietarySupplementProps } from '../../components/Nutratherapy/@types/DietarySupplementProps';
import { FiltersProps } from '../../components/Nutratherapy/@types/FiltersProps';

export type NutratherapyContextProps = {
  isLoading: boolean;
  combinations: CombinationsProps;
  selectedDietarySupplements: DietarySupplementProps[];
  filters: FiltersProps;
  habits: HabitProps[];
  relatedQuestions: RelatedQuestionProps[];
  updateCombinations(_updatedCombinations: CombinationsProps): void;
  updateSelectedDietarySupplements(
    _updatedSelectedDietarySupplements: DietarySupplementProps[],
  ): void;
  updateFilters(_updatedFilters: FiltersProps): void;
  updateHabits(_updatedHabits: HabitProps[]): void;
  clearFilters(): void;
};
