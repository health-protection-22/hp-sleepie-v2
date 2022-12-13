import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Box, Flex, Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { decode } from 'html-entities';
import slugify from 'react-slugify';

type PageTitleProps = {
  title: string;
  breadcrumbs?: string[];
};

export function PageTitle({ title, breadcrumbs }: PageTitleProps) {
  const router = useRouter();

  const pageBreadcrumbs = breadcrumbs?.length
    ? breadcrumbs
    : router.asPath
      .toLowerCase()
      .split('/')
      .filter((item) => item);

  return (
    <div className="w-full flex flex-col items-center border-b border-gray-200 mb-8">
      <div className="max-w-[1440px] px-6 lg:px-[60px] w-full">
        <Box width={'full'}>
          <Flex direction={'column'} w="100%" py={4}>
            <Heading as="h1" size="md" textTransform={'uppercase'}>
              {title}
            </Heading>
            <Breadcrumb spacing={1} separator={<ChevronRightIcon />} color="gray.600">
              {pageBreadcrumbs.map((breadcrumb, index) => (
                <BreadcrumbItem key={breadcrumb}>
                  <NextLink
                    href={`/${pageBreadcrumbs
                      .slice(0, index + 1)
                      .filter((item) => item !== 'Home')
                      .map((item) => slugify(decode(item)))
                      .join('/')}`}
                    passHref
                  >
                    <BreadcrumbLink fontWeight="medium">{decode(breadcrumb)}</BreadcrumbLink>
                  </NextLink>
                </BreadcrumbItem>
              ))}
            </Breadcrumb>
          </Flex>
        </Box>
      </div>
    </div>
  );
}
