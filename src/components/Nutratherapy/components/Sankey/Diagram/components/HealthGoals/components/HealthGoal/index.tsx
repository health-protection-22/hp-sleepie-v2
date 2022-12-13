import React from 'react';
import { Box, Flex, Text, Tooltip, useBreakpointValue } from '@chakra-ui/react';
import { QuestionIcon } from '@chakra-ui/icons';
import { darken, transparentize } from 'polished';

import { useSankey } from '../../../../../contexts/sankey';

import { When } from '../../../../../../../../shared/When';

import { SubConnections } from './components/SubConnections';

import { useHealthGoal } from './hooks/useHealthGoal';

import { SubHealthGoal } from '../../../SubHealthGoals/components/SubHealthGoal';

import { HealthGoalProps } from '../../../../@types/HealthGoalProps';

export function HealthGoal(healthGoal: HealthGoalProps) {
  const sankeyContext = useSankey();
  const { BASE_HEIGHT } = sankeyContext;

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: false,
    xl: true,
  });

  const { healthGoalHeight } = useHealthGoal();

  const subHealthGoals = Object.values(healthGoal.suboutcomes);

  return (
    <Flex
      key={healthGoal.slug}
      id={healthGoal.slug}
      p={[0, 0, 0, 0, 2]}
      flexDir={['column', 'column', 'column', 'column', 'row']}
      borderRightRadius={['xl', 'xl', 'xl', 'xl', 'none']}
      borderLeftRadius="xl"
      alignItems={['initial', 'initial', 'initial', 'initial', 'center']}
      minH={['none', 'none', 'none', 'none', healthGoalHeight(healthGoal) * BASE_HEIGHT + 'px']}
      position="relative"
      bg={[
        healthGoal.color,
        healthGoal.color,
        healthGoal.color,
        healthGoal.color,
        transparentize(0.5, healthGoal.color),
      ]}
    >
      <Flex gap={1} py={[1, 1, 2, 2, 0]} px={[2, 2, 2, 2, 0]}>
        <Text
          fontSize="sm"
          color={['white', 'white', 'white', 'white', darken(0.2, healthGoal.color)]}
          fontWeight="semibold"
        >
          {healthGoal.question}
        </Text>
        <When value={!!healthGoal.description}>
          <Tooltip
            label={healthGoal.description}
            aria-label={`${healthGoal.title} description`}
            bg={healthGoal.color}
            py={2}
            px={3}
            borderRadius="xl"
            textAlign="justify"
          >
            <QuestionIcon
              color={darken(0.05, healthGoal.color)}
              fontSize={14}
              _hover={{ cursor: 'pointer' }}
            />
          </Tooltip>
        </When>
      </Flex>

      <When value={!isWideVersion}>
        <Box>
          {subHealthGoals.map((subHealthGoal) => (
            <SubHealthGoal key={subHealthGoal.slug} subHealthGoal={subHealthGoal} />
          ))}
        </Box>
      </When>
      <When value={!!isWideVersion}>
        <SubConnections healthGoal={healthGoal} />
      </When>
    </Flex>
  );
}
