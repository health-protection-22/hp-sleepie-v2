import React from 'react';
import { useRouter } from 'next/router';
import type { GetStaticProps } from 'next';
import NextLink from 'next/link';
import Image from 'next/image';
import {
  SimpleGrid,
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useBreakpointValue,
} from '@chakra-ui/react';

import HeroAboutUsImg from '../../public/images/hero-about-us.jpg';

import { When } from '../components/shared/When';
import { Page } from '../components/Page';
import { PageTitle } from '../components/PageTitle';
import { TheScience } from '../components/AboutUs/TheScience';
import { TheCompany } from '../components/AboutUs/TheCompany';
import { OurTeam } from '../components/AboutUs/OurTeam';
import { Nutratherapy } from '../components/AboutUs/Nutratherapy';
import { NextSeo } from 'next-seo';

const AboutUs = () => {
  const title = 'About us - Sleepie';
  const description =
    'Find out everything about Sleepie, our history, scientific background, location, team and about our app!';
  const breadcrumbs = ['Home', 'About us'];

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const router = useRouter();

  const pagePath = router.asPath;

  const pageAnchor = pagePath.substring(pagePath.indexOf('#') + 1, pagePath.length);

  const anchorIndex = (pageAnchor: string) => {
    switch (pageAnchor) {
      case 'the-company':
        return 0;
      case 'nutratherapy':
        return 1;
      case 'the-science':
        return 2;
      case 'our-team':
        return 3;
      case 'join-our-team':
        return 4;

      default:
        return 0;
    }
  };

  const contents = [
    { label: 'The company', element: TheCompany },
    { label: 'Nutratherapy', element: Nutratherapy },
    { label: 'The science', element: TheScience },
    { label: 'Our team', element: OurTeam },
    // Comentado até que a API deste componente esteja pronta
    // { label: 'Join our team', element: JoinOurTeam },
  ];

  return (
    <div className="w-full h-fit">
      <NextSeo
        title="Sleepie - About us"
        description="We are a multinational company made up of a team of specialists dedicated to developing 100% natural personalized solutions. Learn more!"
      />
      <Page title={title} description={description}>
        <PageTitle title="About us" breadcrumbs={breadcrumbs} />
        <div className="w-full flex flex-col items-center border-b border-gray-200 mb-8">
          <div className="max-w-[1440px] px-6 lg:px-[60px] w-full">
            <Box as="main">
              <SimpleGrid w="100%" mb={20} mx="auto" columns={[1, 1, 2]} spacing={8}>
                <Box>
                  <Text as="span" fontSize="sm" fontWeight={600}>
                    About us
                  </Text>
                  <Heading size="lg" textTransform="uppercase">
                    About your sleep
                  </Heading>
                  <Flex my={8} direction="column" gap={4} fontSize={'lg'} textAlign="justify">
                    <Text>
                      Everyone has a different path to optimal sleep health and our goal is to find
                      yours through{' '}
                      <Text as="strong">science, technology, and personalization</Text>. Your health
                      is at the core of what we do, which is why our team strives to deliver the
                      best supplements available.{' '}
                      <Text as="strong">Experience it and Sleepie well</Text>.
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
                    width="300"
                    height="343"
                    src={HeroAboutUsImg}
                    alt="About your sleep"
                    title="About your sleep"
                    placeholder="blur"
                  />
                </Box>
              </SimpleGrid>
              <When value={isWideVersion}>
                <Tabs
                  variant="enclosed"
                  colorScheme="primary"
                  isFitted
                  w="100%"
                  mx="auto"
                  defaultIndex={anchorIndex(pageAnchor)}
                >
                  <TabList>
                    {contents.map(({ label }, index) => (
                      <Tab key={index} fontWeight={'semibold'}>
                        <Heading fontSize="md">{label}</Heading>
                      </Tab>
                    ))}
                  </TabList>
                  <TabPanels>
                    {contents.map(({ element: Element }, index) => (
                      <TabPanel key={index} pt={8}>
                        <Element />
                      </TabPanel>
                    ))}
                  </TabPanels>
                </Tabs>
              </When>
              <When value={!isWideVersion}>
                <Accordion allowToggle defaultIndex={[0]} border="none">
                  {contents.map(({ label, element: Element }, index) => (
                    <AccordionItem key={index} border="none" my={4}>
                      <Heading bgColor="gray.50" borderRadius="3xl" color="gray.600">
                        <AccordionButton>
                          <Box flex={1} textAlign="left" fontWeight={'semibold'}>
                            <Heading fontSize="md">{label}</Heading>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </Heading>
                      <AccordionPanel>
                        <Element />
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </When>
            </Box>
          </div>
        </div>
      </Page>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default AboutUs;
