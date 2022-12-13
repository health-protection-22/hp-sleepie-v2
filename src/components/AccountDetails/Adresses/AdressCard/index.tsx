import React from 'react';
import PenIcon from '../../../../assets/icon/Pen';
import { TrashIcon } from '../../../../assets/icon/Trash';
import { IconButton } from '../../../shared/IconButton';

type Props = {
  title: string;
  ZIP: string;
  street: string;
  city: string;
  state: string;
};

export function AdressCard({ ZIP, city, state, street, title }: Props) {
  return (
    <div className="px-6 py-4 border border-grayScale-300 rounded-2xl w-full flex justify-between items-center">
      <div className="flex flex-col">
        <span className="text-sm font-semibold mb-1">{title}</span>
        <span className="text-sm font-light text-grayScale-400">
          {city}, {state}
        </span>
        <span className="text-sm font-light text-grayScale-400">ZIP: {ZIP}</span>
        <span className="text-sm font-light text-grayScale-400">Rua: {street}</span>
      </div>
      <div className="flex gap-4">
        <IconButton withBg icon={<PenIcon />} />
        <IconButton withBg icon={<TrashIcon />} />
      </div>
    </div>
  );
}
