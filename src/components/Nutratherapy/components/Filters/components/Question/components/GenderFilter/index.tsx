import React from 'react';
import {
  Flex,
  Text,
  Stack,
  RadioGroup,
  Radio,
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

import { useGenderFilter } from './hooks/useGenderFilter';

import { When } from '../../../../../../../shared/When';

import { RelatedQuestionProps } from '../../../../../../../../services/nutratherapy/types';

type Props = {
  question: RelatedQuestionProps;
};

export function GenderFilter({ question }: Props) {
  const {
    gender,
    subGender,
    selectedGenderSlug,
    selectedSubGenderSlug,
    handleGenderClick,
    handleSubGenderClick,
  } = useGenderFilter({ question });

  return (
    <Popover>
      <PopoverTrigger>
        <Flex flexDir="column">
          <FilterTitle title="What is your gender?" />
          <FilterAnswer
            value={gender.title}
            suffix={subGender.title}
            label={'Select your gender'}
          />
        </Flex>
      </PopoverTrigger>
      <PopoverContent bg="white">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader fontWeight="semibold" fontSize="sm" color="gray.600">
          What is your gender?
        </PopoverHeader>
        <PopoverBody>
          <RadioGroup
            name={question.category?.slug}
            onChange={(value) => {
              handleGenderClick(value);
            }}
            defaultValue={selectedGenderSlug}
          >
            <Stack>
              {question.answers.map((answer) => {
                const subQuestion = Object.values(answer.answers)[0];
                const subAnswers = Object.values(subQuestion?.answers || {});

                const answerIsActive = selectedGenderSlug === answer.slug;

                return (
                  <React.Fragment key={answer.slug}>
                    <Radio
                      key={answer.slug}
                      value={answer.slug}
                      colorScheme={answer.title.toLowerCase()}
                    >
                      <Text>{answer.title}</Text>
                    </Radio>
                    <When value={!!subAnswers.length}>
                      <RadioGroup
                        name={`${answer.slug}_sub`}
                        onChange={(value) => {
                          handleSubGenderClick(value);
                        }}
                        defaultValue={subAnswers[0]?.slug || ''}
                        value={selectedSubGenderSlug || '0'}
                        colorScheme={answer.title.toLowerCase()}
                        pl={6}
                      >
                        <Stack>
                          {subAnswers.map((subAnswer) => (
                            <Radio
                              key={subAnswer.slug}
                              value={subAnswer.slug}
                              isDisabled={!answerIsActive}
                            >
                              {subAnswer.title}
                            </Radio>
                          ))}
                        </Stack>
                      </RadioGroup>
                    </When>
                  </React.Fragment>
                );
              })}
            </Stack>
          </RadioGroup>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
