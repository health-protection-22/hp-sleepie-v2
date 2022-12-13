import { FoodProps } from '../../services/nutratherapy/types';

export type HabitsContextProps = {
  foods: FoodProps[];
  setFoods: React.Dispatch<React.SetStateAction<FoodProps[]>>;
};
