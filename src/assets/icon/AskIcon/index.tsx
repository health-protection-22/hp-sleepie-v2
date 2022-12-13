import React from 'react';

type Props = {
  style?: any;
  width?: string;
  height?: string;
};

export function AskIcon({ style, height, width }: Props) {
  return (
    <svg
      style={style}
      width={width ? width : '16'}
      height={height ? height : '16'}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 8C0 3.58172 3.58172 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8ZM8.8 11.2001V12.8001H7.2V11.2001H8.8ZM8 14.4001C4.472 14.4001 1.6 11.5281 1.6 8.00015C1.6 4.47215 4.472 1.60015 8 1.60015C11.528 1.60015 14.4 4.47215 14.4 8.00015C14.4 11.5281 11.528 14.4001 8 14.4001ZM4.8 6.4001C4.8 4.63279 6.23269 3.2001 8 3.2001C9.76731 3.2001 11.2 4.63279 11.2 6.4001C11.2 7.42643 10.568 7.97875 9.95261 8.51653C9.36881 9.02671 8.8 9.5238 8.8 10.4001H7.2C7.2 8.94308 7.95369 8.36537 8.61635 7.85744C9.13619 7.45898 9.6 7.10347 9.6 6.4001C9.6 5.51644 8.88365 4.8001 8 4.8001C7.11634 4.8001 6.4 5.51644 6.4 6.4001H4.8Z"
        fill="#565656"
      />
    </svg>
  );
}