import React, { createContext, useContext, useState, useCallback, useMemo, ReactNode } from 'react';

import { DietarySupplementProps } from '../../../@types/DietarySupplementProps';
import { FineTuneProps } from '../Diagram/@types/FineTuneProps';

interface SankeyContextProps {
  BASE_HEIGHT: number;
  fineTune: FineTuneProps[];
  clickedSubHealthGoal: string;
  removedDietarySupplements: DietarySupplementProps[];
  updateFineTune(_updatedFineTune: FineTuneProps[]): void;
  updateClickedSubHealthGoal(_updatedClickedSubHealthGoal: string): void;
  updateRemovedDietarySupplements(_updatedBlacklist: DietarySupplementProps[]): void;
}

interface SankeyProviderProps {
  children: ReactNode;
}

const SankeyContext = createContext<SankeyContextProps>({} as SankeyContextProps);

export const SankeyProvider = ({ children }: SankeyProviderProps) => {
  const BASE_HEIGHT = 49.5;

  const [fineTune, setFineTune] = useState<FineTuneProps[]>([]);
  const [clickedSubHealthGoal, setClickedSubHealthGoal] = useState<string>('');
  const [removedDietarySupplements, setRemovedDietarySupplements] = useState<
    DietarySupplementProps[]
  >([]);

  const updateFineTune = useCallback((updatedFineTune: FineTuneProps[]) => {
    setFineTune(updatedFineTune);
  }, []);

  const updateClickedSubHealthGoal = useCallback((updatedClickedSubHealthGoal: string) => {
    setClickedSubHealthGoal(updatedClickedSubHealthGoal);
  }, []);

  const updateRemovedDietarySupplements = useCallback(
    (updatedRemovedDietarySupplements: DietarySupplementProps[]) => {
      setRemovedDietarySupplements(updatedRemovedDietarySupplements);
    },
    [],
  );

  const contextValue = useMemo(
    () => ({
      BASE_HEIGHT,
      fineTune,
      clickedSubHealthGoal,
      removedDietarySupplements,
      updateFineTune,
      updateClickedSubHealthGoal,
      updateRemovedDietarySupplements,
    }),
    [
      fineTune,
      clickedSubHealthGoal,
      removedDietarySupplements,
      updateFineTune,
      updateClickedSubHealthGoal,
      updateRemovedDietarySupplements,
    ],
  );

  return <SankeyContext.Provider value={contextValue}>{children}</SankeyContext.Provider>;
};

export function useSankey() {
  return useContext(SankeyContext);
}
