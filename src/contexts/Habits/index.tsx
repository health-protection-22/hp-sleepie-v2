import React, { createContext, ReactNode, useContext, useState } from 'react';

import { FoodProps } from '../../services/nutratherapy/types';
import { HabitsContextProps } from './types';

type HabitsProviderProps = {
  children: ReactNode;
};

export const HabitsContext = createContext({} as HabitsContextProps);

export function HabitsProvider({ children }: HabitsProviderProps) {
  const [foods, setFoods] = useState<FoodProps[]>([]);

  return (
    <HabitsContext.Provider
      value={{
        foods,
        setFoods,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
}

export const useHabitsContext = () => useContext(HabitsContext);
