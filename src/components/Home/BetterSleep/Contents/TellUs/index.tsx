import { useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import SankeyIcon from '../../../../../assets/icon/Sankey';
import { ContentContainer } from '../ContentContainer';

export function TellUsContent() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <ContentContainer>
      <SankeyIcon />
      <Image
        src={isWideVersion ? '/images/SankeyImage.svg' : '/images/MobileSankey.svg'}
        alt="Sangkey graph, witch demonstrate how the graph works"
        width={isWideVersion ? 700 : 281}
        height={isWideVersion ? 287.49 : 238.71}
      />
      <p className="text-xl text-center font-normal text-textSecondary">
        You will indicate the intensity of the disturbances that apply to you. Your answers
        customize your nutraceuticals at a scientific, grounded, first level to address your needs
        and get you back to a good night{'\u0027'}s sleep.
      </p>
    </ContentContainer>
  );
}
