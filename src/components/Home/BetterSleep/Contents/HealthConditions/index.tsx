import Image from 'next/image';
import React from 'react';
import HealthConditionsIcon from '../../../../../assets/icon/HealthConditions';
import { ContentContainer } from '../ContentContainer';

export function HealthConditionsContent() {
  return (
    <ContentContainer>
      <HealthConditionsIcon />
      <Image
        src={'/images/HealthConditionsImage.svg'}
        alt="Sangkey graph, witch demonstrate how the graph works"
        width={700}
        height={287.5}
      />
      <p className="text-xl text-center font-normal text-textSecondary">
        Play an active role in the process by updating your health information on the site, then
        watch as the Sleepie adjusts your supplement combination and optimizes your sleep.
      </p>
    </ContentContainer>
  );
}
