import React from 'react';
import NextLink from 'next/link';
import type { GetStaticProps, GetStaticPaths } from 'next';
import {
  Box,
  Flex,
  Image,
  Text,
  Link,
  List,
  ListIcon,
  ListItem,
  Avatar,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import groq from 'groq';
import { PortableText, PortableTextComponentProps } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';
import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';
import { decode } from 'html-entities';
import slugify from 'react-slugify';

import client, { urlFor } from '../../lib/sanity';

import { Page } from '../../components/Page';
import { When } from '../../components/shared/When';

import { PostProps } from '../../@types/sanity/PostProps';
import { ImageProps } from '../../@types/sanity/sections/ImageProps';
import { YoutubeProps } from '../../@types/sanity/sections/YoutubeProps';

const portableComponents = {
  types: {
    image: ({ value }: { value: ImageProps }) => {
      if (!value?.asset?._ref) {
        return null;
      }

      return <Image alt={value.alt || ' '} loading="lazy" src={urlFor(value).url()} mx="auto" />;
    },
    youtube: ({ value }: { value: YoutubeProps }) => {
      const { url } = value;
      const id = getYouTubeId(url);

      if (!id) return null;

      return (
        <Box mx="auto">
          <YouTube videoId={id} />
        </Box>
      );
    },
  },
  list: {
    bullet: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <List spacing={2}>{children}</List>
    ),
  },
  listItem: {
    bullet: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <ListItem display="flex">
        <ListIcon as={ChevronRightIcon} color="primary.600" fontSize="xl" h={8} />
        <Text>{children}</Text>
      </ListItem>
    ),
  },
};

type Props = {
  post: PostProps;
};

const Post = ({ post }: Props) => {
  const pageBreadcrumbs = ['Home', 'Blog', post?.title];

  return (
    <Page title={post?.seoTitle || post?.title} description={post?.metaDescription}>
      <Box as="main" w="100%" maxWidth={1200} mx="auto" px={[4, 4, 4, 4, 0]}>
        <>
          {post?.mainImage && (
            <Flex
              direction="column"
              justifyContent="space-between"
              alignItems="center"
              position="relative"
              height={[64, 72, 96]}
              width="100%"
              borderRadius="xl"
              overflow="hidden"
              textAlign="center"
              p={4}
              my={8}
            >
              <Box
                bgImg={urlFor(post?.mainImage).url()}
                bgPos="center"
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
              />
              <Box
                bgGradient="linear(to-b, transparent,  gray.900)"
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
              />
              <Box display="inline-flex" alignSelf="flex-end">
                <Text
                  fontSize={['xs', 'sm']}
                  color="gray.50"
                  position="relative"
                  bgColor="primary.500"
                  py={1}
                  px={4}
                  borderRadius="3xl"
                  fontWeight="semibold"
                >
                  {new Date(post?.publishedAt).toLocaleDateString('en-us', {
                    year: 'numeric',
                    day: 'numeric',
                    month: 'long',
                  })}
                </Text>
              </Box>
              <Flex direction="column" gap={2} alignItems="center">
                <Breadcrumb
                  spacing={1}
                  separator={<ChevronRightIcon />}
                  color="gray.300"
                  position="relative"
                >
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
                        <BreadcrumbLink fontWeight="medium" fontSize={['xs', 'sm', 'md']}>
                          {decode(breadcrumb)}
                        </BreadcrumbLink>
                      </NextLink>
                    </BreadcrumbItem>
                  ))}
                </Breadcrumb>
                <Heading
                  as="h1"
                  color="gray.100"
                  fontWeight="medium"
                  fontSize={['lg', 'xl', '2xl', '3xl']}
                  position="relative"
                >
                  {post?.title}
                </Heading>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  gap={4}
                  mt={2}
                  position="relative"
                >
                  {post?.categories && (
                    <List>
                      {post?.categories.map((category) => (
                        <ListItem
                          key={category}
                          bg="gray.100"
                          py={1}
                          px={4}
                          borderRadius="3xl"
                          fontWeight="semibold"
                          textTransform="uppercase"
                          fontSize={['xs', 'sm']}
                          color="primary.500 "
                        >
                          {category}
                        </ListItem>
                      ))}
                    </List>
                  )}
                </Flex>
              </Flex>
            </Flex>
          )}
          <Flex
            direction="column"
            gap={4}
            sx={{
              p: {
                textAlign: 'justify',
                a: {
                  textDecoration: 'underline',
                  color: 'primary.500',
                },
                'a:hover': {
                  textDecoration: 'none',
                },
              },
              h2: { color: 'primary.500', fontWeight: 'medium', fontSize: '2xl', mt: '8' },
              strong: { fontWeight: 'semibold' },
            }}
          >
            <PortableText value={post?.content} components={portableComponents} />
          </Flex>
          <When value={post?.author}>
            <Flex
              direction={['column', 'row']}
              alignItems={['center', 'flex-start']}
              textAlign={['center', 'left']}
              bg="gray.100"
              gap={4}
              p={4}
              mt={8}
              borderRadius="xl"
            >
              {post?.author?.image && (
                <Avatar
                  src={urlFor(post?.author.image).width(120).url()}
                  name={post?.author.name}
                  size="xl"
                />
              )}
              <Box>
                <Text fontSize="lg" color="primary.500" fontWeight="medium">
                  {post?.author?.name}
                </Text>
                <Link
                  href={`mailto:${post?.author?.email}`}
                  display="block"
                  color="gray.600"
                  mb={4}
                  textDecor="underline"
                  _hover={{ textDecor: 'none' }}
                >
                  {post?.author?.email}
                </Link>
                <Flex
                  direction="column"
                  sx={{
                    p: { textAlign: 'justify', color: 'gray.600', fontSize: 'sm' },
                    h2: { color: 'primary.500', fontWeight: 'medium', fontSize: 'lg', mt: '8' },
                  }}
                >
                  <PortableText value={post?.author?.bio} components={portableComponents} />
                </Flex>
              </Box>
            </Flex>
          </When>
        </>
      </Box>
    </Page>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  seoTitle,
  metaDescription,
  "author": author-> {
    name,
    email,
    image,
    bio
  },
  "categories": categories[]->title,
  mainImage,
  publishedAt,
  "content": body
}`;

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug?.toString();
  const post = await client.fetch<PostProps>(query, { slug });

  return {
    props: {
      post,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch<string[]>(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`,
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
};

export default Post;
