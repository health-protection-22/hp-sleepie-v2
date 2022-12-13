import React from 'react';

type Props = {
  stepNumber: number;
  image: JSX.Element;
  color: string;
  title: string;
  text: string;
};

export function StepsContent({ color, image, stepNumber, text, title }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-start gap-7">
        {image}
        <div className="flex flex-col gap-4">
          <div>
            <span
              className="text-base lg:text-base font-normal leading-4 text-blueScale-800"
              style={{
                color: color,
              }}
            >
              Step {stepNumber}
            </span>
            <h3 className="text-xl leading-6 lg:text-2xl lg:leading-6 text-text-primary font-bold max-w-[200px] ">
              {title}
            </h3>
          </div>
        </div>
      </div>
      <p className="text-base font-normal leading-5 text-textSecondary text-justify">{text}</p>
    </div>
  );
}
