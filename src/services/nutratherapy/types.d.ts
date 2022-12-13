import { ProductsPacks } from './okCapsule/types';

export type Product = {
  nutraceutical: string;
  dosageUnit: string;
  capsules: number;
  quantity: number;
  dosage: number;
  imgUrl: string;
  title: string;
  price: number;
  slug: string;
};

export type GetCombinationsData = {
  relatedQuestions: RelatedQuestionProps[];
  combinations: CombinationsProps;
  productsPacks: ProductsPacks;
  excludedNutraceuticals: any[];
  relatedFoods: FoodProps[];
  nutraceuticals: any[];
  excludedFoods: any[];
  products: Product[];
};

export type CombinationsProps = {
  [key: string]: HealthGoalProps;
};

export type HealthGoalProps = {
  slug: string;
  title: string;
  description: string;
  color: string;
  question: string;
  suboutcomes: {
    [key: string]: SuboutcomeProps;
  };
};

export type SuboutcomeProps = {
  slug: string;
  title: string;
  description: string;
  color: string;
  question: string;
  parent: string;
  options: {
    min: OptionProps;
    med: OptionProps;
    max: OptionProps;
  };
};

export type OptionProps = {
  items: DietarySupplementProps[];
};

export type DietarySupplementProps = {
  slug: string;
  title: string;
  description: string;
  dosage: string;
  dosageUnit: string;
  isSupercore: number;
};

export type RelatedQuestionProps = {
  uuid: string;
  title: string;
  description: string | null;
  sort: number;
  active: number;
  question: QuestionProps | null;
  category: CategoryProps | null;
  answers: AnswerProps[];
};

export type AnswerProps = {
  uuid: string;
  slug: string;
  title: string;
  description: string | null;
  sort: number;
  active: number;
  question: QuestionProps | null;
  category: CategoryProps | null;
  answers: {
    [key: string]: RelatedQuestionProps;
  };
};

export type QuestionProps = {
  uuid: string;
  title: string;
  description: string;
  sort: number;
  active: number;
};

export type CategoryProps = {
  uuid: string;
  slug: string;
  title: string;
  format_answer: string | null;
  active: number;
};

export type NutraceuticalProps = DrugProps;

export type DrugProps = {
  value: string;
  label: string;
};

export type FoodProps = {
  slug: string;
  title: string;
  measurementUnit: {
    slug: string;
    title: string;
  };
  interactions: string[];
  intakeFrequencies: {
    slug: string;
    title: string;
  }[];
  image: string;
  globalDosages: string;
  frequencyUnit: {
    slug: string;
    title: string;
  };
};
