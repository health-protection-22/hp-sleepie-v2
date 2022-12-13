import { CircularProgressbar } from 'react-circular-progressbar';
import React from 'react';

type Props = {
  size?: number;
  pathStroke?: number;
  trailStroke?: number;
  color: string;
  rotate?: number;
  percentage: number;
};

export function CircleProgressBar({
  size = 80,
  pathStroke = 8,
  trailStroke = 3,
  color,
  rotate = 0.25,
  percentage,
}: Props) {
  return (
    <div
      className="relative min-w-fit"
      style={{
        width: size,
        height: size,
      }}
    >
      <CircularProgressbar
        value={percentage}
        styles={{
          root: {
            width: size + 1,
            height: size + 1,
            position: 'absolute',
          },
          path: {
            stroke: color,
            strokeLinecap: 'round',
            transform: `rotate(${rotate}turn)`,
            transformOrigin: 'center center',
            strokeWidth: pathStroke,
          },
          trail: {
            stroke: '#D1D5DB',
            strokeLinecap: 'butt',
            transform: 'rotate(0.25turn)',
            transformOrigin: 'center center',
            strokeWidth: trailStroke,
          },
          text: {
            fill: 'rgba(62, 152, 199)',
            fontSize: '24px',
            fontWeight: 'bold',
          },
        }}
      />
      <div
        className={`w-full text-center flex justify-center`}
        style={{
          position: `absolute`,
          top: size / 2 - 12,
          color: color,
        }}
      >
        <span className={`font-normal text-2xl leading-6`}>{percentage}</span>
        <span className="text-sm">%</span>
      </div>
    </div>
  );
}
