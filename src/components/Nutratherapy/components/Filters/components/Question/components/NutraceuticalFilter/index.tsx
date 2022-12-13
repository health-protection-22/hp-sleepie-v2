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
} from '@chakra-ui/react';

import { useNutraceuticalFilter } from './hooks/useNutraceuticalFilter';

import { InputAutocomplete } from '../../../../../../../shared/CustomInputs/InputAutocomplete';

import { FilterTitle } from '../shared/FilterTitle';
import { FilterAnswer } from '../shared/FilterAnswer';

export function NutraceuticalFilter() {
  const { nutraceuticals, selectedNutraceuticals, handleClick } = useNutraceuticalFilter();

  return (
    <Popover>
      <PopoverTrigger>
        <Flex flexDir="column" className="step-two-interaction">
          <FilterTitle title="Do you take any sleep supplements?" />
          <FilterAnswer
            value={selectedNutraceuticals.join(', ')}
            label={'Select your sleep supplements'}
          />
        </Flex>
      </PopoverTrigger>
      <PopoverContent bg="white">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader fontWeight="semibold" fontSize="sm" color="gray.600">
          Do you take any sleep supplements?
        </PopoverHeader>
        <PopoverBody>
          <InputAutocomplete
            list={nutraceuticals}
            placeholder="Search sleep supplements"
            dispatchActionOnSelect={handleClick}
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
