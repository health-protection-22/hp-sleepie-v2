import React, { ReactNode, useState } from 'react';
import { CleanArrow } from '../CleanArrow';

type Props = {
  defaultTextElementDisplay: ReactNode;
  ItemsElements?: JSX.Element[];
};

export function DropdownDisplay({ ItemsElements, defaultTextElementDisplay }: Props) {
  const [show, setShow] = useState(false);
  function handleClick() {
    setShow((prev) => !prev);
  }
  return (
    <div
      className={`flex flex-col border border-borderColor h-fit rounded-lg p-4 transform  duration-200  transition-height ease-linear w-full`}
    >
      <div
        className="flex items-center justify-between w-full cursor-pointer"
        onClick={handleClick}
      >
        {defaultTextElementDisplay} <CleanArrow rotate={show} />
      </div>
      <div
        className={`flex flex-col  border-t-borderColor gap-4  relative transform transition-all origin-top-center  ease-linear duration-200  
      ${show ? 'scale-y-100 max-h-96 mt-4 border-t py-2' : 'scale-y-0 max-h-0'} 

       `}
      >
        {ItemsElements?.map((items, index) => (
          <div key={index}>{items}</div>
        ))}
      </div>
    </div>
  );
}
