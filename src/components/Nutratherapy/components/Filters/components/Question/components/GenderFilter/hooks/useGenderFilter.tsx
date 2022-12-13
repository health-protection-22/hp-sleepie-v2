import { useCallback } from 'react';

import { useNutratherapy } from '../../../../../../../../../contexts/Nutratherapy';
import { useFilters } from '../../../../../../../../../contexts/Filters';

import { RelatedQuestionProps } from '../../../../../../../../../services/nutratherapy/types';
import { FiltersProps } from '../../../../../../../@types/FiltersProps';

type Props = {
  question: RelatedQuestionProps;
};

export function useGenderFilter({ question }: Props) {
  const { filters, updateFilters } = useNutratherapy();

  const { gender, subGender, setGender, setSubGender } = useFilters();

  const selectedGenderSlug = filters.answers?.gender?.answer[0];
  const selectedSubGenderSlug = filters.answers?.gender?.answer[1];

  const handleGenderClick = useCallback(
    (genderSlug: string) => {
      const updatedFilters: FiltersProps = {
        ...filters,
        answers: { ...filters.answers, gender: { answer: [genderSlug] } },
      };

      updateFilters(updatedFilters);

      const selectedAnswer = question.answers.find((answer) => answer.slug === genderSlug);

      if (selectedAnswer) {
        setGender({ slug: selectedAnswer.slug, title: selectedAnswer.title });
        setSubGender({ slug: '', title: '' });
      }
    },
    [filters],
  );

  const handleSubGenderClick = useCallback(
    (subgenderSlug: string) => {
      const selectedGenderFilter = filters.answers?.gender?.answer[0] || '';
      const selectedAnswer = question.answers.find(
        (answer) => answer.slug === selectedGenderFilter,
      );

      if (!selectedAnswer) return;

      const subAnswers = Object.values(selectedAnswer.answers)[0].answers;

      const selectedSubAnswer = Object.values(subAnswers).find(
        (subAnswer) => subAnswer.slug === subgenderSlug,
      );

      const existentGenderAnswer = filters.answers?.gender?.answer[0] || '';
      const updatedSubGender =
        filters.answers?.gender?.answer[1] === subgenderSlug ? '' : subgenderSlug;

      const updatedFilters: FiltersProps = {
        ...filters,
        answers: {
          ...filters.answers,
          gender: { answer: [existentGenderAnswer, updatedSubGender] },
        },
      };

      updateFilters(updatedFilters);

      if (selectedSubAnswer) {
        setSubGender({ slug: selectedSubAnswer.slug, title: selectedSubAnswer.title });
      }
    },
    [filters],
  );

  return {
    gender,
    subGender,
    selectedGenderSlug,
    selectedSubGenderSlug,
    handleGenderClick,
    handleSubGenderClick,
  };
}
