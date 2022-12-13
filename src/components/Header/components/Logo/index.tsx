import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { Link } from '@chakra-ui/react';
import LogoImg from '../../../../../public/images/logo-sleepie.png';

export function Logo() {
  const title = 'Sleepie - We offer a safe and optimized natural supplements';

  return (
    <NextLink href="/" passHref>
      <Link lineHeight={1}>
        <Image src={LogoImg} alt={title} title={title} placeholder="blur" width="152" height="40" />
      </Link>
    </NextLink>
  );
}
