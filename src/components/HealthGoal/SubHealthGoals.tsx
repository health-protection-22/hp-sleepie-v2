import React from 'react';
import NextLink from 'next/link';
import { Box, Flex, Heading, Link, SimpleGrid } from '@chakra-ui/react';

import { parseHtmlText } from '../../utils/parseHtmlText';

import { HealthGoalProps } from '../../@types/HealthGoalProps';

type SubHealthGoalsProps = {
  healthGoal: HealthGoalProps;
};

export function SubHealthGoals({ healthGoal }: SubHealthGoalsProps) {
  const { slug, title, children } = healthGoal;

  return (
    <>
      {children && children.length > 0 ? (
        <Box as="section">
          <Heading size="md" pb={2} mb={4} borderBottom="1px" borderColor="gray.200">
            {`${title} and their sub-health goals`}
          </Heading>
          <SimpleGrid gap={6}>
            {children.map((child) => (
              <Box key={child.slug} as="article" p={3} bg="gray.100" borderRadius="xl">
                <Heading
                  as="h3"
                  size="sm"
                  fontWeight="semibold"
                  pb={2}
                  mb={2}
                  borderBottom="1px"
                  borderColor="gray.300"
                  color="gray.600"
                >
                  {`${title} and `}
                  <NextLink href={`/health-goals/${slug}/${child.slug}`} passHref>
                    <Link textDecor="underline" _hover={{ textDecor: 'none' }}>
                      {child.title}
                    </Link>
                  </NextLink>
                </Heading>
                <Flex direction="column" gap={4} textAlign="justify">
                  {parseHtmlText(child.description)}
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
}
