import React from 'react';
import LongArrowRightIcon from '../../../../assets/icon/LongArrowRight';
import { When } from '../../../shared/When';

type Props = {
  isActive?: boolean;
  label: string;
  handleActiveButton: (value: string) => void;
};

export function OptionCard({ isActive, label, handleActiveButton }: Props) {
  return (
    <button
      type="button"
      className={`flex items-center rounded-3xl py-4 px-6 hover:opacity-70 duration-200 ${
        isActive
          ? `justify-between bg-brand-secondary max-w-[430px] text-white-full`
          : `justify-start border border-text-primary max-w-[365px] hover:border-brand-secondary text-text-primary hover:text-brand-secondary`
      }`}
      onClick={() => {
        handleActiveButton(label);
      }}
    >
      <h3 className={`text-xl font-medium`}>{label}</h3>
      <When value={isActive}>
        <LongArrowRightIcon />
      </When>
    </button>
  );
}
