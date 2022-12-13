import React from 'react';
import { CustomIconProps } from '../../utils/types';

export function FDAStamp({ height = '44', width = '104' }: CustomIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 104 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1652_22878)">
        <path
          d="M5.33826 42.9862H0.638184V1.33247H41.9593C60.0844 1.33247 62.9447 17.615 62.9447 17.615L73.1157 1.33247H83.7737L103.256 32.9142L97.1529 42.9849H71.464V37.9606H100.197L78.4331 1.33203C78.4331 1.33203 64.0895 26.2904 61.0103 31.1524C57.9308 36.0147 52.1466 42.9838 42.2389 42.9838H26.894V18.1864H31.7563V37.9593H42.9393C47.8849 37.9593 58.4984 33.7455 58.4984 21.8332C58.4984 9.92089 47.1532 6.19323 43.4255 6.19323H5.33782V42.9828L5.33826 42.9862ZM6.95898 42.9862V25.3203H25.1111V30.1826H11.8211V42.9865H6.95877L6.95898 42.9862ZM25.1111 23.2133V18.189H11.8211V12.8599H42.4025C46.9867 12.8599 51.854 16.5682 51.854 21.9976C51.854 27.427 46.9343 31.1546 43.4263 31.1546H38.659V18.1888H33.6347V36.0169H43.4263C49.6278 36.0169 56.7972 30.6343 56.7972 22.1596C56.7972 13.766 50.2769 7.97824 42.4797 7.97824H6.96007V23.2131H25.1122L25.1111 23.2133ZM56.147 42.9862L78.433 6.19671L96.7473 36.0171H71.4649V31.1548H87.8342L78.4341 15.8389L62.9561 42.9869H56.149L56.147 42.9862Z"
          fill="#333333"
        />
      </g>
      <defs>
        <clipPath id="clip0_1652_22878">
          <rect width="103.704" height="42.741" fill="white" transform="translate(0 0.756104)" />
        </clipPath>
      </defs>
    </svg>
  );
}