import { useEffect, useState } from 'react';

import { useGetListAddressesQuery } from '../services/user/address/hooks/useGetListAddressesQuery';
import { usePostStartCheckoutMutate } from '../services/pgw/hooks/usePostCheckoutKeyMutate';
import { PayloadStartCheckout, PostStartCheckoutData } from '../services/pgw/types';
import { useSnackbarContext } from '../contexts/Snackbar';
import { Address } from '../services/user/address/types';
import { useAuthContext } from '../contexts/Auth';
import { useCartContext } from '../contexts/Cart';
import { destroyCookie, setCookie } from 'nookies';
import config from '../config';

type Props = {
  elementIdStripe?: string;
  elementIdPaypal?: string;
  onError?: () => void;
};

export function usePgw({ elementIdStripe, elementIdPaypal, onError }: Props) {
  const paymentApiUrl = (process.env.NEXT_PUBLIC_PGW_BASE_URL as string).split('api')[0];
  const providerIdStripe = process.env.NEXT_PUBLIC_PGW_STRIPE_PROVIDER_ID as string;
  const providerIdPaypal = process.env.NEXT_PUBLIC_PGW_PAYPAL_PROVIDER_ID as string;
  const baseUrl = (process.env.NEXT_PUBLIC_PGW_BASE_URL as string).split('api')[0];
  const sleepieBaseUrl = window.location.origin as string;

  const [checkoutType, setCheckoutType] = useState<'subscription' | 'payment' | undefined>();
  const [defaultAddress, setDefaultAddress] = useState<Address>();
  const [isLoadingPay, setIsLoadingPay] = useState({
    [elementIdStripe ?? 'not-div-stripe']: elementIdStripe ? true : false,
    [elementIdPaypal ?? 'not-div-paypal']: elementIdPaypal ? true : false,
  });

  const { mutate: startCheckoutMutate } = usePostStartCheckoutMutate({ onError });
  const { data: addressesList, remove } = useGetListAddressesQuery({ enabled: true });
  const { dispatchSnackbar } = useSnackbarContext();
  const { cartItems, productsPacks, userProfile } = useCartContext();
  const { checkout } = config.webRoutes;
  const { user } = useAuthContext();

  useEffect(() => {
    if (addressesList?.items?.length) {
      const newDefaultAddress = addressesList.items.find((address) => address.is_default === 1);
      if (newDefaultAddress) {
        setDefaultAddress(newDefaultAddress);
        destroyCookie(null, 'healthProtection_defaultAddressUuid');
        setCookie(undefined, 'healthProtection_defaultAddressUuid', newDefaultAddress.uuid, {
          path: '/',
        });
      }
    }
  }, [addressesList]);

  useEffect(() => {
    if (!checkoutType) return;
    if (!defaultAddress) return;
    startCheckout();
  }, [checkoutType, defaultAddress]);

  useEffect(() => () => remove(), []);
  const isLoadingIframe =
    (elementIdStripe ? isLoadingPay[elementIdStripe] : false) ||
    (elementIdPaypal ? isLoadingPay[elementIdPaypal] : false);

  function inicializeCheckout(type: 'subscription' | 'payment') {
    setCheckoutType(type);
  }

  async function startCheckout() {
    const isSubscription = false; // checkoutType === 'subscription';
    const isPayment = true; // checkoutType === 'payment';
    const items = cartItems.map(
      (item) => `[slug: ${item.slug}, dosage: ${item.dosage} ${item.dosageUnit}]`,
    );

    function onSuccess({ checkout_key }: PostStartCheckoutData) {
      try {
        if (elementIdStripe) prepareIframe(elementIdStripe, providerIdStripe, checkout_key);
        if (elementIdPaypal) prepareIframe(elementIdPaypal, providerIdPaypal, checkout_key);
      } catch {
        dispatchSnackbar({
          message: 'Something went wrong. Please try again later.',
          type: 'error',
        });
      }
    }
    const shippingAddress = {
      shipping_full_name: defaultAddress?.first_name + ' ' + defaultAddress?.last_name,
      shipping_address_line1: defaultAddress?.address_line1,
      shipping_country_code: defaultAddress?.country_code,
      shipping_postal_code: defaultAddress?.zipcode,
      shipping_city: defaultAddress?.city,
    };
    const payload = {
      properties: { products_packs: productsPacks, user_profile: userProfile },
      description: `Sleepie | items:{${items.join(', ')}}`,
      amount: 5990, // isPayment ? totalSum * 100 : undefined,
      success_url: sleepieBaseUrl + checkout.success,
      failure_url: sleepieBaseUrl + checkout.failure,
      plan_id: isSubscription ? 1 : undefined,
      currency: isPayment ? 'usd' : undefined,
      customer_email: user?.email,
      customer_id: user?.uuid,
      type: 'payment', // checkoutType,
      ...shippingAddress,
    } as PayloadStartCheckout;

    startCheckoutMutate(payload, {
      onSuccess,
    });
  }

  function prepareIframe(elementId: string, providerId: string, checkoutKey: string) {
    const url = baseUrl + 'checkout/' + providerId + '?checkout_key=' + checkoutKey;

    const html = `<iframe src="${url}" id="pgw-iframe-${elementId}"
            		frameborder="0" allowtransparency="true" scrolling="no" allow="payment *" title="Secure payment input frame" 
            		style="border: none !important; margin: -4px; padding: 0px !important; width: calc(100% + 8px); min-width: 100% !important; 
            		overflow: hidden !important; display: block !important; user-select: none !important; transform: translate(0px) !important; 
            		color-scheme: light only !important; height: 550px; opacity: 1; transition: height 0.35s ease 0s, opacity 0.4s ease 0.1s;" />`;

    const element = document.getElementById(elementId);
    if (!element) {
      throw 'The container element with id ' + elementId + ' was not found!';
    }

    element.innerHTML = html;
    element.childNodes[0].addEventListener('load', () => {
      setIsLoadingPay((prev) => ({ ...prev, [elementId]: false }));
    });
  }

  function pay(elementIdStripe: string) {
    const frame = document.getElementById('pgw-iframe-' + elementIdStripe) as HTMLIFrameElement;
    frame.contentWindow?.postMessage({ action: 'submit' }, paymentApiUrl);
  }

  return { inicializeCheckout, prepareIframe, pay, isLoadingIframe, isLoadingPay };
}
