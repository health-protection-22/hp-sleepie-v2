import React from 'react';
import type { GetStaticProps, GetStaticPaths } from 'next';
import { Box, Flex } from '@chakra-ui/react';

import { parseHtmlText } from '../../../utils/parseHtmlText';

import { wordpressServices } from '../../../services/wordpress';

import { Page } from '../../../components/Page';
import { PageTitle } from '../../../components/PageTitle';
import { DietarySupplementsList } from '../../../components/DietarySupplementsList';

import { DietarySupplementCategoryProps } from '../../../@types/DietarySupplementCategoryProps';

interface PageProps {
  category: DietarySupplementCategoryProps;
}

const Category = ({ category }: PageProps) => {
  const { name, description, dietarySupplements, seo } = category;

  return (
    <Page title={seo.title} description={seo.metaDesc}>
      <PageTitle title={name} breadcrumbs={seo.breadcrumbs} />
      <div className="w-full flex flex-col items-center border-b border-gray-200 mb-8">
        <div className="max-w-[1440px] px-6 lg:px-[60px] w-full">
          <Box as="main">
            <Flex direction="column" as="main" w="100%" mx="auto" gap={4}>
              <Flex direction="column" gap={4} textAlign="justify">
                {parseHtmlText(description)}
              </Flex>
              <DietarySupplementsList dietarySupplements={dietarySupplements} />
            </Flex>
          </Box>
        </div>
      </div>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = await wordpressServices().getDietarySupplementCategory(params?.category);

  return {
    props: {
      category,
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

export default Category;
