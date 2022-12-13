import Image from 'next/image';
import React from 'react';
import ExclusiveFormulaIcon from '../../../../../assets/icon/ExclusiveFormula';
import { ContentContainer } from '../ContentContainer';

export function FineTuneContent() {
  return (
    <ContentContainer>
      <ExclusiveFormulaIcon />
      <Image
        src={'/images/FineTuneImage.svg'}
        alt="Sangkey graph, witch demonstrate how the graph works"
        width={502}
        height={279}
      />
      <p className="text-xl text-center font-normal text-textSecondary">
        Your diet and eating habits directly affect the scientific process of personalizing your
        formula, therefore, it is essential that you provide accurate information so our team of
        specialists can best match the supplements to your profile.
      </p>
    </ContentContainer>
  );
}
