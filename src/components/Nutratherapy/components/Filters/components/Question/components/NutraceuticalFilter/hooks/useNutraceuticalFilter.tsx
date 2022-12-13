import { useNutratherapy } from '../../../../../../../../../contexts/Nutratherapy';
import { useFilters } from '../../../../../../../../../contexts/Filters';

import { FiltersProps } from '../../../../../../../../Nutratherapy/@types/FiltersProps';
import { Option } from '../../../../../../../../../utils/types';

export function useNutraceuticalFilter() {
  const { filters, updateFilters } = useNutratherapy();
  const { nutraceuticals, selectedNutraceuticals, setSelectedNutraceuticals } = useFilters();

  const handleClick = (option: Option) => {
    const hasNutraceutical = selectedNutraceuticals.find(
      (nutraceutical) => nutraceutical.value === option.value,
    );

    if (!hasNutraceutical) {
      const existentNutraceuticals = filters.answers?.nutraceutical?.answer || [];

      const updatedFilters: FiltersProps = {
        ...filters,
        answers: {
          ...filters.answers,
          nutraceutical: { answer: [...existentNutraceuticals, option.value] },
        },
      };

      setSelectedNutraceuticals((prev) => [...prev, { value: option.value, label: option.value }]);
      updateFilters(updatedFilters);
    }
  };

  const selectedDietarySupplementsLabels: string[] = selectedNutraceuticals.map(
    (nutraceutical) => nutraceutical.label,
  );

  return {
    nutraceuticals,
    selectedNutraceuticals,
    selectedDietarySupplementsLabels,
    handleClick,
  };
}
