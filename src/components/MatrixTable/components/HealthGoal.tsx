import React from 'react';
import NextLink from 'next/link';
import { Text, Link } from '@chakra-ui/react';

type HealthGoalProps = {
  slug: string
  title: string
}

export function HealthGoal({ slug, title }: HealthGoalProps) {
  return (
    <>
      <Text
        display={['inline-block', 'inline-block', 'none']}
        textTransform="uppercase"
        marginRight="1"
      >
        {title}
      </Text>
      <NextLink href={`/health-goals/${slug}`} passHref>
        <Link>{title}</Link>
      </NextLink>
    </>
  );
}
