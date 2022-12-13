import React from 'react';
import { HStack, Icon, Link, VisuallyHidden } from '@chakra-ui/react';

import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';

export function SocialNetworks() {
  const networks = [
    {
      icon: BsFacebook,
      label: 'Facebook',
      color: '#3b5998',
      link: 'https://www.facebook.com/healthprotectionofficial',
    },
    {
      icon: BsInstagram,
      label: 'Instagram',
      color: '#c32aa3',
      link: 'https://www.instagram.com/health.protection/',
    },
    {
      icon: BsLinkedin,
      label: 'LinkedIn',
      color: '#0a66c2',
      link: 'https://www.linkedin.com/company/health-protection/',
    },
  ];

  return (
    <HStack spacing={4} mt={8}>
      {networks.map(({ icon, label, color, link }, index) => (
        <Link key={index} href={link} target="_blank" title={label}>
          <Icon as={icon} w={6} h={6} color={color} />
          <VisuallyHidden>{label}</VisuallyHidden>
        </Link>
      ))}
    </HStack>
  );
}
