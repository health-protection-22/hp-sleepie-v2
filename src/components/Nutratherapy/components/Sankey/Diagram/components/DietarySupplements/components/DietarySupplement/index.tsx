import React from 'react';

import { Box, Flex, Text, Icon, IconButton, useToast } from '@chakra-ui/react';
import { BiRefresh } from 'react-icons/bi';
import { RiCloseCircleFill } from 'react-icons/ri';

import { useSankey } from '../../../../../contexts/sankey';

import { useDietarySupplement } from './hooks/useDietarySupplement';

import { NutritionInfoIcon } from '../../../../../../../../../assets/icon/NutritionInfo';

import { When } from '../../../../../../../../shared/When';
import { RelationsModal } from '../../../RelationsModal';

import { DietarySupplementProps } from '../../../../../../../@types/DietarySupplementProps';

type Props = {
  dietarySupplement: DietarySupplementProps;
};

export function DietarySupplement({ dietarySupplement }: Props) {
  const sankeyContext = useSankey();
  const { BASE_HEIGHT } = sankeyContext;

  const {
    isOpen,
    onClose,
    relations,
    relatedSubHealthGoals,
    handleStudiesClick,
    handleBlackListClick,
  } = useDietarySupplement();

  const toast = useToast();

  return (
    <Box position="relative">
      <Flex
        id={dietarySupplement.slug}
        bg="gray.200"
        px={[1, 1, 1, 2]}
        borderRightRadius="xl"
        borderLeftRadius={['xl', 'xl', 'xl', 'xl', 'none']}
        h={[
          'auto',
          'auto',
          'auto',
          'auto',
          `${relatedSubHealthGoals(dietarySupplement.slug).length * BASE_HEIGHT}px`,
        ]}
        position="relative"
        alignItems="center"
        gap={[1, 1, 2]}
        zIndex={1}
        overflow="hidden"
        w={['120px', '180px', '300px', '300px', '250px']}
      >
        <button
          className="flex w-full justify-start items-center gap-4 cursor-pointer hover:opacity-50 duration-200 h-full py-2"
          onClick={() => {
            handleStudiesClick(dietarySupplement);
          }}
        >
          <IconButton
            icon={<NutritionInfoIcon />}
            aria-label="Scientific foundation"
            colorScheme=""
            size={['16px', '20px', '20px', '20px', '24px']}
            width={['16px', '20px', '20px', '20px', '24px']}
          />
          <div className="flex flex-col items-start">
            <Text fontSize={['xx-small', 'xs', 'sm']} lineHeight="normal" fontWeight="semibold">
              {dietarySupplement.title}
            </Text>
            <Text
              color="gray.500"
              fontSize={['xx-small', 'xs']}
              lineHeight="short"
              fontWeight="semibold"
            >
              {`${dietarySupplement.dosage}${dietarySupplement.dosageUnit}`}
            </Text>
          </div>
        </button>
        <Flex minW="24px">
          <When value={!dietarySupplement.isSupercore}>
            <Icon
              as={BiRefresh}
              fontSize={[16, 16, 24]}
              color="gray.600"
              justifySelf="flex-end"
              onClick={() => {
                handleBlackListClick(dietarySupplement);

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
                      bg="red.100"
                      p={3}
                      borderRadius="xl"
                      color="red.600"
                      fontWeight="semibold"
                      fontSize="sm"
                    >
                      <Icon as={RiCloseCircleFill} fontSize={24} />
                      {`${dietarySupplement.title} has been added to blacklist.`}
                    </Flex>
                  ),
                });
              }}
              _hover={{ cursor: 'pointer' }}
            />
          </When>
        </Flex>
      </Flex>
      <Box
        display={['flex', 'flex', 'flex', 'flex', 'block']}
        position="absolute"
        alignItems="center"
        top={0}
        left={0}
        bottom={0}
      >
        {relatedSubHealthGoals(dietarySupplement.slug).map((subHealthGoal) => (
          <Box
            key={subHealthGoal}
            id={`${dietarySupplement.slug}_sub_${subHealthGoal}`}
            height={`${BASE_HEIGHT}px`}
            position={['absolute', 'absolute', 'absolute', 'absolute', 'relative']}
          />
        ))}
      </Box>
      <RelationsModal
        dietarySupplement={dietarySupplement}
        relations={relations}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  );
}
