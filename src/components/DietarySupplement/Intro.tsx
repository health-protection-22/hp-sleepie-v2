import React from 'react';
import Image from 'next/image';
import { Box, Flex, SimpleGrid, Heading, List, ListItem, Text } from '@chakra-ui/react';

import { parseHtmlText } from '../../utils/parseHtmlText';

import { When } from '../shared/When';

import { DietarySupplementProps } from '../../@types/DietarySupplementProps';

type IntroProps = {
  dietarySupplement: DietarySupplementProps;
};

export function Intro({ dietarySupplement }: IntroProps) {
  const {
    title,
    image,
    scientificName,
    commonName,
    description,
    origin,
    source,
    category,
    ageRange,
    toxicity,
  } = dietarySupplement;

  const items = [
    { label: 'Origin:', value: origin.join(', ') },
    { label: 'Source:', value: source },
    { label: 'Category:', value: category.name },
    { label: 'Age range:', value: ageRange.join(', ') },
    { label: 'Toxicity:', value: toxicity },
  ];

  return (
    <SimpleGrid as="section" columns={[1, 1, 2, 2]} spacing={8}>
      <Box>
        <Heading
          size="md"
          pb={2}
          mb={4}
          borderBottom="1px"
          borderColor="gray.200"
        >{`${scientificName}, ${commonName}`}</Heading>
        <Flex direction="column" gap={4} textAlign="justify">
          {parseHtmlText(description)}
        </Flex>
        <List mt="8" spacing={2} color="gray.600">
          {items.map(({ label, value }, index) => (
            <ListItem key={index}>
              <Text as="span" fontWeight="semibold">
                {label}
              </Text>{' '}
              {value}
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <When value={!!image}>
          <Image
            src={image || ''}
            alt={title}
            title={title}
            width={800}
            height={600}
            placeholder="blur"
            blurDataURL={image || ''}
          />
        </When>
      </Box>
    </SimpleGrid>
  );
}
