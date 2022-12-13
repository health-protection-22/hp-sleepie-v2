import React from 'react';
import { When } from '../../shared/When';
import { ActiveVector } from './ActiveVector';

type Props = {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
};

export function PeriodButton({ label, isActive, onClick }: Props) {
  return (
    <div className="flex flex-col items-center flex-1">
      <button
        className={`w-full py-4 flex-1 rounded-[20px] mb-[-1px] max-h-14 flex justify-center items-center ${
          isActive
            ? `bg-brand-primary border border-brand-primary`
            : `bg-transparent border border-gray-500 opacity-60`
        }`}
        onClick={onClick}
      >
        <span className={`${isActive ? 'text-white-full' : 'text-gray-500'}`}>{label}</span>
      </button>
      <When value={isActive}>
        <ActiveVector />
      </When>
    </div>
  );
}
