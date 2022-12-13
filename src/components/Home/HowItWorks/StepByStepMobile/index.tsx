import React from 'react';
import LongArrowBottomIcon from '../../../../assets/icon/LongArrowBottom';
import { When } from '../../../shared/When';
import { TryNowButton } from '../TryNowButton';
import useStepByStepMobile from './hooks/useStepByStepMobile';
import { StepsContent } from './StepsContent';

export function StepByStepMobile() {
  const { steps } = useStepByStepMobile();

  return (
    <>
      {steps.map((item, index) => {
        return (
          <div key={index} className="flex flex-col items-center gap-6">
            <StepsContent
              color={item.stepColor}
              image={item.image}
              stepNumber={item.stepNumber}
              text={item.text}
              title={item.title}
            />
            <When value={index !== steps.length - 1}>
              <LongArrowBottomIcon />
            </When>
          </div>
        );
      })}
      <div className="flex flex-col gap-[42px] mt-[42px]">
        <span className="text-text-secondary font-normal text-base">
          Your body changes, and so does your sleep. If any changes occur, fill out the sleep data
          again, and your formula will be adjusted in your next box.
        </span>
        <div className="flex w-full justify-center">
          <TryNowButton />
        </div>
      </div>
    </>
  );
}
