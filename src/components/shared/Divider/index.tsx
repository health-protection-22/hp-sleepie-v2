import React from 'react';

type Props = {
  marginBottomPx?: number;
  className?: string;
  marginTopPx?: number;
};
export function Divider({ marginBottomPx = 20, className, marginTopPx = 20 }: Props) {
  return (
    <div
      style={{
        marginBottom: marginBottomPx.toString() + 'px',
        marginTop: marginTopPx.toString() + 'px',
      }}
      className={` w-full h-[1px] bg-borderColor rounded-xl ${className ? className : ''}`}
    />
  );
}
