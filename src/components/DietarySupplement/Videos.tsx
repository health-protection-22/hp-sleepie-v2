import React from 'react';
import { Box, SimpleGrid, AspectRatio, Heading } from '@chakra-ui/react';

import { DietarySupplementProps } from '../../@types/DietarySupplementProps';

type VideosProps = {
  dietarySupplement: DietarySupplementProps;
};

export function Videos({ dietarySupplement }: VideosProps) {
  const { title, videos } = dietarySupplement;

  return (
    <Box as="section">
      <Heading
        size="md"
        pb={2}
        mb={4}
        borderBottom="1px"
        borderColor="gray.200"
      >{`Related videos about ${title}`}</Heading>
      <SimpleGrid columns={[1, 1, 2, 2]} gap={8}>
        {videos.map((video) => (
          <AspectRatio key={video} ratio={1.77}>
            <Box
              as="iframe"
              width="560"
              height="315"
              src={`https://www.youtube-nocookie.com/embed/${video}?controls=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AspectRatio>
        ))}
      </SimpleGrid>
    </Box>
  );
}
