import React, { useState } from 'react';

import { useCartContext } from '../../../../contexts/Cart';
import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import config from '../../../../config';
import { When } from '../../When';

export function useCartMenu(actualStep?: number) {
  const {
    enableSwitchBetweenMethods,
    setSubscribeMethod,
    setOneTimeMethod,
    isSubscribeMethod,
    isOneTimeMethod,
    setTryToConvert,
    selectedMethod,
    tryToConvert,
    subtotalSum,
    cartItems,
    totalSum,
  } = useCartContext();

  const { checkout } = config.webRoutes;
  const { push } = useRouter();
  const [isShelved, setIsShelved] = useState(true);

  function handleShelved() {
    setIsShelved((prev) => !prev);
  }

  function goToCheckout() {
    if (selectedMethod === 'oneTime') {
      setTryToConvert(true);
    } else {
      setTryToConvert(false);
    }
    push(checkout.base);
  }

  function submitToStripe() {
    const shippingForm = document.getElementById('shippingForm') as HTMLFormElement;
    shippingForm.requestSubmit();

  }

  const itemSummaryElements = cartItems.map(({ dosage, dosageUnit, price, title }) => (
    <div
      className={`flex items-center ${isOneTimeMethod ? 'justify-between' : 'justify-center'}`}
      key={1}
    >
      <Text>{`${title} ${dosage} ${dosageUnit}`}</Text>
      <When value={isOneTimeMethod}>
        <Text>{`$${price.toFixed(2)}`}</Text>
      </When>
    </div>
  ));

  return {
    enableSwitchBetweenMethods,
    itemSummaryElements,
    setSubscribeMethod,
    isSubscribeMethod,
    setOneTimeMethod,
    isOneTimeMethod,
    submitToStripe,
    handleShelved,
    goToCheckout,
    tryToConvert,
    subtotalSum,
    isShelved,
    cartItems,
    totalSum,
  };
}
