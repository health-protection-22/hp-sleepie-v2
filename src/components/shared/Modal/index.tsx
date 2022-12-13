import React, { ReactNode } from 'react';

import { doNothing } from '../../../utils/functions';
import { When } from '../When';

type Props = {
  closeOnBackDrop?: boolean;
  closeModal: () => void;
  children: ReactNode;
  className?: string;
  zIndex?: number;
  show: boolean;
};

export function Modal({
  closeOnBackDrop,
  zIndex = 999,
  closeModal,
  className,
  children,
  show,
}: Props) {
  return (
    <When value={show}>
      <div
        style={{ zIndex }}
        className={`animate-fadeInAnimation justify-center items-center flex fixed inset-0`}
      >
        <div
          className=" fixed top-0 left-0 w-full h-full bg-black opacity-70"
          onClick={closeOnBackDrop ? closeModal : doNothing}
        />
        <div className={`relative w-auto my-6 mx-auto `}>
          <div
            className={`border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none 
            ${className ? className : ''} `}
          >
            {children}
          </div>
        </div>
      </div>
    </When>
  );
}
