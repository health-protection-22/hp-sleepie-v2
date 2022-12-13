/* eslint-disable no-console */
import { useEffect, useState } from 'react';

import { useSnackbarContext } from '../../../../../contexts/Snackbar';
import { useCartContext } from '../../../../../contexts/Cart';
import { usePgw } from '../../../../../hooks/usePgw';

type Props = {
  elementIdStripeButton: string;
  elementIdStripe?: string;
  elementIdPaypal?: string;
  closeModal: () => void;
};

export function usePaymentModal({ elementIdStripe, elementIdPaypal, closeModal }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const { dispatchSnackbar } = useSnackbarContext();
  const { inicializeCheckout, pay, isLoadingIframe } = usePgw({
    elementIdStripe,
    elementIdPaypal,
    onError: closeModal,
  });
  const { isSubscribeMethod } = useCartContext();

  const type = isSubscribeMethod ? 'subscription' : 'payment';

  useEffect(() => {
    inicializeCheckout(type);
    window.addEventListener('message', (event) => {
      if (
        typeof event.data === 'object' &&
        event.data &&
        event.data.action &&
        event.data.action !== 'getNightEyeMode'
      ) {
        const action = event.data.action;
        if (action == 'finish-loading') {
          setIsLoading(false);
        }
      }
    });
  }, [isSubscribeMethod]);

  function handleClickStripe() {
    if (elementIdStripe) {
      setIsLoading(true);
      try {
        pay(elementIdStripe);
      } catch {
        setIsLoading(false);
        dispatchSnackbar({
          message: 'Something went wrong. Please try again later.',
          type: 'error',
        });
      }
    }
  }

  return { handleClickStripe, isLoadingIframe, isLoading };
}
