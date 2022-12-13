import React from 'react';

import { red } from '../../../../../../styles/Theme/colors';
import { useCartMenu } from '../../../hooks/useCartMenu';
import { InputRadio } from '../../../../InputRadio';
import { Text } from '@chakra-ui/react';
import { When } from '../../../../When';

type Props = {
  isShelved: boolean;
};
export function SubscribeDescriptionMobile({ isShelved }: Props) {
  const DISABLE_TEMPORARY = false;
  const { isSubscribeMethod, setSubscribeMethod } = useCartMenu();
  return (
    <>
      <When value={DISABLE_TEMPORARY}>
        {/* <When value={enableSwitchBetweenMethods}> */}
        <div
          className={`flex relative ${
            isShelved ? 'justify-center' : 'justify-between pl-[50px] mb-6'
          }`}
        >
          <div>
            <When value={!isShelved}>
              <div className="relative right-12">
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

            <When value={isShelved}>
              <Text fontWeight={600} color={isSubscribeMethod ? red[500] : 'gray.600'}>
                Subscribe
              </Text>
            </When>
            <Text textAlign={'start'} mt={'5px'} fontWeight={300}>
              * Cancel anytime
            </Text>
          </div>
          <div className={`pl-[50px] flex flex-col gap-2 justify-between items-end`}>
            <span>
              <Text fontWeight={600}>$59.90</Text>
            </span>
            <span>
              <Text fontWeight={300}>{`($${(59.9 / 30).toFixed(2)}/day)`}</Text>
            </span>
          </div>
        </div>
      </When>
      <When value={!DISABLE_TEMPORARY}>
        {/* <When value={!enableSwitchBetweenMethods}> */}
        <div className={`flex relative ${isShelved ? 'justify-center' : 'justify-between w-full'}`}>
          <div className={`flex flex-col  ${isShelved ? 'w-fit' : 'w-full'}`}>
            <When value={DISABLE_TEMPORARY}>
              <When value={!isShelved}>
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
            </When>
            <When value={!DISABLE_TEMPORARY}>
              <When value={!isShelved}>
                <div>
                  <Text textAlign={'center'} mb={4} fontSize={20} fontWeight={600}>
                    Your order
                  </Text>
                </div>
              </When>
            </When>
            <When value={DISABLE_TEMPORARY}>
              <When value={isShelved}>
                <Text fontWeight={600} color={isSubscribeMethod ? red[500] : 'gray.600'}>
                  Subscribe
                </Text>
                <Text textAlign={'start'} fontWeight={300}>
                  * Cancel anytime
                </Text>
              </When>
            </When>
            <When value={!DISABLE_TEMPORARY}>
              <When value={isShelved}>
                <Text fontWeight={600} color={isSubscribeMethod ? red[500] : 'gray.600'}>
                  Total:
                </Text>
                <Text textAlign={'start'} fontWeight={300}>
                  {''}
                </Text>
              </When>
            </When>
          </div>
          <When value={isShelved}>
            <div className={`pl-[50px] flex flex-col justify-between items-end`}>
              <span>
                <Text fontWeight={600}>$59.90</Text>
              </span>
              <span>
                <Text fontWeight={300}>{`($${(59.9 / 30).toFixed(2)}/day)`}</Text>
              </span>
            </div>
          </When>
        </div>
      </When>
    </>
  );
}
