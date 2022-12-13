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

import { StudiesList } from '../StudiesList';

import { StudyProps } from '../../@types/StudyProps';

type StudiesModalProps = {
  dietarySupplement: string;
  healthGoal: string;
  studies: StudyProps[];
  isOpen: boolean;
  onClose: () => void;
};

export function StudiesModal({
  dietarySupplement,
  healthGoal,
  studies,
  isOpen,
  onClose,
}: StudiesModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="6xl" scrollBehavior="inside" isCentered>
      <ModalOverlay backdropFilter="auto" backdropBlur="1px" bg="blackAlpha.600" />
      <ModalContent>
        <ModalHeader>
          <Heading
            as="h3"
            size="md"
          >{`Published articles about ${dietarySupplement} and ${healthGoal}`}</Heading>
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
          <StudiesList studies={studies} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
