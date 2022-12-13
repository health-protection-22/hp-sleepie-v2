import React, { FormEvent } from 'react';
import Image from 'next/image';

import appDemonstration from '../../../../public/images/sleepie-app-demonstration.png';
import { AppBenefitsDescriptionList } from '../AppBenefitsDescriptionList';
import scanApp from '../../../../public/images/sleepie-app-scan.png';
import { AppDownloadBanner } from '../AppDownloadBanner';
import { useCartContext } from '../../../contexts/Cart';
import RefreshIcon from '../../../assets/icon/Refresh';
import { Text3, Text4 } from '../Texts';
import { Button } from '@chakra-ui/react';
import { When } from '../When';

type Props = {
  onSubmit: () => void;
};

export function AppDescription({ onSubmit }: Props) {
  const { enableSwitchBetweenMethods, setSubscribeMethod } = useCartContext();
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    onSubmit();
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full items-center">
      <div
        className={'flex flex-col items-center xl:items-start max-w-[550px] xl:max-w-full w-full'}
      >
        <div className="flex mb-6">
          <Text3>Download APP</Text3>
        </div>
        <When value={enableSwitchBetweenMethods}>
          <div
            className={
              'flex flex-col xl:flex-row w-full  h-fit gap-8 justify-center items-center mb-8'
            }
          >
            <span className={'flex justify-center items-center min-w-fit min-h-fit'}>
              <Image
                alt={'app demonstration'}
                src={appDemonstration}
                placeholder={'blur'}
                height={390}
                width={412}
              />
            </span>
            <AppBenefitsDescriptionList />
          </div>
        </When>
        <When value={!enableSwitchBetweenMethods}>
          <div className="flex mb-6">
            <Text4 className={'text-center xl:text-left'}>
              In order to get the best results using our Nutratherapy® method let’s download the APP
              to track your Sleep and be able to scan every pack of neutraceuticals you take
            </Text4>
          </div>
        </When>
        <div className="flex flex-col w-full items-center mb-8">
          <AppDownloadBanner />
        </div>
        <When value={!enableSwitchBetweenMethods}>
          <div
            className={'flex flex-col xl:flex-row w-full gap-4 justify-center items-center mb-8'}
          >
            <Image src={scanApp} width={283} height={223} placeholder="blur" alt={'scan app'} />
            <Text4 className="w-[280px] text-center xl:text-left">
              You are able to scan every pack you open so our algorithm can let you know the best
              time to take your pills.
            </Text4>
          </div>
        </When>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 w-full">
        <When value={enableSwitchBetweenMethods}>
          <Button
            onClick={setSubscribeMethod}
            justifyContent={'center'}
            alignItems={'center'}
            colorScheme={'red'}
            h={'fit-content'}
            display={'flex'}
            lineHeight={16}
            fontSize={14}
            w={'full'}
            flex={1}
            gap={4}
            p={4}
          >
            <RefreshIcon />

            <Text4 className="text-white">Change to Subscription</Text4>
          </Button>
        </When>
        <Button
          h={'fit-content'}
          type={'submit'}
          lineHeight={16}
          fontSize={14}
          w={'full'}
          flex={1}
          p={4}
        >
          <Text4 className="text-white">Go to Checkout</Text4>
        </Button>
      </div>
    </form>
  );
}
