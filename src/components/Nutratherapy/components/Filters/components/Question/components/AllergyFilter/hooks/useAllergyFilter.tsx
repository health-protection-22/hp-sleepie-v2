import { useCallback, useMemo } from 'react';

import { useNutratherapy } from '../../../../../../../../../contexts/Nutratherapy';
import { useFilters } from '../../../../../../../../../contexts/Filters';

import { RelatedQuestionProps } from '../../../../../../../../../services/nutratherapy/types';
import { FiltersProps } from '../../../../../../../../Nutratherapy/@types/FiltersProps';

type Props = {
  question: RelatedQuestionProps;
};

export function useAllergyFilter({ question }: Props) {
  const { filters, updateFilters } = useNutratherapy();

  const { allergies, setAllergies } = useFilters();

  const noneOption = question.answers.find((answer) => answer.slug === 'none');

  const handleAllergyCheck = useCallback(
    (allergyValue: string, allergyLabel: string) => {
      const existentAllergies = filters.answers?.allergy?.answer || [];
      const existInFilter = existentAllergies.includes(allergyValue);
      const existInSelectedAllergies = allergies.includes(allergyLabel);

      if (allergyLabel === 'None') {
        const updatedAllergies = existInFilter ? [] : [allergyValue];
        const updatedSelectedAllergies = existInSelectedAllergies ? [] : [allergyLabel];

        const updatedFilters: FiltersProps = {
          ...filters,
          answers: { ...filters.answers, allergy: { answer: updatedAllergies } },
        };

        updateFilters(updatedFilters);
        setAllergies(updatedSelectedAllergies);

        return;
      }

      const updatedAllergies = existInFilter
        ? existentAllergies.filter((allergy) => allergy !== allergyValue)
        : [...existentAllergies, allergyValue].filter((allergy) => allergy !== noneOption?.slug);

      const updatedFilters: FiltersProps = {
        ...filters,
        answers: {
          ...filters.answers,
          allergy: {
            answer: updatedAllergies.filter((allergy) => allergy !== noneOption?.slug),
          },
        },
      };

      updateFilters(updatedFilters);

      const updatedSelectedAllergies = existInSelectedAllergies
        ? allergies.filter((allergy) => allergy !== allergyLabel)
        : [...allergies, allergyLabel].filter((allergy) => allergy !== noneOption?.title);

      setAllergies(updatedSelectedAllergies);
    },
    [filters, allergies],
  );

  const selectedAllergies = useMemo(() => filters.answers?.allergy?.answer, [filters.answers]);

  return {
    allergies,
    selectedAllergies,
    handleAllergyCheck,
  };
}
