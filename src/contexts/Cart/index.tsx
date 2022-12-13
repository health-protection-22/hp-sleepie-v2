import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ProductsPacks } from '../../services/nutratherapy/okCapsule/types';

import {  Product } from '../../services/nutratherapy/types';
import { BuyMethods, CartContextData, UserProfile } from './types';

type CartProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [productsPacks, setProductsPacks] = useState<ProductsPacks>({});
  const [selectedMethod, setSelectedMethod] = useState<BuyMethods>('subscribe');
  const [tryToConvert, setTryToConvert] = useState<boolean | undefined>();
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [userProfile, setUserProfile] = useState<UserProfile>({});
  const [subtotalSum, setSubtotalSum] = useState(0);
  const [totalSum, setTotalSum] = useState(0);
  const enableSwitchBetweenMethods = tryToConvert === true || typeof tryToConvert === 'undefined';
  const isSubscribeMethod = selectedMethod === 'subscribe';
  const isOneTimeMethod = selectedMethod === 'oneTime';

  useEffect(() => {
    const newSubtotalSum = cartItems.reduce((acc, cartItem) => acc + cartItem.price, 0);
    setSubtotalSum(newSubtotalSum);
  }, [cartItems]);

  useEffect(() => {
    const shippingValue = isOneTimeMethod ? 6 : 0;
    const newTotalSum = isSubscribeMethod ? 59.9 : subtotalSum + shippingValue;
    setTotalSum(newTotalSum);
  }, [subtotalSum, selectedMethod]);

  function setOneTimeMethod() {
    setSelectedMethod('oneTime');
  }
  function setSubscribeMethod() {
    setSelectedMethod('subscribe');
  }

  function removeCartItem(indexSelected: number) {
    const selectedSlug = cartItems[indexSelected].slug;
    const newProductsPacks = { ...productsPacks };
    delete newProductsPacks[selectedSlug];
    const newCartItem = cartItems.filter((_, index) => {
      return indexSelected !== index;
    });
    setProductsPacks(newProductsPacks);
    setCartItems(newCartItem);
  }

  return (
    <CartContext.Provider
      value={{
        isCartItemsSetted: !!cartItems.length,
        enableSwitchBetweenMethods,
        setSubscribeMethod,
        isSubscribeMethod,
        setOneTimeMethod,
        setProductsPacks,
        isOneTimeMethod,
        setTryToConvert,
        selectedMethod,
        removeCartItem,
        setSubtotalSum,
        setUserProfile,
        productsPacks,
        tryToConvert,
        setCartItems,
        subtotalSum,
        setTotalSum,
        userProfile,
        cartItems,
        totalSum,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
