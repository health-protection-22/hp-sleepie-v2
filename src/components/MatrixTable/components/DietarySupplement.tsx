import React from 'react';
import NextLink from 'next/link';
import { Text, Link } from '@chakra-ui/react';

type DietarySupplementProps = {
  slug: string;
  title: string;
  category:
    | {
        slug: string;
        name: string;
      }
    | undefined;
};

export function DietarySupplement({ slug, category, title }: DietarySupplementProps) {
  return (
    <>
      <Text
        display={['inline-block', 'inline-block', 'none']}
        textTransform="uppercase"
        marginRight="1"
      >
        {title}
      </Text>
      <NextLink href={`/dietary-supplements/${category?.slug}/${slug}`} passHref>
        <Link>{title}</Link>
      </NextLink>
    </>
  );
}
