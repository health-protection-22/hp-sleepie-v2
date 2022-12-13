import React from 'react';

import { BenefitDescriptions } from './components/BenefitDescriptions';
import { SummaryDropdown } from './components/SummaryDropdown';
import { red } from '../../../styles/Theme/colors';
import { useCartMenu } from './hooks/useCartMenu';
import { TotalSumDisplay } from './components/TotalSumDisplay';
import { Button, Text } from '@chakra-ui/react';
import { InputRadio } from '../InputRadio';
import { When } from '../When';
import StripeLogo from '../../../assets/icon/Stripe';
import PayPalLogo from '../../../assets/icon/PayPal';
import GooglePayLogo from '../../../../public/images/GooglePayLogo.png';
import Image from 'next/image';
import { browserName } from 'react-device-detect';

type Props = {
  actualStep?: number;
};

export function CartMenu({ actualStep }: Props) {
  const DISABLE_TEMPORARY = false;
  const {
    enableSwitchBetweenMethods,
    setSubscribeMethod,
    isSubscribeMethod,
    setOneTimeMethod,
    isOneTimeMethod,
    submitToStripe,
    goToCheckout,
    tryToConvert,
    subtotalSum,
  } = useCartMenu(actualStep);
  return (
    <div className="flex flex-col pb-8 items-center w-[407px] rounded-b-lg bg-backgroundCart-primary">
      <When value={DISABLE_TEMPORARY}>
        <When value={enableSwitchBetweenMethods}>
          <div
            className={`flex flex-col items-start justify-center w-full p-8 rounded-t-lg transform  duration-200 origin-top-center transition-all ease-linear
        ${isOneTimeMethod ? '' : 'bg-backgroundCart-secondary'}
        
        `}
          >
            <div>
              <InputRadio
                name={'buyMethod'}
                checked={isOneTimeMethod}
                onClick={setOneTimeMethod}
                sizePx={34}
              >
                <Text fontWeight={600} color={isOneTimeMethod ? red[500] : 'gray.600'}>
                  One-time purchase:
                </Text>
              </InputRadio>
            </div>
            <div className={`flex flex-col justify-center items-start pl-[50px] w-full`}>
              <div className="flex gap-2 mt-2 ">
                <span>
                  <Text fontWeight={600}>${subtotalSum.toFixed(2)}</Text>
                </span>
                <span>
                  <Text fontWeight={300}>{`($${(subtotalSum / 30).toFixed(2)}/day)`}</Text>
                </span>
              </div>

              <div
                className={`flex flex-col gap-4 items-start transform  overflow-hidden transition-all origin-top-center  ease-linear duration-200 w-full  
                ${isOneTimeMethod ? 'scale-y-100 max-h-screen ' : 'scale-y-0 max-h-0'} `}
              >
                <Text mt={'4px'} mb={2} fontWeight={300}>
                  Your purchase serves for 30 day
                </Text>

                <SummaryDropdown />
                <BenefitDescriptions />
                <TotalSumDisplay />
              </div>
            </div>
          </div>
        </When>
        <div
          className={`flex flex-col items-start justify-center w-full p-8  transform  duration-200 origin-top-center  transition-all ease-linear
        ${isSubscribeMethod ? '' : 'bg-backgroundCart-secondary'}
        
        `}
        >
          <When value={enableSwitchBetweenMethods}>
            <div>
              <InputRadio
                name={'buyMethod'}
                checked={isSubscribeMethod}
                onClick={setSubscribeMethod}
                sizePx={34}
              >
                <Text fontWeight={600} color={isSubscribeMethod ? red[500] : 'gray.600'}>
                  Subscribe:
                </Text>
              </InputRadio>
            </div>
          </When>
          <When value={tryToConvert === false}>
            <div>
              <Text mb={8} fontSize={20} fontWeight={600}>
                Your Cart
              </Text>
            </div>
            <div>
              <Text mb={3} fontWeight={600}>
                Your Subscribe plan
              </Text>
            </div>
            <div className="flex justify-center items-center w-full mb-8 p-4 rounded-lg border border-red-500">
              <Text color={'red.500'} fontWeight={600}>
                Subscribe
              </Text>
            </div>
          </When>

          <div
            className={`flex flex-col justify-center items-start w-full ${
              enableSwitchBetweenMethods ? 'pl-[50px]' : ''
            }`}
          >
            <When value={enableSwitchBetweenMethods}>
              <When value={isSubscribeMethod}>
                <Text mt={'5px'} fontWeight={300}>
                  * Cancel anytime
                </Text>
              </When>
              <div className="flex gap-2 mt-2 'mb-6' ">
                <span>
                  <Text fontWeight={600}>$59.90</Text>
                </span>
                <span>
                  <Text fontWeight={300}>{`($${(59.9 / 30).toFixed(2)}/day)`}</Text>
                </span>
              </div>
            </When>
            <div
              className={`flex flex-col gap-4 items-start transform transition-all origin-top-center  ease-linear duration-200 w-full  
                ${isSubscribeMethod ? 'scale-y-100 max-h-screen ' : 'scale-y-0 max-h-0'} `}
            >
              <SummaryDropdown />
              <BenefitDescriptions />
              <TotalSumDisplay notShow={enableSwitchBetweenMethods} />
              <When value={!enableSwitchBetweenMethods}>
                <div className="flex flex-col justify-center items-center w-full mt-4">
                  <Text fontWeight={400} fontSize={14} lineHeight={4}>
                    Just $1.97 / day
                  </Text>
                  <Text fontWeight={400} fontSize={14} lineHeight={4}>
                    your purchase serves for 30 days
                  </Text>
                </div>
              </When>
            </div>
          </div>
        </div>
      </When>
      <When value={!DISABLE_TEMPORARY}>
        <div className="flex flex-col gap-4">
          <Text textAlign={'center'} mb={4} mt={8} fontSize={20} fontWeight={600}>
            Your order
          </Text>
          <SummaryDropdown />
          <BenefitDescriptions />
          <TotalSumDisplay />
          <When value={!enableSwitchBetweenMethods}>
            <div className="flex flex-col justify-center items-center w-full mt-4">
              <Text fontWeight={400} fontSize={14} lineHeight={4}>
                Just $1.97 / day
              </Text>
              <Text fontWeight={400} fontSize={14} lineHeight={4}>
                your purchase serves for 30 days
              </Text>
            </div>
          </When>
        </div>
      </When>
      <When value={typeof tryToConvert === 'undefined'}>
        <div className="px-8 w-full mt-8">
          <Button
            onClick={goToCheckout}
            bgColor={'buttonColor'}
            width={'full'}
            type="button"
            className="begin-checkout"
          >
            Go to Checkout
          </Button>
        </div>
        <div className="flex w-full justify-center gap-3 mt-8">
          <StripeLogo height="29" width="67" />
          <PayPalLogo height="29" width="115" />
          <When value={!browserName.includes('safari')}>
            <div className="ml-[-15px]">
              <Image src={GooglePayLogo} width={67.425} height={29} alt="Google pay logo" />
            </div>
          </When>
        </div>
      </When>
      <When value={actualStep === 2}>
        <div className="px-8 w-full mt-8 flex flex-col items-center gap-4">
          <Button
            onClick={submitToStripe}
            bgColor={'buttonColor'}
            width={'full'}
            type="button"
            className="purchase"
          >
            Pay Now {'\u00A0'}
          </Button>
          <div className="flex items-center gap-3">
            <StripeLogo height="29" width="67" />
            <PayPalLogo height="29" width="115" />
            <When value={!browserName.includes('safari')}>
              <div className="mt-[9px] ml-[-15px]">
                <Image src={GooglePayLogo} width={67.425} height={29} alt="Google pay logo" />
              </div>
            </When>
          </div>
        </div>
      </When>
    </div>
  );
}
