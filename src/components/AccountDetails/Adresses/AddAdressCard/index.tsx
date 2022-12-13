import React from 'react';
import PlusIcon from '../../../../assets/icon/Plus';
import { IconButton } from '../../../shared/IconButton';

export function AddAdressCard() {
  return (
    <div className="px-6 py-4 border border-dashed border-grayScale-300 rounded-2xl w-full flex justify-between items-center opacity-70">
      <div className="flex flex-col">
        <span className="text-sm font-semibold mb-1">Add Shipping Adderss</span>
        <span className="text-sm font-light text-grayScale-400 max-w-[250px]">
          You can add several addresses and take care not only of yourself, but also of your loved
          ones.
        </span>
      </div>
      <IconButton className="bg-transparent" icon={<PlusIcon />} />
    </div>
  );
}
