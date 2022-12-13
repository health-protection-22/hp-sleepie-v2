import React from 'react';
import { Box, Flex, SimpleGrid, Spinner } from '@chakra-ui/react';

import { useNutratherapy } from '../../../../contexts/Nutratherapy';
import { useHabitsContext } from '../../../../contexts/Habits';

import { When } from '../../../shared/When';

import { StepIntro } from '../StepIntro';
import { Food } from './components/Food';
import { Message } from './components/Message';

import { useHabits } from './hooks/useHabits';
import { IndicationArrow } from '../../../shared/IndicationArrow';

export function Habits() {
  const context = useNutratherapy();
  const { isLoading, selectedDietarySupplements } = context;

  const habitsContext = useHabitsContext();
  const { foods } = habitsContext;

  const {
    foodlessDietarySupplements,
    foodlessMessage,
    reducedDietarySupplements,
    reducedMessage,
    removedDietarySupplements,
    removedMessage,
  } = useHabits();

  return (
    <Box id="habits">
      <StepIntro
        title="Inform your eating habits."
        subtitle="Through your average consumption, we can adjust your supplement dosage."
        tooltip="Add your frequency of consumption of foods that relate to your supplements. Then our algorithm will match the dosages to your needs based on your diet."
        icon="/images/icon-habits.png"
        color="brand.habits"
        isActive={!!selectedDietarySupplements.length}
      />
      <Box w="100%" maxWidth={1200} mx="auto" justifyContent={'space-around'} textAlign="center">
        <When value={isLoading}>
          <Spinner
            color="brand.habits"
            emptyColor="gray.200"
            size="xl"
            thickness="4px"
            speed="0.75s"
            my={8}
          />
        </When>
        <When value={!isLoading}>
          <When value={!!foods.length}>
            <SimpleGrid columns={[1, 1, 2]} gap={12} mt={8} textAlign="left">
              {foods.map((food) => (
                <Food key={food.slug} food={food} />
              ))}
            </SimpleGrid>
            <Flex direction="column" gap={4} my={8} alignItems="center">
              <When value={!!reducedDietarySupplements.length}>
                <Message query={reducedMessage.query} text={reducedMessage.text} color="orange" />
              </When>
              <When value={!!removedDietarySupplements.length}>
                <Message query={removedMessage.query} text={removedMessage.text} color="red" />
              </When>
            </Flex>
          </When>
          <When value={!!foodlessDietarySupplements.length}>
            <Message
              query={foodlessMessage.query}
              text={foodlessMessage.text}
              color="brand.habits"
            />
          </When>
        </When>
      </Box>
      <div className="w-full flex justify-center mt-[62px]">
        <IndicationArrow text="Go to Checkout" url="/#cart" />
      </div>
    </Box>
  );
}
