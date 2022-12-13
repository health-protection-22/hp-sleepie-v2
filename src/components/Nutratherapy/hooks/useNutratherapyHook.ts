import { RelatedQuestionProps } from '../../../services/nutratherapy/types';
import { useMemo } from 'react';
import { FiltersProps } from '../@types/FiltersProps';

type Props = {
  relatedQuestions: RelatedQuestionProps[];
  filters: FiltersProps;
};

export default function useNutratherapyHook({ filters, relatedQuestions }: Props) {
  const questionsAreAnswered = useMemo(() => {
    if (relatedQuestions.length > 0) {
      let areAnswered = true;
      const birthQuestion = relatedQuestions.find((item) => item.category?.slug === 'age');
      const genderQuestion = relatedQuestions.find((item) => item.category?.slug === 'gender');
      const dietQuestion = relatedQuestions.find((item) => item.category?.slug === 'diet');
      const allergiesQuestion = relatedQuestions.find((item) => item.category?.slug === 'allergy');

      if (genderQuestion && !filters.answers?.gender) areAnswered = false;
      if (birthQuestion && !filters.answers?.age) areAnswered = false;
      if (dietQuestion && !filters.answers?.diet) areAnswered = false;
      if (allergiesQuestion && !filters.answers?.allergy) areAnswered = false;

      return areAnswered;
    } else {
      return false;
    }
  }, [filters, relatedQuestions]);

  return { questionsAreAnswered };
}
