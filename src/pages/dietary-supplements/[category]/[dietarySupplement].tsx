import React from 'react';
import type { GetStaticProps, GetStaticPaths } from 'next';
import { Box, Flex } from '@chakra-ui/react';

import { wordpressServices } from '../../../services/wordpress';

import { Page } from '../../../components/Page';
import { PageTitle } from '../../../components/PageTitle';
import { Intro } from '../../../components/DietarySupplement/Intro';
import { Benefits } from '../../../components/DietarySupplement/Benefits';
import { Relations } from '../../../components/DietarySupplement/Relations';
import { HealthGoals } from '../../../components/DietarySupplement/HealthGoals';
import { Videos } from '../../../components/DietarySupplement/Videos';
import { DietarySupplements } from '../../../components/DietarySupplement/DietarySupplements';

import { DietarySupplementProps } from '../../../@types/DietarySupplementProps';

interface PageProps {
  dietarySupplement: DietarySupplementProps;
}

const DietarySupplement = ({ dietarySupplement }: PageProps) => {
  const { title, seo } = dietarySupplement;

  return (
    <Page title={seo.title} description={seo.metaDesc}>
      <PageTitle title={title} breadcrumbs={seo.breadcrumbs} />
      <div className="w-full flex flex-col items-center border-b border-gray-200 mb-8">
        <div className="max-w-[1440px] px-6 lg:px-[60px] w-full">
          <Box as="main">
            <Flex direction="column" gap={20} w="100%" mx="auto">
              <Intro dietarySupplement={dietarySupplement} />
              <Benefits dietarySupplement={dietarySupplement} />
              <Relations dietarySupplement={dietarySupplement} />
              <HealthGoals dietarySupplement={dietarySupplement} />
              <Videos dietarySupplement={dietarySupplement} />
              <DietarySupplements dietarySupplement={dietarySupplement} />
            </Flex>
          </Box>
        </div>
      </div>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const dietarySupplement = await wordpressServices().getDietarySupplement(
    params?.dietarySupplement,
  );

  return {
    props: {
      dietarySupplement,
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

export default DietarySupplement;
