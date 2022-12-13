import { CustomIconProps } from '../../../utils/types';
import React from 'react';

export default function IndicateArrow({ hoverAnimate, height, width }: CustomIconProps) {
  return (
    <svg
      width={width ? width : '18'}
      height={height ? height : '11'}
      viewBox="0 0 18 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
    >
      <path d="M1 1L9 9L17 1" stroke="#52B4E6" strokeWidth="2" />
    </svg>
  );
}
