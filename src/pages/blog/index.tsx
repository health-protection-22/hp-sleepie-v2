import React from 'react';
import type { GetStaticProps } from 'next';
import NextLink from 'next/link';
import { Box, Flex, SimpleGrid, Image, Text, Heading, Link, Button } from '@chakra-ui/react';
import groq from 'groq';
import client, { urlFor } from '../../lib/sanity';
import { Page } from '../../components/Page';
import { PageTitle } from '../../components/PageTitle';
import { When } from '../../components/shared/When';
import { PostProps } from '../../@types/sanity/PostProps';

type Props = {
  posts: PostProps[];
};

const Blog = ({ posts }: Props) => {
  const title = 'Blog - Sleepie';
  const description =
    "Learn about Sleepie's goals and see how our dietary supplement consulting and customization platform works.";
  const breadcrumbs = ['Home', 'Blog'];

  return (
    <Page title={title} description={description}>
      <PageTitle title="Blog" breadcrumbs={breadcrumbs} />
      <div className="w-full flex flex-col items-center border-b border-gray-200 mb-8">
        <div className="max-w-[1440px] px-6 lg:px-[60px] w-full">
          <Box w="100%" mx="auto">
            <When value={posts}>
              <SimpleGrid columns={[1, 2, 3, 4]} gap={8}>
                {posts.map(
                  ({ _id, title, slug, mainImage, publishedAt, excerpt }) =>
                    slug && (
                      <Flex key={_id} direction="column" bg="gray.100" borderRadius="xl">
                        {mainImage && (
                          <NextLink href="/blog/[slug]" as={`/blog/${slug?.current}`} passHref>
                            <Link>
                              <Image
                                src={urlFor(mainImage).url()}
                                alt={mainImage.alt}
                                mx="auto"
                                borderTopRadius="xl"
                              />
                            </Link>
                          </NextLink>
                        )}
                        <Flex direction="column" p={4} flex={1}>
                          <Text fontSize="sm" color="gray.500" mb={2}>
                            {new Date(publishedAt).toLocaleDateString('en-us', {
                              year: 'numeric',
                              day: 'numeric',
                              month: 'long',
                            })}
                          </Text>
                          <NextLink href="/blog/[slug]" as={`/blog/${slug?.current}`} passHref>
                            <Link>
                              <Heading as="h2" fontSize="md">
                                {title}
                              </Heading>
                            </Link>
                          </NextLink>
                          <Text
                            color="gray.600"
                            textAlign="justify"
                            fontSize="sm"
                            lineHeight="tall"
                            my={4}
                            flex={1}
                          >
                            {excerpt.length > 150
                              ? excerpt.substring(0, 150).concat('...')
                              : excerpt}
                          </Text>
                          <NextLink href="/blog/[slug]" as={`/blog/${slug?.current}`} passHref>
                            <Button as={Link} variant="link" size="sm" alignSelf="flex-end">
                              Read more
                            </Button>
                          </NextLink>
                        </Flex>
                      </Flex>
                    ),
                )}
              </SimpleGrid>
            </When>
          </Box>
        </div>
      </div>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await client.fetch(groq`
    *[_type == "post"]{
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      "content": body
    } | order(publishedAt desc)
  `);

  return {
    props: {
      posts,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default Blog;
