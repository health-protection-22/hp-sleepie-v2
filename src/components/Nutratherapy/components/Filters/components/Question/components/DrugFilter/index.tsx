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
  Text,
} from '@chakra-ui/react';

import { useDrugFilter } from './hooks/useDrugFilter';

import { InputAutocomplete } from '../../../../../../../shared/CustomInputs/InputAutocomplete';

import { FilterTitle } from '../shared/FilterTitle';
import CloseIcon from '../../../../../../../../assets/icon/Close';
import { When } from '../../../../../../../shared/When';

export function DrugFilter() {
  const { drugs, selectedDrugsLabels, handleClick, removeDrug } = useDrugFilter();

  return (
    <Popover>
      <PopoverTrigger>
        <Flex flexDir="column">
          <FilterTitle title="Do you take any medications?" />
          <When value={selectedDrugsLabels.length > 0}>
            <div className="flex gap-3 items-center flex-wrap">
              {selectedDrugsLabels.map((selectedDrug, index) => (
                <div
                  className="flex gap-3 items-center justify-between max-w-fit rounded-3xl border border-gray-400 px-2 mt-2 min-w-fit"
                  key={index}
                >
                  <span className="text-gray-400 text-sm whitespace-nowrap">{selectedDrug}</span>
                  <button
                    onClick={() => {
                      removeDrug(selectedDrug);
                    }}
                  >
                    <CloseIcon width="8" height="8" fill="black" />
                  </button>
                </div>
              ))}
            </div>
          </When>
          <When value={selectedDrugsLabels.length === 0}>
            <Text color="gray.400" className="step-two-interaction">
              Select your medications
            </Text>
          </When>
        </Flex>
      </PopoverTrigger>
      <PopoverContent bg="white">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader fontWeight="semibold" fontSize="sm" color="gray.600">
          Do you take any medications?
        </PopoverHeader>
        <PopoverBody>
          <InputAutocomplete
            list={drugs}
            placeholder="Search medications"
            dispatchActionOnSelect={handleClick}
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
