import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function ContentContainer({ children }: Props) {
  return (
    <article className="rounded-3xl bg-grayScale-250 px-4 lg:px-7 h-auto lg:h-[770px] w-full flex flex-col justify-center items-center py-8 lg:py-[120px] gap-4 lg:gap-8">
      {children}
    </article>
  );
}
