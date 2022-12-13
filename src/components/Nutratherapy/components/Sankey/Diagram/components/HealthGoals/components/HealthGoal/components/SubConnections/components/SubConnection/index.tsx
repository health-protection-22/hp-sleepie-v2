import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Box, theme } from '@chakra-ui/react';
import { transparentize } from 'polished';

const Xarrow = dynamic(() => import('react-xarrows'), {
  ssr: false,
});

import { useSankey } from '../../../../../../../../../contexts/sankey';

import { When } from '../../../../../../../../../../../../shared/When';

import { useSubConnection } from './hooks/useSubConnection';

import { HealthGoalProps } from '../../../../../../../../@types/HealthGoalProps';
import { SuboutcomeProps } from '../../../../../../../../../../../../../services/nutratherapy/types';
import { useStatesUtils } from '../../../../../../../../../../../../../utils/functions/states';

type Props = {
  healthGoal: HealthGoalProps;
  subHealthGoal: SuboutcomeProps;
};

export function SubConnection({ healthGoal, subHealthGoal }: Props) {
  const sankeyContext = useSankey();
  const { BASE_HEIGHT } = sankeyContext;

  const { forceUpdate } = useStatesUtils();

  const { relatedDietarySupplements, connectionExists } = useSubConnection({
    healthGoal,
    subHealthGoal,
  });

  useEffect(() => {
    forceUpdate();
  }, [healthGoal, subHealthGoal]);

  return (
    <React.Fragment key={subHealthGoal.slug}>
      <When value={!!relatedDietarySupplements(subHealthGoal).length}>
        {relatedDietarySupplements(subHealthGoal).map((dietarySupplement) => (
          <React.Fragment key={dietarySupplement.slug}>
            <Box
              id={`${healthGoal.slug}_sub_${subHealthGoal.slug}_${dietarySupplement.slug}`}
              height={`${BASE_HEIGHT}px`}
            />
            <Xarrow
              start={`${healthGoal.slug}_sub_${subHealthGoal.slug}_${dietarySupplement.slug}`}
              end={`${dietarySupplement.slug}_sub_${subHealthGoal.slug}_${healthGoal.slug}`}
              showHead={false}
              strokeWidth={BASE_HEIGHT}
              curveness={0.6}
              startAnchor="right"
              endAnchor="left"
              color={transparentize(0.8, healthGoal.color)}
            />
          </React.Fragment>
        ))}
      </When>
      <When value={!relatedDietarySupplements(subHealthGoal).length}>
        <Box id={`${healthGoal.slug}_sub_${subHealthGoal.slug}`} height={`${BASE_HEIGHT}px`} />
        <When value={connectionExists}>
          <Xarrow
            start={`${healthGoal.slug}_sub_${subHealthGoal.slug}`}
            end={`sub_${subHealthGoal.slug}`}
            showHead={false}
            strokeWidth={BASE_HEIGHT}
            curveness={0.6}
            startAnchor="right"
            endAnchor="left"
            color={theme.colors.gray[200]}
          />
        </When>
      </When>
    </React.Fragment>
  );
}
