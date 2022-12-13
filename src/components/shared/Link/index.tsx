import React, { AnchorHTMLAttributes, ReactNode } from 'react';
import NextLink from 'next/link';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  url: string;
};

export function Link({ children, url, ...rest }: Omit<Props, 'href'>) {
  return (
    <NextLink href={url} passHref>
      <a className={`cursor-pointer ${rest.className ? rest.className : ''}`} {...rest}>
        {children}
      </a>
    </NextLink>
  );
}
