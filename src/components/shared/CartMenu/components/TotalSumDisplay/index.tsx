import React from 'react';

import { Divider } from '../../../Divider';
import { Text } from '@chakra-ui/react';
import { When } from '../../../When';
import { useCartContext } from '../../../../../contexts/Cart';

type Props = {
  withoutDivider?: boolean;
  notShow?: boolean;
};

export function TotalSumDisplay({ notShow, withoutDivider }: Props) {
  const { totalSum } = useCartContext();
  return (
    <When value={!notShow}>
      <When value={!withoutDivider}>
        <Divider marginBottomPx={0} />
      </When>
      <div className="flex justify-between w-full">
        <Text fontWeight={600} fontSize={20}>
          Total
        </Text>
        <Text fontWeight={600} fontSize={20}>
          ${totalSum.toFixed(2)}
        </Text>
      </div>
    </When>
  );
}
