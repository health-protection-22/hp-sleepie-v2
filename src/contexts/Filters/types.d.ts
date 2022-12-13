import { DrugProps, NutraceuticalProps } from '../../services/nutratherapy/types';

export type FiltersContextProps = {
  birthDate: string;
  gender: AnswerProps;
  subGender: AnswerProps;
  diets: string[];
  allergies: string[];
  drugs: DrugProps[];
  selectedDrugs: DrugProps[];
  nutraceuticals: NutraceuticalProps[];
  selectedNutraceuticals: NutraceuticalProps[];
  setBirthDate: React.Dispatch<React.SetStateAction<string>>;
  setGender: React.Dispatch<React.SetStateAction<AnswerProps>>;
  setSubGender: React.Dispatch<React.SetStateAction<AnswerProps>>;
  setDiets: React.Dispatch<React.SetStateAction<string[]>>;
  setAllergies: React.Dispatch<React.SetStateAction<string[]>>;
  setDrugs: React.Dispatch<React.SetStateAction<DrugProps[]>>;
  setSelectedDrugs: React.Dispatch<React.SetStateAction<DrugProps[]>>;
  setNutraceuticals: React.Dispatch<React.SetStateAction<NutraceuticalProps[]>>;
  setSelectedNutraceuticals: React.Dispatch<React.SetStateAction<NutraceuticalProps[]>>;
};

export type AnswerProps = {
  slug: string;
  title: string;
};
