import React from 'react';
import Image from 'next/image';
import { Box, Heading, Text } from '@chakra-ui/react';

import NutratherapyGraphImg from '../../../public/images/nutratherapy-graph.jpg';

export function Nutratherapy() {
  return (
    <Box textAlign="center">
      <Text as="span" fontSize="sm" color="gray.400" fontWeight="semibold">
        Welcome to the future of supplements
      </Text>
      <Heading as="h3" color="primary.600" size="lg" mb={4}>
        Personal Nutratherapy ®️
      </Heading>
      <div className="flex lg:flex-row flex-col gap-12">
        <Text style={{ flex: 1, textAlign: 'justify' }}>
          The Personal Nutratherapy® method was created from the need for optimization in the
          recommendation of supplements. With this in mind, we developed from many tests over the
          years a system that combines <Text as="strong">continuous improvement</Text> with our{' '}
          <Text as="strong">proprietary algorithm</Text> and <Text as="strong">science</Text>,
          resulting in a high-level recommendation customized to each need.
        </Text>
        <Image
          src={NutratherapyGraphImg}
          alt="Learn more about Nutratherapy"
          placeholder="blur"
          height={359}
          width={676}
        />
      </div>
    </Box>
  );
}
