import React from 'react';
import { Box } from '@chakra-ui/react';

import { SubConnection } from './components/SubConnection';

import { HealthGoalProps } from '../../../../../../@types/HealthGoalProps';

type Props = {
  healthGoal: HealthGoalProps;
};

export function SubConnections({ healthGoal }: Props) {
  const subHealthGoals = Object.values(healthGoal.suboutcomes);

  return (
    <Box position="absolute" top={0} right={0}>
      {subHealthGoals.map((subHealthGoal) => (
        <SubConnection
          key={subHealthGoal.slug}
          healthGoal={healthGoal}
          subHealthGoal={subHealthGoal}
        />
      ))}
    </Box>
  );
}
