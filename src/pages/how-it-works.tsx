import React from 'react';
import NextLink from 'next/link';
import type { GetStaticProps } from 'next';
import Image from 'next/image';
import { Box, Flex, Heading, SimpleGrid, Text, Button, useBreakpointValue } from '@chakra-ui/react';

import HeroHowItWorksImg from '../../public/images/hero-how-it-works.jpg';
import DiagramHowItWorksImg from '../../public/images/HowItWorksPageIllustration.png';
import SecondImageHowItWorks from '../../public/images/SecondImageHowItWorks.png';
import FirstImageHowItWorks from '../../public/images/FirstImageHowItWorks.png';

import { Page } from '../components/Page';
import { PageTitle } from '../components/PageTitle';
import { When } from '../components/shared/When';

const HowItWorks = () => {
  const title = 'How it works - Sleepie';
  const description =
    "Learn about Sleepie's goals and see how our dietary supplement consulting and customization platform works.";
  const breadcrumbs = ['Home', 'How it works'];

  const isWideVersion = useBreakpointValue({
    sm: false,
    md: true,
  });

  return (
    <Page title={title} description={description}>
      <PageTitle title="How it works" breadcrumbs={breadcrumbs} />
      <div className="w-full flex flex-col items-center">
        <div className="max-w-[1440px] px-6 lg:px-[60px] w-full flex flex-col gap-10 items-center">
          <Box as="main">
            <SimpleGrid w="100%" mb={20} mx="auto" columns={[1, 1, 2]} spacing={8}>
              <Box>
                <Text as="span" fontSize="sm" fontWeight={600}>
                  How it works
                </Text>
                <Heading as={'h2'} size="lg" textTransform="uppercase">
                  How your Sleepie works
                </Heading>
                <Flex my={8} direction="column" gap={4} fontSize={'lg'} textAlign="justify">
                  <Text as="p">
                    Sleepie is a HealthProtection® vertical designed to help you improve your sleep
                    naturally, quickly and based on science. We optimize your health from simple
                    steps that customize your supplement according to your needs.{' '}
                    <Text as="strong">
                      No more losing hours researching or answering endless questions. With Sleepie,
                      in a few minutes you can sleep well.
                    </Text>
                  </Text>
                </Flex>
                <NextLink href="/" passHref>
                  <Button as="a" size="lg">
                    Sleep again
                  </Button>
                </NextLink>
              </Box>
              <Box textAlign="center">
                <Image
                  width="336"
                  height="415"
                  src={HeroHowItWorksImg}
                  alt="About your sleep"
                  title="About your sleep"
                  placeholder="blur"
                />
              </Box>
            </SimpleGrid>
          </Box>
          <When value={isWideVersion}>
            <Box textAlign="center">
              <Image
                width="1025.56"
                height="715.37"
                src={DiagramHowItWorksImg}
                alt="About your sleep"
                title="About your sleep"
                placeholder="blur"
              />
            </Box>
          </When>
          <When value={!isWideVersion}>
            <div className="flex flex-col gap-11 items-center">
              <Image
                width="321"
                height="768"
                src={FirstImageHowItWorks}
                alt="Life without sleepie diagram"
                title="Life without sleepie diagram"
                placeholder="blur"
              />
              <Image
                width="353"
                height="673"
                src={SecondImageHowItWorks}
                alt="Life with sleepie diagram"
                title="Life with sleepie diagram"
                placeholder="blur"
              />
            </div>
          </When>
        </div>
      </div>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default HowItWorks;
