import React from 'react';
import { Icon, Flex } from '@chakra-ui/react';
import regexifyString from 'regexify-string';
import { BiRefresh } from 'react-icons/bi';

import { SankeyProvider } from './contexts/sankey';

import { StepIntro } from '../StepIntro';
import { Diagram } from './Diagram';

import { NutritionInfoIcon } from '../../../../assets/icon/NutritionInfo';
import { IndicationArrow } from '../../../shared/IndicationArrow';

export function Sankey() {
  const description = regexifyString({
    pattern: /%s/,
    decorator: (match, index) => {
      switch (index) {
        case 0:
          return <NutritionInfoIcon key={index} style={{ display: 'inline' }} />;
        case 1:
          return <Icon as={BiRefresh} key={index} w={26} h={26} display="inline" />;

        default:
          return match;
      }
    },
    input: 'To check the supplement scientific studies click %s. To replace it click %s',
  });

  return (
    <Flex id={'sankey'} direction={'column'} h={'fit-content'}>
      <StepIntro
        title="Let’s start! Evaluate your sleep."
        subtitle="By selecting, we will show you the most efficient supplement combination for you"
        tooltip="Select the intensity of the problems according to what you feel. You don't need to answer all the disorders, just the ones that affect you."
        subdescription={description}
        icon="/images/icon-sankey.png"
        color={'brand.sankey'}
        isActive
      />
      <SankeyProvider>
        <Diagram />
      </SankeyProvider>
      <div className="w-full flex justify-center mt-[50px] lg:mt-[52px]">
        <IndicationArrow text="Next Step: Personal and Health Conditions" url="/#filters" />
      </div>
    </Flex>
  );
}
