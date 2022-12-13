import React from 'react';
import {
  Flex,
  Stack,
  CheckboxGroup,
  Checkbox,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from '@chakra-ui/react';

import { FilterTitle } from '../shared/FilterTitle';
import { FilterAnswer } from '../shared/FilterAnswer';

import { useAllergyFilter } from './hooks/useAllergyFilter';

import { RelatedQuestionProps } from '../../../../../../../../services/nutratherapy/types';

type Props = {
  question: RelatedQuestionProps;
};

export function AllergyFilter({ question }: Props) {
  const { allergies, selectedAllergies, handleAllergyCheck } = useAllergyFilter({
    question,
  });

  return (
    <Popover>
      <PopoverTrigger>
        <Flex flexDir="column">
          <FilterTitle title="What allergies do you have?" />
          <FilterAnswer value={allergies.join(', ')} label={'Select your allergies'} />
        </Flex>
      </PopoverTrigger>
      <PopoverContent bg="white">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader fontWeight="semibold" fontSize="sm" color="gray.600">
          What allergies do you have?
        </PopoverHeader>
        <PopoverBody>
          <CheckboxGroup value={selectedAllergies}>
            <Stack>
              {question.answers.map((answer) => (
                <Checkbox
                  key={answer.slug}
                  value={answer.slug}
                  onChange={(e) => {
                    const selectedValue = e.target.value;
                    const selectedLabel = e.target.labels ? e.target.labels[0].innerText : '';

                    handleAllergyCheck(selectedValue, selectedLabel);
                  }}
                >
                  {answer.title}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
