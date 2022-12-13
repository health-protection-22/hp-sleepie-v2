import React, { useState } from 'react';
import Image from 'next/image';
import { Box, Heading, Icon, Text, Tooltip, useBreakpointValue } from '@chakra-ui/react';
import { HiLockClosed } from 'react-icons/hi';

import { When } from '../../shared/When';
import colors from '../../../styles/Theme/colors';
import { AskIcon } from '../../../assets/icon/AskIcon';

type Props = {
  title: string;
  subtitle: string;
  tooltip: string;
  description?: string | (string | JSX.Element)[];
  subdescription?: string | (string | JSX.Element)[];
  icon: string;
  color?: string;
  isActive?: boolean;
};

export function StepIntro({
  title,
  subtitle,
  description,
  subdescription,
  icon,
  isActive,
  tooltip,
}: Props) {
  const [openTooltip, setOpenTooltip] = useState<boolean>(false);

  function handleTooltip() {
    setOpenTooltip(!openTooltip);
  }

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      w="100%"
      maxWidth={1200}
      mx="auto"
      textAlign="center"
      style={{ opacity: !isActive ? 0.5 : 1 }}
    >
      <Image src={icon} alt={title} width={60} height={60} placeholder="blur" blurDataURL={icon} />
      <Heading size="lg" color="gray.600" fontWeight="medium">
        <div className="w-full flex items-start justify-center gap-1 lg:gap-2">
          <h2 className="text-lg lg:text-4xl font-bold min-w-fit">
            <When value={!isActive}>
              <Text as="sup">
                <Icon as={HiLockClosed} fontSize={15} mr={1} color={colors.text.primary} />
              </Text>
            </When>
            {title}
          </h2>
          <When value={isWideVersion}>
            <Tooltip hasArrow label={tooltip} borderRadius={10} padding={3}>
              <div>
                <AskIcon />
              </div>
            </Tooltip>
          </When>
          <When value={!isWideVersion}>
            <Tooltip hasArrow label={tooltip} borderRadius={10} padding={3} isOpen={openTooltip}>
              <button onClick={handleTooltip}>
                <AskIcon />
              </button>
            </Tooltip>
          </When>
        </div>
      </Heading>
      <When value={!isActive}>
        <Text
          bgColor="gray.600"
          color="white"
          my={2}
          py={1}
          px={4}
          borderRadius="3xl"
          fontSize={['xs', 'xs', 'sm']}
          fontWeight="semibold"
          display="inline-block"
        >
          <Text as="span" display={['block', 'block', 'initial']} color="inherit" lineHeight={1.5}>
            Step blocked.
          </Text>{' '}
          <Text as="span" display={['block', 'block', 'initial']} color="inherit" lineHeight={1.5}>
            Complete previous step to proceed.
          </Text>
        </Text>
      </When>
      <h3 className="w-full text-center text-sm lg:text-2xl my-[5px] lg:my-[10px]">{subtitle}</h3>
      <When value={!!description}>
        <Text fontSize={['xs', 'xs', 'md']} as="p">
          {description}
        </Text>
      </When>
      <When value={!!subdescription}>
        <Text fontSize={['xs', 'xs', 'md']} as="p">
          {subdescription}
        </Text>
      </When>
    </Box>
  );
}
