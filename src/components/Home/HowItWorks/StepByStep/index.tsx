import React from 'react';
import LongArrowBottomIcon from '../../../../assets/icon/LongArrowBottom';
import useHowItWorks from '../hooks/useHowItWorks';
import { StepOneImage } from '../StepsImages/StepOne';
import { StepThreeImage } from '../StepsImages/StepThree';
import { StepTwoImage } from '../StepsImages/StepTwo';
import { StepsText } from '../StepsText';
import { TryNowButton } from '../TryNowButton';

export function StepByStep() {
  const { steps } = useHowItWorks();

  return (
    <div>
      <div className="flex gap-4 items-center">
        <div className="flex flex-col gap-3 items-center">
          <StepOneImage />
          <LongArrowBottomIcon />
          <StepTwoImage />
          <LongArrowBottomIcon />
          <StepThreeImage />
        </div>
        <div className="flex flex-col gap-10">
          {steps.map((item, index) => {
            return (
              <StepsText
                key={index}
                stepNumber={item.stepNumber}
                title={item.title}
                text={item.text}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-[42px] mt-[42px] max-w-[478px]">
        <span className="text-text-secondary font-normal text-base lg:text-xl">
          Your body changes, and so does your sleep. If any changes occur, fill out the sleep data
          again, and your formula will be adjusted in your next box.
        </span>
        <div className="max-w-fit">
          <TryNowButton />
        </div>
      </div>
    </div>
  );
}
