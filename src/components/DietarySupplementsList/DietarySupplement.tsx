import React from 'react';
import NextLink from 'next/link';
import { Box, Heading, Link, Text } from '@chakra-ui/react';
import { darken } from 'polished';

interface ComponentProps {
  slug: string;
  title: string;
  category: {
    slug: string;
    name: string;
    color: string;
  };
}

export function DietarySupplement({ slug, title, category }: ComponentProps) {
  return (
    <Box as="article" p={3} bg={category.color} borderRadius="xl">
      <Heading as="h3" size="sm" fontWeight="semibold">
        <NextLink href={`/dietary-supplements/${category.slug}/${slug}`} passHref>
          <Link color={darken(0.5, category.color || '')}>{title}</Link>
        </NextLink>
      </Heading>
      <Text
        fontSize="xs"
        fontWeight="bold"
        mt={2}
        textTransform="uppercase"
        color={darken(0.3, category.color || '')}
      >
        {category?.name}
      </Text>
    </Box>
  );
}
