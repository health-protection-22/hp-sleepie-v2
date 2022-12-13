import React from 'react';
import Image from 'next/image';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import SpainBarcelonaImg from '../../../public/images/spain-barcelona.jpg';
import IsraelTelAvivImg from '../../../public/images/israel-tel-aviv.jpg';
import BrazilSaoPaulo from '../../../public/images/brazil-sao-paulo.jpg';
import UnitedStates from '../../../public/images/usa.jpg';

export function TheCompany() {
  const countries = [
    {
      image: UnitedStates,
      title: 'United States',
      country: 'United States',
      text: 'Our operational executions take place in the US, strengthening our relationships with consultants and advisors. This allows us to be closer to the technological innovations, startup ecosystem and scientific advances that strengthen our nutritional and customization base. The US provides us with a base differentiated by its prominence in the exponentially growing supplement market that is attractive to the entire world. With this, it stands out as a promising one in the industry, showing growth data of 4.3% during the forecast period (2020-2025), in addition to 75% of American adults making use of sleep supplements.',
    },
    {
      image: SpainBarcelonaImg,
      title: 'Spain - Barcelona',
      country: 'Spain',
      text: 'As one of the largest European centers, Barcelona was chosen for its strategic location and several leading universities and research institutes, which provide high-level technological advances. Finally, the city has a long tradition of excellence in health and wellness, all to further optimize your sleep health.',
    },
    {
      image: IsraelTelAvivImg,
      title: 'Israel - Tel Aviv',
      country: 'Israel',
      text: 'Tel Aviv has become an important business center with companies, especially about high technology and science. Through strong emotional ties, Israel has supported advances in our proprietary algorithm. All this to maintain the high level of customization and security of your sleep solution.',
    },
    {
      image: BrazilSaoPaulo,
      title: 'Brazil - São Paulo',
      country: 'Brazil',
      text: "Our headquarters in São Paulo is home to our operational team. It is composed of professionals with years of experience in the area and is where the company's daily routine happens. We are surrounded by a city full of diversity and daily development, which cooperates for improvements and creativity.",
    },
  ];

  return (
    <Flex direction="column" gap={20}>
      {countries.map(({ image, title, country, text }, index) => (
        <Flex key={index} direction={['column', 'column', 'row']} gap={8}>
          <Box maxW={[200, 200, 300]} mx="auto">
            <Image
              src={image}
              alt={title}
              title={title}
              placeholder="blur"
              width="378"
              height="303"
            />
          </Box>
          <Flex direction="column" flex="1" gap={4}>
            <Box>
              <Heading as="h3" size="md" color="primary.600" fontWeight="medium">
                {country}
              </Heading>
            </Box>
            <Text textAlign="justify">{text}</Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}
