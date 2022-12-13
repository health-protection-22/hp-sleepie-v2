import Image from 'next/image';
import { Box, Flex, Heading, Text, Button, List, ListItem, ListIcon } from '@chakra-ui/react';
import { FiGift, FiTrendingUp } from 'react-icons/fi';
import { GiMaterialsScience } from 'react-icons/gi';

import React from 'react';
import GDPRReadyImg from '../../../public/images/gdpr-ready.png';
import EFSAImg from '../../../public/images/efsa.png';
import AfepadiImg from '../../../public/images/afepadi.png';

import DownloadAppStoreImg from '../../../public/images/download-app-store.png';
import DownloadGooglePlayImg from '../../../public/images/download-google-play.png';

export function Hero() {
  return (
    <Box
      minHeight="calc(100vh - 74px)"
      bg="url(/images/bg-hero-technical.jpg) no-repeat"
      bgPosition="top center"
      bgSize={['contain', 'contain', 'contain', 'initial']}
      mb={8}
      display={`flex`}
      width={`100%`}
      justifyContent={`center`}
    >
      <Box w="100%" maxWidth={1440} px={['24px', '24px', '24px', '24px', '60px']}>
        <Flex pt={[32, 48, 64, 32]} pb={[6]} flexDir={['column', 'column', 'column', 'row']}>
          <Box flex={2}>
            <Heading as="h1" fontSize={['2xl', '3xl']} mb={4}>
              Get the night of your dreams back
            </Heading>
            <Heading fontSize="md" lineHeight="tall" color="gray.600" mb={4}>
              Find out your unique personalized natural pills combination.
            </Heading>
            <Text fontSize={['sm', 'md', 'md', 'lg']} mb={8}>
              In 3 minutes find the best supplements for your individual situation. All
              science-based.
            </Text>
            <Button as="a" href="/#nutratherapy">
              Try now
            </Button>
          </Box>
          <Box flex={3}></Box>
        </Flex>
        <Box>
          <List
            display="flex"
            flexDir={['column', 'column', 'column', 'row']}
            alignItems={['flex-start', 'flex-start', 'flex-start', 'center']}
            gap={4}
            fontSize={['sm', 'md', 'md', 'lg']}
            py={4}
          >
            <ListItem display="flex" alignItems="center">
              <ListIcon as={FiGift} color="brand.secondary" fontSize={24} />
              100% free recomendation
            </ListItem>
            <ListItem>
              <ListIcon as={GiMaterialsScience} color="brand.secondary" fontSize={24} />
              Backed by more than 10.000 scientific studies
            </ListItem>
            <ListItem>
              <ListIcon as={FiTrendingUp} color="brand.secondary" fontSize={24} />
              Continuous improvement
            </ListItem>
          </List>
          <Flex
            flexDir={['column', 'column', 'column', 'row']}
            justifyContent="space-between"
            alignItems="center"
            my={4}
          >
            <Flex
              alignItems="center"
              gap={8}
              borderWidth={1}
              borderColor="gray.300"
              borderRadius="xl"
              p={3}
            >
              <Image
                src={GDPRReadyImg}
                alt="GDPR Ready"
                width={124}
                height={59}
                placeholder="blur"
              />
              <Image src={EFSAImg} alt="EFSA" width={124} height={59} placeholder="blur" />
              <Image src={AfepadiImg} alt="Afepadi" width={124} height={59} placeholder="blur" />
            </Flex>
            <Box textAlign="center">
              <Text fontSize="xl" fontWeight="semibold">
                Sleeping Track App
              </Text>
              <Text>available soon</Text>
              <Flex gap={8} mt={4}>
                <Image
                  src={DownloadAppStoreImg}
                  alt="Download on the App Store"
                  width={134}
                  height={38}
                  placeholder="blur"
                />
                <Image
                  src={DownloadGooglePlayImg}
                  alt="Get it on Google Play"
                  width={134}
                  height={38}
                  placeholder="blur"
                />
              </Flex>
            </Box>
          </Flex>
          <Box></Box>
        </Box>
      </Box>
    </Box>
  );
}
