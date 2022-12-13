import React from 'react';
import Image from 'next/image';
import { Box, Flex, Heading, Text, Select, Grid } from '@chakra-ui/react';

import { useNutratherapy } from '../../../../../../contexts/Nutratherapy';

import { Interaction } from './components/Interaction';
import { useFood } from './hooks/useFood';

import { FoodProps } from '../../../../../../services/nutratherapy/types';

interface ComponentProps {
  food: FoodProps;
}

export function Food({ food }: ComponentProps) {
  const context = useNutratherapy();
  const { selectedDietarySupplements } = context;

  const { interactedDietarySupplementsSlugs, getActualValue, handleSelectChange } = useFood({
    food,
  });

  return (
    <Flex key={food.slug} direction="column" gap={4}>
      <Grid templateColumns={'auto 1fr'} columnGap={4}>
        <Box maxW={[16, 16, 'none']} gridColumn={1} gridRowStart={1} gridRowEnd={[1, 1, 1, 5]}>
          <Image
            src={food.image}
            alt={food.title}
            width={100}
            height={100}
            placeholder="blur"
            blurDataURL={food.image}
          />
        </Box>
        <Flex gap={2} gridColumn={2} alignItems="center">
          <Heading as="h4" size="sm" color="gray.600">
            {food.title}
          </Heading>
        </Flex>
        <Text
          fontSize={['xs', 'xs', 'sm']}
          gridColumnStart={[1, 1, 1, 2]}
          gridColumnEnd={3}
        >{`How many ${food.measurementUnit.title} do you consume per ${food.frequencyUnit.title}?`}</Text>
        <Text fontSize={['xs', 'xs', 'sm']} gridColumnStart={[1, 1, 1, 2]} gridColumnEnd={3}>
          {food.globalDosages}
        </Text>
        <Flex alignItems="center" gap={2} gridColumnStart={[1, 1, 1, 2]} gridColumnEnd={3}>
          <Text fontSize={['xs', 'xs', 'sm']}>This food interacts with: </Text>
          {food.interactions
            .filter((interaction) =>
              selectedDietarySupplements
                .reduce((acc: string[], curr) => [...acc, curr.slug], [])
                .includes(interaction),
            )
            .map((interaction) => {
              const interactionDietarySupplement = selectedDietarySupplements.find(
                (selectedDietarySupplement) => selectedDietarySupplement.slug === interaction,
              );

              return (
                interactionDietarySupplement && (
                  <Interaction
                    key={interactionDietarySupplement.slug}
                    dietarySupplement={interactionDietarySupplement}
                  />
                )
              );
            })}
        </Flex>
      </Grid>
      <div className="flex flex-col gap-1">
        <label className="text-text-primary text-base">Select your intake frequency</label>
        <Select
          fontSize="sm"
          value={getActualValue(food.slug)}
          onChange={(event) => {
            const eventValue = event.target.value;

            handleSelectChange(food.slug, interactedDietarySupplementsSlugs, eventValue);
          }}
          className="step-three-habits"
        >
          {food.intakeFrequencies.map((intakeFrequency) => (
            <option key={intakeFrequency.slug} value={intakeFrequency.slug}>
              {intakeFrequency.title}
            </option>
          ))}
        </Select>
      </div>
    </Flex>
  );
}
