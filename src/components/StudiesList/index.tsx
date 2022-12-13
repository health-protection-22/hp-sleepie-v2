import React from 'react';
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';

import { StudyProps } from '../../@types/StudyProps';

type StudiesListProps = {
  studies: StudyProps[];
};

export function StudiesList({ studies }: StudiesListProps) {
  return (
    <Flex direction="column" gap={4}>
      {studies.map(({ slug, title, link, studyLevel }) => (
        <Box key={slug} bg="gray.100" p={4} borderRadius="md">
          <Heading as="h4" size="xs" color="gray.600">
            <Link href={link} target="_blank" textDecor="underline" _hover={{ textDecor: 'none' }}>
              {title}
            </Link>
          </Heading>
          <Text fontSize="sm" lineHeight="base" mt={2}>
            {`Study level: ${studyLevel}`}
          </Text>
        </Box>
      ))}
    </Flex>
  );
}
