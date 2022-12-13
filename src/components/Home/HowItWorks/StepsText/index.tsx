import React from 'react';

type Props = {
  stepNumber: number;
  title: string;
  text: string;
  stepColor?: string;
};

export function StepsText({ stepNumber, text, title, stepColor }: Props) {
  return (
    <div className="flex flex-col items-start gap-4 max-w-[370px]">
      <div>
        <span
          className="text-sm lg:text-base font-normal leading-4 text-blueScale-800"
          style={{
            color: stepColor,
          }}
        >
          Step {stepNumber}
        </span>
        <h3 className="text-lg leading-4 lg:text-2xl lg:leading-6 text-text-primary font-bold">
          {title}
        </h3>
      </div>
      <p className="text-sm lg:text-base font-normal leading-3 text-textSecondary">{text}</p>
    </div>
  );
}
