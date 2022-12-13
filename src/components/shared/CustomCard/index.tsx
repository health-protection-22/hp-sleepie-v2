import React from 'react';
import { When } from '../When';

type Props = {
  classname?: string;
  icon?: JSX.Element;
  title: string;
  value: string | number | boolean;
  buttonLabel?: string;
  onClickButton?: () => void;
};

export function CustomCard({ classname, icon, title, value, buttonLabel, onClickButton }: Props) {
  return (
    <div
      className={`w-full py-8 rounded-2xl flex flex-col gap-1 justify-center items-center p-3 max-h-[180px] ${
        classname ? classname : ''
      }`}
    >
      <When value={icon}>
        <span>{icon}</span>
      </When>
      <span className="text-sm text-white-full font-light">{title}</span>
      <span className="text-xl font-semibold text-white-full">{value}</span>
      <When value={buttonLabel}>
        <button className="bg-white-200 px-3 py-2 rounded-2xl flex items-center justify-center min-w-fit">
          <span className="text-xs font-light text-white-full opacity-100">{buttonLabel}</span>
        </button>
      </When>
    </div>
  );
}
