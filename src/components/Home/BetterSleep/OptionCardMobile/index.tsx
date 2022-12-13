import React from 'react';
import ShortArrowTopIcon from '../../../../assets/icon/ShortArrowTop';
import colors from '../../../../styles/Theme/colors';
import { When } from '../../../shared/When';
import useBetterSleep from '../hooks/useBetterSleep';

type Props = {
  label: string;
  isActive?: boolean;
  handleActiveButton: (value: string) => void;
};

export function OptionCardMobile({ label, isActive, handleActiveButton }: Props) {
  const { getOptionContent } = useBetterSleep();

  return (
    <div className="w-full flex flex-col items-center rounded-3xl">
      <button
        onClick={isActive ? () => handleActiveButton('') : () => handleActiveButton(label)}
        type="button"
        className={`w-full flex justify-between items-center px-8 py-4 rounded-t-3xl ${
          isActive
            ? `bg-brand-secondary`
            : `bg-transparent border border-text-primary rounded-b-3xl`
        }`}
      >
        <h3
          className={`text-base leading-6 font-medium ${
            isActive ? `text-white-full` : `text-text-primary`
          }`}
        >
          {label}
        </h3>
        <div className={`${isActive ? `rotate-0` : `rotate-180`} duration-200`}>
          <ShortArrowTopIcon fill={isActive ? colors.white.full : colors.text.primary} />
        </div>
      </button>
      <When value={isActive}>
        <div
          className={`w-full bg-grayScale-250 rounded-b-3xl ${
            isActive ? `animate-heightModalAnimation` : `h-0`
          } duration-200`}
        >
          {getOptionContent(label)}
        </div>
      </When>
    </div>
  );
}
