import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Heading,
} from '@chakra-ui/react';

import { EvidenceLevel } from '../../../../../MatrixTable/components/EvidenceLevel';
import { MagnitudeLevel } from '../../../../../MatrixTable/components/MagnitudeLevel';

import { DietarySupplementProps } from '../../../../@types/DietarySupplementProps';
import { RelationProps } from '../@types/RelationProps';
import colors from '../../../../../../styles/Theme/colors';
import { Link } from '../../../../../shared/Link';

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
  const { title, slug } = dietarySupplement;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl" scrollBehavior="inside" isCentered>
      <ModalOverlay backdropFilter="auto" backdropBlur="1px" bg="blackAlpha.600" />
      <ModalContent>
        <ModalHeader>
          <Heading as="h3" size="md" color={colors.text.secondary}>
            {`Scientific summary for `}
            <Link url={`dietary-supplements/hormone-hormone-precursor/${slug}`}>
              <span className="hover:opacity-70 duration-200 underline">{title}</span>
            </Link>
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
          <div className="px-10 py-4 flex justify-between items-center bg-backgroundCart-secondary rounded-lg">
            <div className="flex gap-1 items-center w-[25%]">
              <div className="h-9 w-[1px] bg-brand-primary" />
              <span className="font-light text-base text-text-secondary">Outcomes</span>
            </div>
            <div className="flex gap-1 items-center w-[25%]">
              <div className="h-9 w-[1px] bg-brand-primary" />
              <span className="font-light text-base text-text-secondary">Consistent Effects</span>
            </div>
            <div className="flex gap-1 items-center w-[25%]">
              <div className="h-9 w-[1px] bg-brand-primary" />
              <span className="font-light text-base text-text-secondary">Strength of Effects</span>
            </div>
            <div className="flex gap-1 items-center w-[25%]">
              <div className="h-9 w-[1px] bg-brand-primary" />
              <Link url={`dietary-supplements/hormone-hormone-precursor/${slug}`}>
                <span className="font-light text-base text-text-secondary hover:opacity-70 duration-200 underline">
                  Scientific Articles
                </span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            {relations.map((relation, index) => (
              <div
                className="px-10 py-4 flex justify-between items-center bg-backgroundCart-secondary rounded-lg"
                key={index}
              >
                <span className="text-sm font-light text-text-secondary w-[25%]">
                  {relation.healthGoal.title}
                </span>
                <div className="w-[25%]">
                  <div className="w-[80%]">
                    <EvidenceLevel title={'evidenceLevel'} value={relation.evidenceLevel} />
                  </div>
                </div>
                <div className="w-[25%]">
                  <MagnitudeLevel title={'magnitudeLevel'} value={relation.magnitudeLevel} />
                </div>
                <span className="text-sm font-light text-text-secondary w-[25%]">{`These data summarize ${relation.studies.length} scientific studies`}</span>
              </div>
            ))}
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
