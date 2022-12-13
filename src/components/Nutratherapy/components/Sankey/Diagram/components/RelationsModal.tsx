import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';

import { parseHtmlText } from '../../../../../../utils/parseHtmlText';

import { EvidenceLevel } from '../../../../../MatrixTable/components/EvidenceLevel';
import { MagnitudeLevel } from '../../../../../MatrixTable/components/MagnitudeLevel';

import { DietarySupplementProps } from '../../../../@types/DietarySupplementProps';
import { RelationProps } from '../@types/RelationProps';

type RelationsModalProps = {
  dietarySupplement: DietarySupplementProps;
  relations: RelationProps[];
  isOpen: boolean;
  onClose: () => void;
};

export function RelationsModal({
  dietarySupplement,
  relations,
  isOpen,
  onClose,
}: RelationsModalProps) {
  const { title, description } = dietarySupplement;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="6xl" scrollBehavior="inside" isCentered>
      <ModalOverlay backdropFilter="auto" backdropBlur="1px" bg="blackAlpha.600" />
      <ModalContent>
        <ModalHeader>
          <Heading as="h3" size="md" color="primary.600">
            {`Scientific summary for ${title}`}
          </Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody
          pb={4}
          sx={{
            '&::-webkit-scrollbar': {
              width: '12px',
            },
            '&::-webkit-scrollbar-track': {
              borderRadius: 'md',

              width: '12px',
              background: 'gray.100',
            },
            '&::-webkit-scrollbar-thumb': {
              borderRadius: 'md',
              background: 'gray.600',
            },
          }}
        >
          {description && (
            <Flex direction="column" gap={4} textAlign="justify">
              {parseHtmlText(description)}
            </Flex>
          )}
          <Flex direction="column" gap={12} mt={12}>
            {relations.map((relation) => (
              <Box key={relation.healthGoal.slug}>
                <Heading as="h4" size="md" color="primary.600">
                  {`${title} for ${relation.healthGoal.title}`}
                </Heading>
                <Text
                  bg="gray.200"
                  borderRadius="xl"
                  px={3}
                  py={0.5}
                  my={2}
                  fontSize="sm"
                  fontWeight="semibold"
                >
                  {`These data summarize ${relation.studies.length} scientific studies`}
                </Text>
                <Flex gap={8}>
                  <Box>
                    <Text textTransform="uppercase" fontWeight="semibold" fontSize="sm">
                      Consistent Effects
                    </Text>
                    <EvidenceLevel title={'evidenceLevel'} value={relation.evidenceLevel} />
                  </Box>
                  <Box>
                    <Text textTransform="uppercase" fontWeight="semibold" fontSize="sm">
                      Strength of Effects
                    </Text>
                    <MagnitudeLevel title={'magnitudeLevel'} value={relation.magnitudeLevel} />
                  </Box>
                </Flex>
              </Box>
            ))}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
