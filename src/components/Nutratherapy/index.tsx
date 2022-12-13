import React, { useEffect } from 'react';
import { Flex } from '@chakra-ui/react';

import { NutratherapyProvider } from '../../contexts/Nutratherapy';

import { Sankey } from './components/Sankey';
import { Filters } from './components/Filters';
import { Habits } from './components/Habits';
import { Cart } from './components/Cart';

import { useCartContext } from '../../contexts/Cart';
import { useGetCombinations } from '../../services/nutratherapy/hooks/useGetCombinations';

export function Nutratherapy() {
  const { data } = useGetCombinations({});

  const { setSubscribeMethod, setTryToConvert } = useCartContext();

  useEffect(() => {
    setSubscribeMethod();
    setTryToConvert(undefined);
  }, []);

  if (!data) return <></>;

  return (
    <NutratherapyProvider defaultCombinations={data.combinations}>
      <Flex
        id="nutratherapy"
        mx="auto"
        maxW={1440}
        direction="column"
        gap="20"
        padding={[6, 6, '60px']}
      >
        <Sankey />
        <Filters />
        <Habits />
        <Cart />
      </Flex>
    </NutratherapyProvider>
  );
}
