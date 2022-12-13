import React, { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: JSX.Element;
  className?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  isDisabled?: boolean;
  onClick?: (ev?: React.MouseEvent<HTMLElement>) => void;
  withBg?: boolean;
};

export function IconButton({ icon, className, type, isDisabled, onClick, withBg, ...rest }: Props) {
  return (
    <button
      {...rest}
      type={type}
      disabled={isDisabled}
      className={`p-[10px] rounded-lg ${withBg ? `bg-grayScale-200` : ``}  ${
        className ? className : ``
      } hover:opacity-80 duration-200`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
