import React from 'react';
import Image from 'next/image';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

import HowItWorksGif from '../../../public/images/how-it-works.gif';
import { Link } from '../shared/Link';

export function TheScience() {
  return (
    <Box>
      <Heading as="h3" size="md" color="primary.600" fontWeight="medium" mb={4}>
        The science behind each dietary supplement
      </Heading>
      <Text>
        Science is behind everything we ingest. We have translated this science into a simple
        didactic table so that you can know exactly the scientific basis of each dietary supplement
        that will optimize your health.
      </Text>
      <Text mb={4}>
        You can find this information on the page of each dietary supplement or health goal. In this
        table you will see all the areas in which the supplement acts, the strength of action, the
        consistency of effects, and the studies that prove its benefits. Check out the following
        example:
      </Text>
      <Box textAlign="start">
        <Image
          width="685"
          height="136"
          src={HowItWorksGif}
          alt="Matrix table sample"
          title="Matrix table sample"
        />
        <div className="w-full flex justify-start lg:ml-4 mt-2">
          <Link url="/dietary-supplements">
            <Button as="a" size="lg">
              Try Now
            </Button>
          </Link>
        </div>
      </Box>
    </Box>
  );
}
