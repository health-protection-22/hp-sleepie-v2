import React from 'react';
import { ReactNode } from 'react';
import { NextSeo } from 'next-seo';

type Props = {
  title?: string;
  description?: string;
  children: ReactNode | (() => void);
};

export function Page({ title, description, children }: Props) {
  const descriptionText =
    description ??
    'Your problems sleeping can be a thing of the past. Meet Sleepie. We offer an Safe and Optimized Natural Supplements.';
  const titleText = title ?? 'Sleepie - We offer a safe and optimized natural supplements';
  return (
    <>
      <NextSeo title={titleText} description={descriptionText} />
      {children}
    </>
  );
}
