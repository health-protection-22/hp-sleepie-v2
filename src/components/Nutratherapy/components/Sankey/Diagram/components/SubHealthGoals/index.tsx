import React from 'react';
import { useBreakpointValue } from '@chakra-ui/react';

import { useNutratherapy } from '../../../../../../../contexts/Nutratherapy';

import { SubHealthGoal } from './components/SubHealthGoal';

import { SubHealthGoalProps } from '../../@types/SubHealthGoalProps';

export function SubHealthGoals() {
  const { combinations } = useNutratherapy();
  const isWideVersion = useBreakpointValue({
    base: false,
    xl: true,
  });
  const subHealthGoals = Object.entries(combinations).reduce(
    (acc: SubHealthGoalProps[], { 1: healthGoalProps }) => {
      const healthGoalSubHealthGoals: SubHealthGoalProps[] = Object.entries(
        healthGoalProps.suboutcomes,
      ).map(({ 0: subHealthGoal, 1: subHealthGoalProps }) => ({
        subHealthGoal,
        ...subHealthGoalProps,
      }));

      return [...acc, ...healthGoalSubHealthGoals];
    },
    [],
  );

  return (
    <div
      id="subHealthGoals"
      className={`${isWideVersion ? `flex flex-col` : `hidden`} gap-8 flex-1 max-w-[30%] `}
    >
      {subHealthGoals.map((subHealthGoal) => (
        <SubHealthGoal key={subHealthGoal.slug} subHealthGoal={subHealthGoal} />
      ))}
    </div>
  );
}
