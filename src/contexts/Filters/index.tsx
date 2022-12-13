import React, { createContext, ReactNode, useContext, useState } from 'react';

import { DrugProps, NutraceuticalProps } from '../../services/nutratherapy/types';
import { FiltersContextProps, AnswerProps } from './types';

type FiltersProviderProps = {
  children: ReactNode;
};

export const FiltersContext = createContext({} as FiltersContextProps);

export function FiltersProvider({ children }: FiltersProviderProps) {
  const [birthDate, setBirthDate] = useState<string>('');
  const [gender, setGender] = useState<AnswerProps>({ slug: '', title: '' });
  const [subGender, setSubGender] = useState<AnswerProps>({ slug: '', title: '' });
  const [diets, setDiets] = useState<string[]>([]);
  const [allergies, setAllergies] = useState<string[]>([]);
  const [drugs, setDrugs] = useState<DrugProps[]>([]);
  const [selectedDrugs, setSelectedDrugs] = useState<DrugProps[]>([]);
  const [nutraceuticals, setNutraceuticals] = useState<NutraceuticalProps[]>([]);
  const [selectedNutraceuticals, setSelectedNutraceuticals] = useState<NutraceuticalProps[]>([]);

  return (
    <FiltersContext.Provider
      value={{
        birthDate,
        gender,
        subGender,
        diets,
        allergies,
        drugs,
        selectedDrugs,
        nutraceuticals,
        selectedNutraceuticals,
        setBirthDate,
        setGender,
        setSubGender,
        setDiets,
        setAllergies,
        setDrugs,
        setSelectedDrugs,
        setNutraceuticals,
        setSelectedNutraceuticals,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

export const useFilters = () => useContext(FiltersContext);
