import React from 'react';
import { CircleProgressBar } from '../../shared/CircleProgressBar';

type Props = {
  percentage: number;
  graphRotate?: number;
  color: string;
  label: string;
};

export function CircularGraph({ color, label, percentage, graphRotate }: Props) {
  return (
    <div className="flex-1 flex flex-col gap-2 items-center">
      <CircleProgressBar color={color} percentage={percentage} rotate={graphRotate} />
      <div className="flex gap-2 items-center">
        <div
          className="w-[7px] h-[7px] bg-white-full border-2 rounded-full"
          style={{
            borderColor: color,
          }}
        />
        <span className="font-light text-base text-grayScale-300">Awake</span>
      </div>
      <span className="text-grayScale-700 font-light text-xl">{label}</span>
    </div>
  );
}
