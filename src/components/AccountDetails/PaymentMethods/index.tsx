import React from 'react';
import PlusIcon from '../../../assets/icon/Plus';
import { IconButton } from '../../shared/IconButton';
import { Text3 } from '../../shared/Texts';
import { PaymentCard } from './PaymentCard';

export function PaymentMethods() {
  return (
    <div className="w-full flex flex-col gap-4">
      <Text3 className="text-xl font-semibold">My Payment Method</Text3>
      <PaymentCard cardNumber="1234 ••• ••• ••• 4679" expireDate="09/24" title="Master Card" />
      <PaymentCard cardNumber="1234 ••• ••• ••• 4679" expireDate="09/24" title="Master Card" />
      <div className="px-6 py-4 border border-dashed border-grayScale-300 rounded-2xl w-full flex justify-between items-center opacity-70">
        <span className="text-sm font-semibold mb-1">Add Payment Method</span>
        <IconButton className="bg-transparent" icon={<PlusIcon />} />
      </div>
    </div>
  );
}
