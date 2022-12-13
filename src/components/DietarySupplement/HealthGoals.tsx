import React from 'react';
import NextLink from 'next/link';
import { Box, Flex, Heading, Link } from '@chakra-ui/react';

import { parseHtmlText } from '../../utils/parseHtmlText';

import { When } from '../shared/When';

import { DietarySupplementProps } from '../../@types/DietarySupplementProps';

type HealthGoalsProps = {
  dietarySupplement: DietarySupplementProps;
};

export function HealthGoals({ dietarySupplement }: HealthGoalsProps) {
  const { healthGoals } = dietarySupplement;

  return (
    <Flex as="section" direction="column" gap={12}>
      {healthGoals
        .filter(({ parent }) => !parent)
        .map((healthGoal) => {
          const subHealthGoals = healthGoals.filter(({ parent }) => parent === healthGoal.slug);

          return (
            <Box key={healthGoal.slug}>
              <Heading size="md" pb={2} mb={4} borderBottom="1px" borderColor="gray.200">
                {`${dietarySupplement.title} and `}
                <NextLink href={`/health-goals/${healthGoal.slug}`} passHref>
                  <Link textDecor="underline" _hover={{ textDecor: 'none' }} color="primary.600">
                    {healthGoal.title}
                  </Link>
                </NextLink>
              </Heading>
              <Flex direction="column" textAlign="justify" gap={4}>
                {parseHtmlText(healthGoal.description)}
              </Flex>
              <When value={!!subHealthGoals.length}>
                <Flex direction="column" gap={8} mt={8}>
                  {subHealthGoals.map(({ slug, title, description }) => (
                    <Box key={slug} background="gray.100" p={4} borderRadius="xl">
                      <Heading
                        as="h3"
                        size="sm"
                        pb={2}
                        mb={2}
                        borderBottom="1px"
                        borderColor="gray.300"
                      >
                        <NextLink href={`/health-goals/${healthGoal.slug}/${slug}`} passHref>
                          <Link
                            textDecor="underline"
                            _hover={{ textDecor: 'none' }}
                            color="primary.600"
                          >
                            {title}
                          </Link>
                        </NextLink>
                      </Heading>
                      <Flex direction="column" textAlign="justify" gap={4}>
                        {description}
                      </Flex>
                    </Box>
                  ))}
                </Flex>
              </When>
            </Box>
          );
        })}
    </Flex>
  );
}
