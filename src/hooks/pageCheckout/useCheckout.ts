import { useBreakpointValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../contexts/Auth';
import { useCartContext } from '../../contexts/Cart';

export function useCheckout() {
  // const [withDecode, setWithDecode] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [actualStep, setActualStep] = useState(1);
  const { setTotalSum, subtotalSum, isSubscribeMethod, isOneTimeMethod, selectedMethod } =
    useCartContext();

  const { isAuthenticated, authenticationIsLoading } = useAuthContext();
  const title = 'Sleepie - We offer a safe and optimized natural supplements';
  const description =
    'Your problems sleeping can be a thing of the past. Meet Sleepie. We offer an Safe and Optimized Natural Supplements.';
  const isWideVersion = useBreakpointValue(
    {
      base: false,
      lg: false,
      xl: true,
    },
    { fallback: 'xl' },
  );

  useEffect(() => {
    if (actualStep === 1 && isAuthenticated) {
      setActualStep(2);
    }
    if (actualStep >= 1 && !isAuthenticated) {
      setActualStep(1);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const premiumAccessValue = isOneTimeMethod && actualStep >= 3 ? 20 : 0;
    const dnaDecodeValue = isOneTimeMethod && actualStep >= 2 ? 160 : 0;
    const shippingValue = isOneTimeMethod ? 6 : 0;

    const newTotalSum = isSubscribeMethod
      ? 59.9
      : subtotalSum + premiumAccessValue + dnaDecodeValue + shippingValue;

    setTotalSum(newTotalSum);
  }, [actualStep, subtotalSum, selectedMethod]);

  function nextStep() {
    setActualStep(actualStep + 1);
  }
  function handleOpenLogin() {
    setShowLogin(true);
  }

  function handleCloseLogin() {
    setShowLogin(false);
  }

  return {
    authenticationIsLoading,
    handleCloseLogin,
    isAuthenticated,
    handleOpenLogin,
    isWideVersion,
    description,
    actualStep,
    showLogin,
    nextStep,
    title,
  };
}
