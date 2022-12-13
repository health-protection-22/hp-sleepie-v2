import React from 'react';
import type { GetStaticProps, GetStaticPaths } from 'next';
import { Box, Flex } from '@chakra-ui/react';

import { Page } from '../../../components/Page';
import { PageTitle } from '../../../components/PageTitle';

const Study = () => {
  return (
    <Page title={''} description={''}>
      <PageTitle title={''} breadcrumbs={[]} />
      <Box as="main" px={4}>
        <Flex direction="column" gap={20} w="100%" maxWidth={1200} mx="auto"></Flex>
      </Box>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], // indicates that no page needs be created at build time
    fallback: 'blocking', // indicates the type of fallback
  };
};

export default Study;
