import { Box, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import { When } from '../../shared/When';
import { StepByStep } from './StepByStep';
import { StepByStepMobile } from './StepByStepMobile';

export function HowItWorks() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <div
      id="how-it-works"
      className="w-full flex flex-col justify-center items-center py-16 lg:py-[98px] bg-[#EEF9FE]"
    >
      <div className="max-w-[1440px] px-6 lg:px-[60px] w-full flex flex-col gap-10 items-start lg:flex-row lg:justify-between">
        <Box
          bg="url(/images/HowItWorks.png) no-repeat"
          bgPosition="bottom left"
          bgSize={'contain'}
          maxWidth={'700px'}
          display={'flex'}
          flexDirection={'column'}
          gap={4}
          minHeight={['400px', '500px', '650px', '650px', '700px']}
          width={'full'}
        >
          <h2 className="text-[30px] lg:text-[40px] font-bold text-text-primary leading-8 lg:leading-[48px]">
            How it works
          </h2>
          <p className="text-[16px] lg:text-[20px] leading-6 font-normal text-text-secondary max-w-[370px]">
            Sleepie combines science and self-reported data to design a personalized formula based
            on 43 natural supplements to address your sleep problems like no other.
          </p>
        </Box>
        <When value={isWideVersion}>
          <StepByStep />
        </When>
        <When value={!isWideVersion}>
          <StepByStepMobile />
        </When>
      </div>
    </div>
  );
}
