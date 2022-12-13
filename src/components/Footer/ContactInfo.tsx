import React from 'react';
import { Stack, Flex, Box, Icon, Text, Link } from '@chakra-ui/react';
import { BsEnvelope } from 'react-icons/bs';

export function ContactInfo() {
  const infos = [
    {
      icon: BsEnvelope,
      label: 'Contact',
      link: 'mailto:support@healthprotection.com',
      text: 'support@healthprotection.com',
    },
  ];

  return (
    <Stack spacing={4} mt={8}>
      {infos.map(({ icon, label, link, text }, index) => (
        <Flex key={index} gap={4} alignItems="center">
          <Icon as={icon} fontSize={24} />
          <Box>
            <Text fontSize="xs" fontWeight="medium" color="gray.400" borderColor="gray.200">
              {label}
            </Text>
            <Link href={link} target={'_blank'} fontSize="sm" fontWeight="medium">
              {text}
            </Link>
          </Box>
        </Flex>
      ))}
    </Stack>
  );
}
