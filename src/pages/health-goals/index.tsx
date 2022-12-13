import React, { useEffect, useState } from 'react';
import NextLink from 'next/link';
import { Box, Flex, Text, Heading, Link, SimpleGrid, Progress } from '@chakra-ui/react';

import { parseHtmlText } from '../../utils/parseHtmlText';

import { When } from '../../components/shared/When';
import { Page } from '../../components/Page';
import { PageTitle } from '../../components/PageTitle';
import { HealthGoalsList } from '../../components/HealthGoalsList';

import { HealthGoalProps } from '../../@types/HealthGoalProps';
import sanity from '../../lib/sanity';
import groq from 'groq';

const HealthGoals = () => {
  const title = 'Health goals - Sleepie';
  const description =
    'Are you looking to improve some aspect of your health? Choose a health area and find the most effective sleep supplements for your goal.';

  const [healthGoals, setHealthGoals] = useState<HealthGoalProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function loadHealthGoals() {
    setIsLoading(true);
    const healthGoals = await sanity.fetch(groq`
        *[_type == "healthgoal"]{
        _id,
        slug,
        title,
        description,
        children,
        dietarySupplements,
        seo,
        relations
      } | order(publishedAt desc)
    `);
    setHealthGoals(healthGoals);
    setIsLoading(false);
  }

  useEffect(() => {
    loadHealthGoals();
  }, []);

  return (
    <Page title={title} description={description}>
      <PageTitle title="Health goals" breadcrumbs={['Home', 'Health goals']} />
      <div className="w-full flex flex-col items-center mb-8">
        <div className="max-w-[1440px] px-6 lg:px-[60px] w-full">
          <Box as="main">
            <Flex direction="column" as="main" w="100%" mx="auto" gap={20}>
              <HealthGoalsList healthGoals={healthGoals} />
              <When value={isLoading}>
                <Progress size="xs" isIndeterminate colorScheme={'purple'} />
              </When>
              <When value={!isLoading}>
                {healthGoals.map(({ slug, title, description, children }) => (
                  <Box key={slug}>
                    <Text
                      as="span"
                      fontSize="xs"
                      fontWeight="bold"
                      mt={2}
                      textTransform="uppercase"
                      color="gray.400"
                    >
                      Health goal
                    </Text>
                    <Heading
                      size="md"
                      borderBottom={'2px'}
                      mb={4}
                      pb={1}
                      textTransform="uppercase"
                      fontWeight={'bold'}
                      color="gray.600"
                    >
                      <NextLink href={`/health-goals/${slug}`} passHref>
                        <Link>{title}</Link>
                      </NextLink>
                    </Heading>
                    <Flex direction="column" gap={4} textAlign="justify">
                      {parseHtmlText(description)}
                    </Flex>
                    {children && children.length > 0 ? (
                      <SimpleGrid columns={[1, 1, 2, 4]} gap={6} mt={8} textAlign="left">
                        {children.map((child) => (
                          <Box key={child.slug} as="article" p={3} bg="gray.100" borderRadius="xl">
                            <Heading as="h3" size="sm" fontWeight="semibold">
                              <NextLink href={`/health-goals/${slug}/${child.slug}`} passHref>
                                <Link textTransform="uppercase" fontSize="sm" fontWeight="bold">
                                  {child.title}
                                </Link>
                              </NextLink>
                            </Heading>
                          </Box>
                        ))}
                      </SimpleGrid>
                    ) : (
                      <></>
                    )}
                  </Box>
                ))}
              </When>
            </Flex>
          </Box>
        </div>
      </div>
    </Page>
  );
};

export default HealthGoals;
