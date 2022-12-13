import Image from 'next/image';
import React from 'react';
import { ContentContainer } from '../ContentContainer';

export function SecurityContent() {
  return (
    <ContentContainer>
      <Image
        src={'/images/Security.png'}
        alt="Sangkey graph, witch demonstrate how the graph works"
        width={210}
        height={262}
      />
      <p className="text-xl text-center font-normal text-textSecondary">
        Privacy is our priority! We have taken many steps to insure that your data will be fully
        protected during and after the personalization process.
      </p>
    </ContentContainer>
  );
}
