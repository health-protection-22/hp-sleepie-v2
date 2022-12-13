import React from 'react';

import { useCartContext } from '../../../../../contexts/Cart';
import { red } from '../../../../../styles/Theme/colors';
import { Text } from '@chakra-ui/react';
import { When } from '../../../When';
import DHLlogo from '../../../../../../public/images/dhl.png';
import Image from 'next/image';

type Props = {
  step?: string;
};
export function BenefitDescriptions({ step }: Props) {
  const { tryToConvert, selectedMethod } = useCartContext();
  return (
    <>
      <When value={typeof tryToConvert === 'undefined' || tryToConvert === true}>
        <When value={selectedMethod === 'subscribe'}>
          <div className="flex gap-2 items-center justify-center">
            <Text>Free Shipping</Text>
            <Image src={DHLlogo} width={83} height={16} alt="DHL logo" />
          </div>
        </When>
        <When value={selectedMethod === 'oneTime'}>
          <div className="flex justify-between w-full">
            <Text>Shipping</Text>
            <Text>$6.00</Text>
          </div>
          <div className="flex justify-between w-full">
            <Text color={red[500]}>No Free DNA Decoding</Text>
            <Text color={red[500]}>$160.00</Text>
          </div>
          <div className="flex justify-between w-full">
            <Text color={red[500]}>No Premium App Access</Text>
            <Text color={red[500]}>$20.00/mo</Text>
          </div>
        </When>
      </When>
      <When value={tryToConvert === false}>
        {/* <div className="flex justify-between w-full">
          <Text color={red[500]}>Free DNA Decoding</Text>
          <Text textDecoration={'line-through'} color={red[500]}>
            $160.00
          </Text>
        </div> */}
        <div className="flex justify-between w-full">
          <Text>Shipping</Text>
          <Text textDecoration={'line-through'}>$6.00</Text>
        </div>
      </When>
    </>
  );
}
