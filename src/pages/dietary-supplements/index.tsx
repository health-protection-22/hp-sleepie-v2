import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { Page } from '../../components/Page';
import { PageTitle } from '../../components/PageTitle';

import { SupplementsList } from '../../components/DietarySupplement/SupplementsList';

const DietarySupplements = () => {
  const title = 'Sleep supplements - Sleepie';
  const description =
    'Check out the list of all sleep supplements gathered in one place, divided by categories! Achieve your health goals with Sleepie.';

  return (
    <Page title={title} description={description}>
      <PageTitle title="Sleep supplements" breadcrumbs={['Home', 'Sleep supplements']} />
      <div className="w-full flex flex-col items-center mb-8">
        <div className="max-w-[1440px] px-6 lg:px-[60px] w-full">
          <Box as="main">
            <Flex direction="column" as="main" w="100%" mx="auto" gap={20}>
              <SupplementsList />
            </Flex>
          </Box>
        </div>
      </div>
    </Page>
  );
};

export default DietarySupplements;
