import React from 'react';
import { CustomIconProps } from '../../../utils/types';

export default function TelephoneIcon({ hoverAnimate, height, width }: CustomIconProps) {
  return (
    <>
      <svg
        className={hoverAnimate ? `hover:opacity-70 duration-200 cursor-pointer` : ``}
        xmlns="http://www.w3.org/2000/svg"
        height={height ? height : '17'}
        data-testid={'lockIconTestId'}
        width={width ? width : '16'}
        viewBox={'0 0 16 17'}
        fill={'none'}
      >
        <path
          d="M11.2574 2.5057C11.9638 2.46819 12.61 2.61075 13.1435 3.08344C13.8874 3.73621 14.1429 4.55404 13.925 5.51443C13.8949 5.65699 13.8198 5.73202 13.677 5.76203C12.4822 6.02464 11.295 6.29475 10.1078 6.57237C9.9575 6.60238 9.86733 6.56486 9.79219 6.43731C9.6945 6.27224 9.58931 6.11468 9.49162 5.95711C9.36388 5.74703 9.29626 5.72452 9.07083 5.81456C7.53044 6.45232 6.36575 7.50274 5.58428 8.98085C5.47909 9.17593 5.39643 9.37851 5.30626 9.58109C5.21609 9.79868 5.23863 9.86621 5.44152 9.99376C5.60683 10.0988 5.77214 10.2038 5.93745 10.3014C6.05016 10.3689 6.08773 10.459 6.05767 10.594C5.78716 11.787 5.51666 12.98 5.24615 14.173C5.21609 14.3155 5.13344 14.3831 4.99818 14.4206C3.52542 14.8182 2.00756 13.6703 2.00005 12.1471C1.98502 7.46523 5.35135 3.45109 9.97253 2.65576C10.3933 2.58073 10.8291 2.55072 11.2574 2.5057Z"
          stroke="#344054"
          strokeMiterlimit="10"
        />
      </svg>
    </>
  );
}