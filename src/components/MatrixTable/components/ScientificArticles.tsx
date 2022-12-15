import React from 'react';
import { Text, useDisclosure } from '@chakra-ui/react';

import { StudiesModal } from '../../DietarySupplement/StudiesModal';

import { RelationProps } from '../../../@types/RelationProps';

type ScientificArticlesProps = {
  title: string;
  relation: RelationProps;
};

export function ScientificArticles({ title, relation }: ScientificArticlesProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Text
        display={['inline-block', 'inline-block', 'none']}
        textTransform="uppercase"
        fontWeight="semibold"
        marginRight="1"
      >
        {title}
      </Text>
      <Text
        onClick={() => {
          onOpen();
        }}
        fontWeight="semibold"
        textDecor="underline"
        cursor="pointer"
        _hover={{ textDecor: 'none' }}
        flex="1"
      >{`See all ${relation.studies.length} studies`}</Text>
      <StudiesModal
        dietarySupplement={relation.dietarySupplement.title}
        // @ts-ignore
        healthGoal={relation.healthGoal.title}
        studies={relation.studies}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}
