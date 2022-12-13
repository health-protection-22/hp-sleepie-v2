import React from 'react';

import Image from 'next/image';

type Props = {
  dosageUnit: string;
  dosage: number;
  imgUrl: string;
  title: string;
  index: number;
};

export function CartItem({ dosage, dosageUnit, title, imgUrl, index }: Props) {
  return (
    <div className="flex w-full h-[136px] bg-[#F9FAFB] p-8  items-center justify-between rounded-lg">
      <div className="flex flex-1 gap-4">
        <div className=" w-[72px] h-[72px] rounded-lg">
          <Image
            src={imgUrl}
            className={'rounded-lg'}
            alt="Sleepie - We offer a safe and optimized natural supplements"
            title="Sleepie - We offer a safe and optimized natural supplements"
            width="100%"
            height="100%"
          />
        </div>
        <div className="flex flex-col w-fit justify-center items-start">
          <span className="leading-6 font-bold text-lg ">{title}</span>
          <span className="leading-4">{`${dosage} ${dosageUnit}`}</span>
        </div>
      </div>
      {/* <button
        type={'button'}
        onClick={() => removeCartItem(index)}
        className="flex w-8 h-8 rounded-lg bg-[#EAECEF] justify-center items-center"
      >
        <TrashIcon />
      </button> */}
    </div>
  );
}
