import React from 'react';
import { Box, HStack, StackDivider } from '@chakra-ui/react';

import { useNutratherapy } from '../../../../contexts/Nutratherapy';

import { When } from '../../../shared/When';
import { Question } from './components/Question';

import { StepIntro } from '../StepIntro';
import { IndicationArrow } from '../../../shared/IndicationArrow';
import { DNAInput } from './components/DNAInput';

export function Filters() {
  const context = useNutratherapy();
  const { selectedDietarySupplements, relatedQuestions } = context;

  return (
    <Box id="filters">
      <StepIntro
        title="Define your Personal and Health Conditions."
        subtitle="Fine-tune your supplement combination and avoid drug interactions."
        tooltip="To continue your personalization, add some personal and health conditions. This data will eliminate negative interactions respecting your biological organism and consumption habits such as allergies and medications."
        icon="/images/icon-filters.png"
        color="brand.filters"
        isActive={!!selectedDietarySupplements.length}
      />
      <When value={!!relatedQuestions.length && !!selectedDietarySupplements.length}>
        <div className="flex justify-between items-center gap-6">
          <Box w="75%" maxWidth={1200} mx="auto" justifyContent={'space-around'} textAlign="center">
            <HStack
              divider={<StackDivider borderColor="gray.300" />}
              flexDir={['column', 'column', 'column', 'row']}
              w="fit-content"
              minW={'fit-content'}
              gap={2}
              wrap="wrap"
              border="1px"
              alignItems="self-start"
              borderColor="gray.300"
              borderRadius="3xl"
              textAlign="left"
              py={4}
              px={6}
              mx="auto"
              mt={4}
            >
              {relatedQuestions.map((relatedQuestion) => {
                const questionType = relatedQuestion.category?.slug;

                return (
                  <When key={relatedQuestion.uuid} value={questionType}>
                    <Question type={questionType || ''} question={relatedQuestion} />
                  </When>
                );
              })}
            </HStack>
          </Box>
          <DNAInput />
        </div>
      </When>
      <div className="w-full flex justify-center mt-[62px]">
        <IndicationArrow text="Next Step: Eating Habits" url="/#habits" />
      </div>
    </Box>
  );
}
