import React from 'react';

import { Box, Flex, Spinner, useBreakpointValue } from '@chakra-ui/react';

import { useNutratherapy } from '../../../../contexts/Nutratherapy';

import { StepIntro } from '../StepIntro';

import { CartItem } from '../../../shared/CartItem';
import { CartMenu } from '../../../shared/CartMenu';
import { CartMenuDrawer } from '../../../shared/CartMenu/CartMenuDrawer';
import { When } from '../../../shared/When';
import { useCartContext } from '../../../../contexts/Cart';

export function Cart() {
  const { isLoading, selectedDietarySupplements } = useNutratherapy();
  const { cartItems } = useCartContext();

  const isWideVersion = useBreakpointValue(
    {
      base: false,
      lg: false,
      xl: true,
    },
    { fallback: 'xl' },
  );

  return (
    <Box id="cart">
      <StepIntro
        title="Buy your personalized supplements."
        subtitle="You will receive your box of 30 packets in up to 5 days."
        tooltip="The products presented have been filtered and customized according to your answers in the previous steps, added to thousands of scientific studies. Choose which ones you want to buy and click 'Go to cart' to complete your purchase."
        icon="/images/icon-cart.png"
        color="brand.cart"
        isActive={!!selectedDietarySupplements.length}
      />
      <Box w="100%" textAlign="center">
        {isLoading ? (
          <Spinner
            color="brand.cart"
            emptyColor="gray.200"
            size="xl"
            thickness="4px"
            speed="0.75s"
            my={8}
          />
        ) : (
          <Flex direction={['column', 'column', 'column', 'column', 'row']} mt={8} gap={7}>
            <When value={cartItems.length}>
              <div className="flex flex-1 flex-col gap-6">
                {cartItems.map(({ dosage, dosageUnit, imgUrl, title }, index) => (
                  <CartItem
                    dosageUnit={dosageUnit}
                    dosage={dosage}
                    imgUrl={imgUrl}
                    index={index}
                    title={title}
                    key={index}
                  />
                ))}
              </div>
            </When>
            <Flex
              direction="column"
              gap={8}
              alignItems={'center'}
              maxW={['none', 'none', 'none', 'none', '600px']}
            >
              <When value={cartItems.length}>
                <When value={isWideVersion}>
                  <CartMenu />
                </When>
                <When value={!isWideVersion}>
                  <CartMenuDrawer />
                </When>
              </When>
            </Flex>
          </Flex>
        )}
      </Box>
    </Box>
  );
}
