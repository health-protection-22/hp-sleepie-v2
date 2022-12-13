import Image from 'next/image';
import React from 'react';
import { ContentContainer } from '../ContentContainer';

export function StartYourSleepContent() {
  return (
    <ContentContainer>
      <Image
        src={'/images/SleepJourneyImage.png'}
        alt="Sangkey graph, witch demonstrate how the graph works"
        width={405.25}
        height={296.32}
      />
      <p className="text-xl text-center font-normal text-textSecondary">
        After customizing your supplement combination and placing your order, your first Sleepie box
        will be on its way and you can say goodbye to those sleepless nights once and for all. For
        additional support, please go to FAQs.
      </p>
    </ContentContainer>
  );
}
