import React from 'react';

import { SubscribeDescriptionMobile } from './components/SubscribeDescriptionMobile';
import { BenefitDescriptions } from '../components/BenefitDescriptions';
import { SummaryDropdown } from '../components/SummaryDropdown';
import { red } from '../../../../styles/Theme/colors';
import { useCartMenu } from '../hooks/useCartMenu';
import { TotalSumDisplay } from '../components/TotalSumDisplay';
import { Button, Text } from '@chakra-ui/react';
import { InputRadio } from '../../InputRadio';
import { When } from '../../When';
import StripeLogo from '../../../../assets/icon/Stripe';
import PayPalLogo from '../../../../assets/icon/PayPal';
import GooglePayLogo from '../../../../../public/images/GooglePayLogo.png';
import Image from 'next/image';
import { browserName } from 'react-device-detect';

type Props = {
  actualStep?: number;
};

export function CartMenuDrawer({ actualStep }: Props) {
  const DISABLE_TEMPORARY = false;
  const {
    enableSwitchBetweenMethods,
    isSubscribeMethod,
    setOneTimeMethod,
    isOneTimeMethod,
    handleShelved,
    tryToConvert,
    goToCheckout,
    isShelved,
    submitToStripe,
    subtotalSum,
  } = useCartMenu(actualStep);
  return (
    <div className="fixed bottom-0  flex flex-col items-center w-screen h-fit z-[11]   transform  duration-200 origin-bottom-center  transition-height ease-linear bg-backgroundCart-primary pt-3 pb-3 shadow-black shadow-2xl">
      <button
        className="flex flex-col uppercase  items-center justify-center  mx-auto mb-1"
        onClick={handleShelved}
      >
        <span className="w-[150px] h-2 bg-drawerButton rounded-full" />
        <Text fontSize={10}> {isShelved ? 'Click to find out more' : 'Click to hide'} </Text>
      </button>

      <When value={DISABLE_TEMPORARY}>
        <When value={enableSwitchBetweenMethods}>
          <div
            className={`flex flex-col items-start justify-center w-full transform   duration-200  origin-top-center  transition-all ease-linear
        ${isOneTimeMethod ? 'bg-backgroundCart-primary' : 'bg-backgroundCart-secondary'} 
        ${isShelved && !isOneTimeMethod ? 'scale-y-0 max-h-0 ' : 'scale-y-100 max-h-screen'} 
        ${isShelved ? 'p-0 justify-center items-center' : 'px-8 pb-2'}  
        
        `}
          >
            <div className="flex flex-col w-full max-w-[600px] mx-auto">
              <div
                className={`flex relative ${
                  isShelved ? 'justify-center' : 'pl-[50px] justify-between'
                }`}
              >
                <div>
                  <When value={!isShelved}>
                    <div className="relative right-12">
                      <InputRadio
                        name={'buyMethod'}
                        checked={isOneTimeMethod}
                        onClick={setOneTimeMethod}
                        sizePx={34}
                      >
                        <Text fontWeight={600} color={isOneTimeMethod ? red[500] : 'gray.600'}>
                          One-time Purchase:
                        </Text>
                      </InputRadio>
                    </div>
                  </When>

                  <When value={isShelved}>
                    <Text fontWeight={600} color={isOneTimeMethod ? red[500] : 'gray.600'}>
                      One-time Purchase
                    </Text>
                  </When>
                </div>
                <div className={`pl-[50px] flex flex-col gap-2 justify-between items-end`}>
                  <span>
                    <Text fontWeight={600}>${subtotalSum.toFixed(2)}</Text>
                  </span>
                  <span>
                    <Text fontWeight={300}>{`($${(subtotalSum / 30).toFixed(2)}/day)`}</Text>
                  </span>
                </div>
              </div>
              <div className={`flex flex-col justify-center items-start pl-[50px] w-full`}>
                <div
                  className={`flex flex-col gap-4 items-start transform transition-all origin-top-center  ease-linear duration-200 w-full  
            ${!isOneTimeMethod || isShelved ? 'scale-y-0 max-h-0' : 'scale-y-100 max-h-screen '} `}
                >
                  <Text mt={'4px'} mb={2} fontWeight={300}>
                    Your purchase serves for 30 day
                  </Text>
                  <SummaryDropdown />
                  <BenefitDescriptions />
                  <TotalSumDisplay notShow={true} />
                </div>
              </div>
            </div>
          </div>
        </When>
      </When>
      <div
        className={`flex flex-col items-start justify-center w-full transform  duration-200 origin-top-center  transition-all ease-linear
        ${isSubscribeMethod ? 'bg-backgroundCart-primary' : 'bg-backgroundCart-secondary'} 
        ${isShelved && !isSubscribeMethod ? 'scale-y-0 max-h-0' : 'scale-y-100 max-h-screen'} 
        ${isShelved ? 'p-0 justify-center items-center' : 'px-8 pb-2'}  
        
        `}
      >
        <div className="flex flex-col w-full max-w-[600px] mx-auto">
          <SubscribeDescriptionMobile isShelved={isShelved} />
          <div
            className={`flex flex-col justify-center items-start w-full ${
              enableSwitchBetweenMethods ? 'pl-[50px]' : ''
            }`}
          >
            <div
              className={`flex flex-col gap-4 items-start transform transition-all origin-top-center  ease-linear duration-200 w-full  
                ${
                  !isSubscribeMethod || isShelved
                    ? 'scale-y-0 max-h-0'
                    : 'scale-y-100 max-h-screen '
                } 
                `}
            >
              <SummaryDropdown />
              <BenefitDescriptions />
              <TotalSumDisplay notShow={enableSwitchBetweenMethods} />
              <When value={!enableSwitchBetweenMethods && isSubscribeMethod}>
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
      </div>

      <When value={typeof tryToConvert === 'undefined'}>
        <div className="px-8 w-full mt-1 max-w-[600px]">
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
        <div className="flex w-full justify-center gap-3 mt-2">
          <StripeLogo height="14" width="33" />
          <PayPalLogo height="14" width="57" />
          <When value={!browserName.includes('safari')}>
            <div className="mt-[-3px] ml-[-7px]">
              <Image src={GooglePayLogo} height={14} width={32.55} alt="Google pay logo" />
            </div>
          </When>
        </div>
      </When>
      <When value={actualStep === 2}>
        <div className="px-8 w-full mt-2 flex flex-col items-center gap-4">
          <Button
            onClick={submitToStripe}
            bgColor={'buttonColor'}
            width={'full'}
            type="button"
            className="purchase"
          >
            Pay Now
          </Button>
          <div className="flex items-center gap-3">
            <StripeLogo height="14" width="33" />
            <PayPalLogo height="14" width="57" />
            <When value={!browserName.includes('safari')}>
              <div className="mt-[5px] ml-[-7px]">
                <Image src={GooglePayLogo} height={14} width={32.55} alt="Google pay logo" />
              </div>
            </When>
          </div>
        </div>
      </When>
    </div>
  );
}
