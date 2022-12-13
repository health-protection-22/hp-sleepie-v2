import React from 'react';
import { SimpleGrid, Box, Avatar, Heading, Text, IconButton } from '@chakra-ui/react';
import { FaLinkedinIn } from 'react-icons/fa';

export function OurTeam() {
  const members = [
    {
      avatar: '/images/team/marcello.png',
      name: 'Marcello Rachlyn',
      role: 'CEO e Co-founder',
      link: 'https://www.linkedin.com/in/marcello-rachlyn-3a301449/',
    },
    {
      avatar: '/images/team/daniel-barros.png',
      name: 'Daniel B. Daniel',
      role: 'COO / Co-Founder',
      link: 'https://www.linkedin.com/in/daniel-daniel-74a4a6150/',
    },
    {
      avatar: '/images/team/jose-borghi.png',
      name: 'José Borghi',
      role: 'Co-founder / CMO',
      link: 'https://www.linkedin.com/in/jos%C3%A9-borghi-753ab9110/',
    },
    {
      avatar: '/images/team/wesley-dias.png',
      name: 'Wesley Dias',
      role: 'CTO',
      link: 'https://www.linkedin.com/in/wesley-dias-77098842/',
    },
    {
      avatar: '/images/team/aryadne.jpg',
      name: 'Aryadne Zonetti',
      role: 'Head of Growth',
      link: 'https://www.linkedin.com/in/aryadnezonetti/',
    },
    {
      avatar: '/images/team/elaine-crisvalle.png',
      name: 'Elaine Crisvalle',
      role: 'People',
      link: 'https://www.linkedin.com/in/elaine-cristina-valle-33818321/',
    },
    {
      avatar: '/images/team/keyla-ketlyn.png',
      name: 'Keyla Ketlyn',
      role: 'Content Analysis',
      link: 'https://www.linkedin.com/in/keylaketlyn/',
    },
    {
      avatar: '/images/team/andrebertolzo.png',
      name: 'André Bertolzo',
      role: 'Back-End Developer',
      link: 'https://www.linkedin.com/in/andr%C3%A9-aparecido-bertolzo-1b0b6a230/',
    },
    {
      avatar: '/images/team/paulomendes.jpg',
      name: 'Paulo Mendes',
      role: 'Front-End Developer',
      link: 'https://www.linkedin.com/in/paulo-henrique-mendes-de-souza-a251981a2/',
    },
    {
      avatar: '/images/team/anaclara.png',
      name: 'Ana Clara',
      role: 'Social Media Manager',
      link: 'https://www.linkedin.com/in/ana-clara-rocha/',
    },
  ];

  return (
    <Box>
      <Heading
        as="h3"
        size="md"
        color="gray.600"
        textAlign="center"
        fontWeight="medium"
        py={8}
        mb={8}
        bgImage="/images/bg-team-members.png"
        bgSize="contain"
        bgRepeat="no-repeat"
        bgPos="center"
      >
        Team members
      </Heading>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={12}>
        {members.map(({ avatar, name, role, link }, index) => (
          <Box key={index} textAlign="center">
            <Avatar
              src={avatar}
              size="2xl"
              name={name}
              bg="primary.500"
              color="white"
              mx="auto"
              mb={4}
              border="none"
            />
            <Heading as="h4" fontSize="sm" color="gray.600">
              {name}
            </Heading>
            <Text
              textTransform="uppercase"
              fontSize="xs"
              color="gray.400"
              fontWeight="semibold"
              mb={2}
            >
              {role}
            </Text>
            <IconButton
              as="a"
              aria-label={name}
              fontSize="lg"
              variant="outline"
              borderWidth="2px"
              href={link}
              target="_blank"
              icon={<FaLinkedinIn />}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
