import React from 'react';
import {
  Flex,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  useBreakpointValue,
} from '@chakra-ui/react';

import { SelectDate } from '../../../../../../../shared/CustomSelects/SelectDate';
import { FilterTitle } from '../shared/FilterTitle';
import { FilterAnswer } from '../shared/FilterAnswer';

import { useAgeFilter } from './hooks/useAgeFilter';

export function AgeFilter() {
  const { birthDate, birthDateArray, handleDateChange } = useAgeFilter();

  const isWideVersion = useBreakpointValue({
    sm: false,
    md: true,
  });

  return (
    <Popover>
      <PopoverTrigger>
        <Flex flexDir="column">
          <FilterTitle title="What is your birth date?" />
          <FilterAnswer value={birthDate} label={'Select your birth date'} />
        </Flex>
      </PopoverTrigger>
      <PopoverContent width={isWideVersion ? 'md' : 'xs'} bg="white">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader fontWeight="semibold" fontSize="sm" color="gray.600">
          What is your birth date?
        </PopoverHeader>
        <PopoverBody>
          <SelectDate
            dispatchActionOnChange={handleDateChange}
            day={birthDateArray[0]}
            month={birthDateArray[1]}
            year={birthDateArray[2]}
            isFlexColumn={!isWideVersion}
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
