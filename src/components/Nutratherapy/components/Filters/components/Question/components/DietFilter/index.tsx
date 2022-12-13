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

import { useDietFilter } from './hooks/useDietFilter';

import { RelatedQuestionProps } from '../../../../../../../../services/nutratherapy/types';

type Props = {
  question: RelatedQuestionProps;
};

export function DietFilter({ question }: Props) {
  const { selectedDiets, diets, handleDietCheck } = useDietFilter({ question });

  return (
    <Popover>
      <PopoverTrigger>
        <Flex flexDir="column">
          <FilterTitle title="What diets do you follow?" />
          <FilterAnswer value={diets.join(', ')} label={'Select your diets'} />
        </Flex>
      </PopoverTrigger>
      <PopoverContent bg="white">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader fontWeight="semibold" fontSize="sm" color="gray.600">
          What diets do you follow?
        </PopoverHeader>
        <PopoverBody>
          <CheckboxGroup value={selectedDiets}>
            <Stack>
              {question.answers.map((answer) => (
                <Checkbox
                  key={answer.slug}
                  value={answer.slug}
                  onChange={(e) => {
                    const selectedValue = e.target.value;
                    const selectedLabel = e.target.labels ? e.target.labels[0].innerText : '';

                    handleDietCheck(selectedValue, selectedLabel);
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
