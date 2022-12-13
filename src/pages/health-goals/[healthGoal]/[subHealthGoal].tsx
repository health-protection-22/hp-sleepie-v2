import React from 'react';
import type { GetStaticProps, GetStaticPaths } from 'next';
import { Box, Flex } from '@chakra-ui/react';

import { wordpressServices } from '../../../services/wordpress';

import { Page } from '../../../components/Page';
import { PageTitle } from '../../../components/PageTitle';
import { HealthGoalsList } from '../../../components/HealthGoalsList';
import { Intro } from '../../../components/HealthGoal/Intro';
import { Relations } from '../../../components/HealthGoal/Relations';
import { DietarySupplements } from '../../../components/HealthGoal/DietarySupplements';
import { SubHealthGoals } from '../../../components/HealthGoal/SubHealthGoals';

import { HealthGoalSimpleProps } from '../../../@types/HealthGoalSimpleProps';
import { HealthGoalProps } from '../../../@types/HealthGoalProps';

interface PageProps {
  healthGoal: HealthGoalProps;
  healthGoalsList: HealthGoalSimpleProps[];
}

const HealthGoal = ({ healthGoal, healthGoalsList }: PageProps) => {
  const { title, seo } = healthGoal;

  return (
    <Page title={seo.title} description={seo.metaDesc}>
      <PageTitle title={title} breadcrumbs={seo.breadcrumbs} />
      <div className="w-full flex flex-col items-center border-b border-gray-200 mb-8">
        <div className="max-w-[1440px] px-6 lg:px-[60px] w-full">
          <Box as="main">
            <Flex direction="column" gap={20} w="100%" mx="auto">
              <HealthGoalsList healthGoals={healthGoalsList} />
              <Intro healthGoal={healthGoal} />
              <Relations healthGoal={healthGoal} />
              <DietarySupplements healthGoal={healthGoal} />
              <SubHealthGoals healthGoal={healthGoal} />
            </Flex>
          </Box>
        </div>
      </div>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const healthGoalsList = await wordpressServices().getHealthGoalsList();

  const healthGoal = await wordpressServices().getHealthGoal(params?.subHealthGoal);

  return {
    props: {
      healthGoalsList,
      healthGoal,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], // indicates that no page needs be created at build time
    fallback: 'blocking', // indicates the type of fallback
  };
};

export default HealthGoal;
