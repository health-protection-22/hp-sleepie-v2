import React, { useState, useCallback } from 'react';
import type { GetStaticProps } from 'next';
import { Box, Flex, Button } from '@chakra-ui/react';

import { wordpressServices } from '../../services/wordpress';

import { Page } from '../../components/Page';
import { PageTitle } from '../../components/PageTitle';
import { StudiesList } from '../../components/StudiesList';

import { When } from '../../components/shared/When';

import { StudyProps } from '../../@types/StudyProps';
import { PageInfoProps } from '../../@types/PageInfoProps';

interface PageProps {
  studies: StudyProps[];
  pageInfo: PageInfoProps;
}

const Studies = ({ studies, pageInfo }: PageProps) => {
  const [activeStudies, setActiveStudies] = useState<StudyProps[]>(studies);
  const [activePageInfo, setActivePageInfo] = useState<PageInfoProps>(pageInfo);
  const [offset, setOffset] = useState(0);

  const POSTS_PER_PAGE = 10;

  const title = 'Studies - Sleepie';
  const description =
    'Are you looking to improve some aspect of your health? Choose a health area and find the most effective sleep supplements for your goal.';

  const handleLoadMore = useCallback(
    async (updatedOffset: number) => {
      const { studies: updatedStudies, pageInfo: updatedPageInfo } =
        await wordpressServices().getStudies({
          offset: updatedOffset,
        });

      setActiveStudies(updatedStudies);
      setActivePageInfo(updatedPageInfo);
      setOffset(updatedOffset);
    },
    [offset],
  );

  return (
    <Page title={title} description={description}>
      <PageTitle title="Studies" breadcrumbs={['Home', 'Studies']} />
      <div className="w-full flex flex-col items-center mb-8">
        <div className="max-w-[1440px] px-6 lg:px-[60px] w-full">
          <Flex as="main" w="100%" direction="column" gap={8} mx="auto">
            <StudiesList studies={activeStudies} />
            <Box>
              <When value={activePageInfo.offsetPagination.hasPrevious}>
                <Button
                  onClick={() => {
                    handleLoadMore(offset - POSTS_PER_PAGE);
                  }}
                >
                  Previous
                </Button>
              </When>
              <When value={activePageInfo.offsetPagination.hasMore}>
                <Button
                  onClick={() => {
                    handleLoadMore(offset + POSTS_PER_PAGE);
                  }}
                >
                  Next
                </Button>
              </When>
            </Box>
          </Flex>
        </div>
      </div>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { studies, pageInfo } = await wordpressServices().getStudies({});

  return {
    props: {
      studies,
      pageInfo,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default Studies;
