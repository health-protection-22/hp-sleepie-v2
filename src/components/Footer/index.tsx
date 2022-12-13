import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import {
  Box,
  Flex,
  Text,
  SimpleGrid,
  Stack,
  StackDivider,
  List,
  ListIcon,
  ListItem,
  Link,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import LogoImg from '../../../public/images/logo-sleepie.png';
import GDPRImg from '../../../public/images/icon-gdpr.png';
import SSLImg from '../../../public/images/icon-ssl.png';
import GoogleSafeBrowsingImg from '../../../public/images/icon-google-safe-browsing.png';

import menuCompany from '../../menu-company.json';
import menuKnowledge from '../../menu-knowledge.json';

import { ContactInfo } from './ContactInfo';
import { SocialNetworks } from './SocialNetworks';

export function Footer() {
  return (
    <Box
      width={'100%'}
      mx="auto"
      as="footer"
      borderTop="1px"
      borderColor="transparent"
      bgColor="gray.50"
      mt={8}
    >
      <div className="max-w-[1440px] px-6 lg:px-[60px] w-full mx-auto">
        <Box>
          <SimpleGrid columns={[1, 1, 2, 2, 4]} w="100%" py={8} gap={8}>
            <Box>
              <Image
                src={LogoImg}
                alt="Sleepie - We offer a safe and optimized natural supplements"
                title="Sleepie - We offer a safe and optimized natural supplements"
                placeholder="blur"
                width="152"
                height="40"
              />
              <ContactInfo />
              <SocialNetworks />
            </Box>
            <Box>
              <Text
                fontWeight="semibold"
                borderBottom="1px solid"
                borderColor="gray.200"
                textTransform="uppercase"
                fontSize="sm"
                mb={4}
              >
                Our company
              </Text>
              <List spacing={2} fontSize="sm">
                {menuCompany.map(({ link, label }, index) => (
                  <ListItem key={index}>
                    <ListIcon as={ChevronRightIcon} />
                    <NextLink href={link} passHref>
                      <Link>{label}</Link>
                    </NextLink>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box>
              <Text
                fontWeight="semibold"
                borderBottom="1px solid"
                borderColor="gray.200"
                textTransform="uppercase"
                fontSize="sm"
                mb={4}
              >
                Knowledge base
              </Text>
              <List spacing={2} fontSize="sm">
                {menuKnowledge.map(({ link, label }, index) => (
                  <ListItem key={index}>
                    <ListIcon as={ChevronRightIcon} />
                    <NextLink href={link} passHref>
                      <Link>{label}</Link>
                    </NextLink>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box>
              <Text
                fontWeight="semibold"
                borderBottom="1px solid"
                borderColor="gray.200"
                textTransform="uppercase"
                fontSize="sm"
                mb={4}
              >
                Regulatory entities
              </Text>
              <Flex my={8} gap={8}>
                <Image
                  src={GDPRImg}
                  alt="General Data Protection Regulation"
                  title="General Data Protection Regulation"
                  width="80"
                  height="80"
                  placeholder="blur"
                />
                <Image
                  src={SSLImg}
                  alt="100% Secure Transactions"
                  title="100% Secure Transactions"
                  width="80"
                  height="80"
                  placeholder="blur"
                />
              </Flex>
              <Link
                href="https://transparencyreport.google.com/safe-browsing/search?url=https:%2F%2Fwww.sleepie.life%2F"
                target="_blank"
              >
                <Image
                  src={GoogleSafeBrowsingImg}
                  alt="Google Safe Browsing"
                  title="Google Safe Browsing"
                  width="200"
                  height="58"
                  placeholder="blur"
                />
              </Link>
            </Box>
          </SimpleGrid>
        </Box>
      </div>
      <Box bgColor="gray.200" py={4} px={4}>
        <div className="max-w-[1440px] px-6 lg:px-[60px] w-full mx-auto">
          <Flex
            w="100%"
            fontSize="sm"
            fontWeight="medium"
            direction={['column', 'column', 'row']}
            justify="space-between"
            alignItems="center"
            gap={4}
          >
            <Stack divider={<StackDivider borderColor="gray.600" />} direction="row">
              <Text as="span" lineHeight="1">
                © 2022 Sleepie
              </Text>
              <Text as="span" lineHeight="1">
                All rights reserved
              </Text>
            </Stack>
            <Stack divider={<StackDivider borderColor="gray.600" />} direction="row">
              <NextLink href="/legal-notice" passHref>
                <Link lineHeight="1">Legal Notice</Link>
              </NextLink>
              <NextLink href="/cookies-policy" passHref>
                <Link lineHeight="1">Cookies Policy</Link>
              </NextLink>
              <NextLink href="/privacy-policy" passHref>
                <Link lineHeight="1">Privacy Policy</Link>
              </NextLink>
            </Stack>
          </Flex>
        </div>
      </Box>
    </Box>
  );
}
