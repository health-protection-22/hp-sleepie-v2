import React from 'react';

import { AgeFilter } from './components/AgeFilter';
import { GenderFilter } from './components/GenderFilter';
import { DietFilter } from './components/DietFilter';
import { AllergyFilter } from './components/AllergyFilter';
import { DrugFilter } from './components/DrugFilter';
import { NutraceuticalFilter } from './components/NutraceuticalFilter';

import { RelatedQuestionProps } from '../../../../../../services/nutratherapy/types';

type Props = {
  type: string;
  question: RelatedQuestionProps;
};

export function Question({ type, question }: Props) {
  switch (type) {
    case 'age':
      return <AgeFilter />;

    case 'gender':
      return <GenderFilter question={question} />;

    case 'diet':
      return <DietFilter question={question} />;

    case 'allergy':
      return <AllergyFilter question={question} />;

    case 'drug':
      return <DrugFilter />;

    case 'nutraceutical':
      return <NutraceuticalFilter />;

    default:
      return <></>;
  }
}
