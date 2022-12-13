import { useCallback, useMemo } from 'react';

import { useNutratherapy } from '../../../../../../../../../contexts/Nutratherapy';
import { useFilters } from '../../../../../../../../../contexts/Filters';

import { RelatedQuestionProps } from '../../../../../../../../../services/nutratherapy/types';
import { FiltersProps } from '../../../../../../../../Nutratherapy/@types/FiltersProps';

type Props = {
  question: RelatedQuestionProps;
};

export function useDietFilter({ question }: Props) {
  const { filters, updateFilters } = useNutratherapy();

  const { diets, setDiets } = useFilters();

  const noneOption = question.answers.find((answer) => answer.slug === 'none');

  const handleDietCheck = useCallback(
    (dietValue: string, dietLabel: string) => {
      const existentDietsFilter = filters.answers?.diet?.answer || [];
      const existInFilter = existentDietsFilter.includes(dietValue);
      const existInSelectedDiets = diets.includes(dietLabel);

      if (dietLabel === 'None') {
        const updatedDiets = existInFilter ? [] : [dietValue];
        const updatedSelectedDiets = existInSelectedDiets ? [] : [dietLabel];

        const updatedFilters: FiltersProps = {
          ...filters,
          answers: { ...filters.answers, diet: { answer: updatedDiets } },
        };

        updateFilters(updatedFilters);
        setDiets(updatedSelectedDiets);

        return;
      }

      const updatedDiets = existInFilter
        ? existentDietsFilter.filter((allergy) => allergy !== dietValue)
        : [...existentDietsFilter, dietValue].filter((allergy) => allergy !== noneOption?.slug);

      const updatedFilters: FiltersProps = {
        ...filters,
        answers: {
          ...filters.answers,
          diet: {
            answer: updatedDiets.filter((diet) => diet !== noneOption?.slug),
          },
        },
      };

      updateFilters(updatedFilters);

      const updatedSelectedDiets = existInSelectedDiets
        ? diets.filter((diet) => diet !== dietLabel)
        : [...diets, dietLabel].filter((diet) => diet !== noneOption?.title);

      setDiets(updatedSelectedDiets);
    },
    [filters, diets],
  );

  const selectedDiets = useMemo(() => filters.answers?.diet?.answer, [filters.answers]);

  return {
    selectedDiets,
    diets,
    handleDietCheck,
  };
}
