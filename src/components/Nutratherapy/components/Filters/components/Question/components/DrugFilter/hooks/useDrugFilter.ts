import { useNutratherapy } from '../../../../../../../../../contexts/Nutratherapy';
import { useFilters } from '../../../../../../../../../contexts/Filters';

import { FiltersProps } from '../../../../../../../../Nutratherapy/@types/FiltersProps';
import { Option } from '../../../../../../../../../utils/types';

export function useDrugFilter() {
  const { filters, updateFilters } = useNutratherapy();
  const { drugs, selectedDrugs, setSelectedDrugs } = useFilters();

  const handleClick = (option: Option) => {
    const hasDrug = selectedDrugs.find((drug) => drug.value === option.value);

    if (!hasDrug) {
      const existentDrugs = filters.answers?.drug?.answer || [];

      const updatedFilters: FiltersProps = {
        ...filters,
        answers: {
          ...filters.answers,
          drug: { answer: [...existentDrugs, option.value] },
        },
      };

      setSelectedDrugs((prev) => [...prev, { value: option.value, label: option.value }]);
      updateFilters(updatedFilters);
    }
  };

  const selectedDrugsLabels: string[] = selectedDrugs.map((drug) => drug.label);

  const removeDrug = (drugLabel: string) => {
    const drugs = selectedDrugs;
    const drugToRemove = drugs.find((item) => item.label === drugLabel);
    if (!drugToRemove) return;
    const indexDrugToRemove = drugs.indexOf(drugToRemove);
    drugs.splice(indexDrugToRemove, 1);
    setSelectedDrugs(drugs);
    const newDrugsValuesArray: string[] = [];
    drugs.map((item) => {
      newDrugsValuesArray.push(item.value);
    });
    const updatedFilters: FiltersProps = {
      ...filters,
      answers: {
        ...filters.answers,
        drug: { answer: newDrugsValuesArray },
      },
    };
    updateFilters(updatedFilters);
  };

  return {
    drugs,
    selectedDrugs,
    selectedDrugsLabels,
    handleClick,
    removeDrug,
  };
}
