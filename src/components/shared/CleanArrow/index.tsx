import React from 'react';
import { When } from '../When';

type Props = {
  direction?: 'left' | 'right' | 'top' | 'bottom';
  rotate?: boolean;
  color?: string;
};

export function CleanArrow({ direction = 'bottom', rotate, color = '#bd4560' }: Props) {
  return (
    <>
      <When value={direction === 'bottom'}>
        <span
          className={`border-r-4 border-r-transparent border-l-4 border-l-transparent border-t-[6px]  transform transition-all ease-linear duration-200 rounded-t-full ${
            rotate ? 'rotate-180' : 'rotate-0'
          }`}
          style={{ borderTopColor: color }}
        />
      </When>
      <When value={direction === 'top'}>
        <span
          className={`border-r-4 border-r-transparent border-l-4 border-l-transparent border-b-[6px] transform transition-all ease-linear duration-200 rounded-t-full ${
            rotate ? 'rotate-180' : 'rotate-0'
          }`}
          style={{ borderBottomColor: color }}
        />
      </When>
      <When value={direction === 'left'}>
        <span
          className={`border-r-[6px] border-t-4 border-t-transparent border-b-4 border-b-transparent transform transition-all ease-linear duration-200 rounded-t-full ${
            rotate ? 'rotate-180' : 'rotate-0'
          }`}
          style={{ borderRightColor: color }}
        />
      </When>
      <When value={direction === 'right'}>
        <span
          className={`border-l-[6px] border-t-4 border-t-transparent border-b-4 border-b-transparent transform transition-all ease-linear duration-200 rounded-t-full ${
            rotate ? 'rotate-180' : 'rotate-0'
          }`}
          style={{ borderLeftColor: color }}
        />
      </When>
    </>
  );
}
