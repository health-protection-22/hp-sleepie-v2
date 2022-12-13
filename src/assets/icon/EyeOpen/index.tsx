import React from 'react';
import { CustomIconProps } from '../../../utils/types';

export default function EyeOpenIcon({ hoverAnimate, height, width }: CustomIconProps) {
  return (
    <svg
      className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
      xmlns={'http://www.w3.org/2000/svg'}
      height={height ? height : '12'}
      width={width ? width : '20'}
      viewBox={'0 0 20 12'}
      fill={'none'}
    >
      <path
        d="M9.9943 0C5.27784 0 1.12212 3.2691 0.0196351 7.55282C-0.0215888 7.7134 0.00266545 7.88378 0.087062 8.02647C0.171459 8.16917 0.309084 8.27249 0.469663 8.31372C0.630242 8.35494 0.800619 8.33068 0.943315 8.24629C1.08601 8.16189 1.18934 8.02427 1.23056 7.86369C2.18055 4.17249 5.86086 1.24999 9.9943 1.24999C14.1278 1.24999 17.8197 4.17352 18.7694 7.86369C18.8107 8.02427 18.914 8.16189 19.0567 8.24629C19.1994 8.33068 19.3698 8.35494 19.5303 8.31372C19.6909 8.27249 19.8285 8.16917 19.9129 8.02647C19.9973 7.88378 20.0216 7.7134 19.9804 7.55282C18.8776 3.26807 14.7108 0 9.9943 0ZM10.0008 3.3333C7.78414 3.3333 5.97416 5.14328 5.97416 7.35995C5.97416 9.57662 7.78414 11.3874 10.0008 11.3874C12.2175 11.3874 14.0283 9.57662 14.0283 7.35995C14.0283 5.14328 12.2175 3.3333 10.0008 3.3333ZM10.0008 4.58329C11.5419 4.58329 12.7783 5.81882 12.7783 7.35995C12.7783 8.90108 11.5419 10.1374 10.0008 10.1374C8.45968 10.1374 7.22415 8.90108 7.22415 7.35995C7.22415 5.81882 8.45968 4.58329 10.0008 4.58329Z"
        fill="#CFD6DC"
      />
    </svg>
  );
}
