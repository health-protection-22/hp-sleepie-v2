import React from 'react';
import { Flex, Text, IconButton, Icon, useToast } from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { RiCheckboxCircleFill } from 'react-icons/ri';

import { useNutratherapy } from '../../../../../../../contexts/Nutratherapy';
import { useSankey } from '../../../contexts/sankey';

import { useBlacklist } from './hooks/useBlacklist';

import { When } from '../../../../../../shared/When';
import { Text5 } from '../../../../../../shared/Texts';

export function Blacklist() {
  const context = useNutratherapy();
  const { isLoading } = context;

  const sankeyContext = useSankey();
  const { removedDietarySupplements } = sankeyContext;

  const toast = useToast();

  const { handleRestoreClick } = useBlacklist();

  return (
    <When value={!!removedDietarySupplements.length}>
      <Flex
        gap={4}
        w="100%"
        maxWidth={1200}
        mx="auto"
        alignItems="center"
        bg="gray.200"
        borderRadius="xl"
        p={2}
      >
        <Text5>You have replaced: </Text5>
        {removedDietarySupplements.map((dietarySupplement) => (
          <Flex
            key={dietarySupplement.slug}
            gap={1}
            alignItems="center"
            fontSize="sm"
            fontWeight="semibold"
            bg="red.50"
            borderRadius="xl"
            pl={2}
            pr={1}
          >
            <Text color="red.600">{dietarySupplement.title}</Text>
            <IconButton
              icon={<SmallCloseIcon />}
              aria-label=""
              colorScheme=""
              color="red.600"
              fontSize={16}
              size="xs"
              disabled={isLoading}
              onClick={() => {
                handleRestoreClick(dietarySupplement);

                toast({
                  status: 'success',
                  variant: 'subtle',
                  position: 'top-right',
                  duration: 3000,
                  isClosable: true,
                  render: () => (
                    <Flex
                      alignItems="center"
                      gap={2}
                      bg="green.100"
                      p={3}
                      borderRadius="xl"
                      color="green.600"
                      fontWeight="semibold"
                      fontSize="sm"
                    >
                      <Icon as={RiCheckboxCircleFill} fontSize={24} />
                      {`${dietarySupplement.title} has been removed from blacklist.`}
                    </Flex>
                  ),
                });
              }}
            />
          </Flex>
        ))}
      </Flex>
    </When>
  );
}
