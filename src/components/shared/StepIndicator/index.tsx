import React from 'react';
import { CleanArrow } from '../CleanArrow';
import { When } from '../When';

type Props = {
  stepsLabel: string[];
  actualStep: number;
};
export function StepIndicator({ stepsLabel, actualStep }: Props) {
  const numberOfSteps = stepsLabel.length;

  const spanIndicators = stepsLabel.map((label, index) => {
    const labelCount = index + 1;

    return (
      <div key={index} className="flex gap-2 items-center text-base font-normal">
        <span
          className={
            actualStep == labelCount || (labelCount == numberOfSteps && actualStep > numberOfSteps)
              ? 'text-black'
              : 'text-customGray'
          }
        >
          {label}
        </span>
        <When value={labelCount < numberOfSteps}>
          <CleanArrow direction="right" />
        </When>
      </div>
    );
  });

  return <div className={'flex flex-row items-center justify-center gap-2'}>{spanIndicators}</div>;
}
