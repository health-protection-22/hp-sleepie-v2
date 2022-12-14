import Image from 'next/image';
import React from 'react';
import OrderYourBoxesImages from '../../../../../public/images/OrderYourBoxes.png';

export function OrderYourBoxes() {
  return (
    <div className="flex flex-col gap-[23px]">
      <div className="max-w-[369px] flex flex-col gap-3">
        <h2 className="font-bold text-[40px] leading-[48px]">Order your boxes</h2>
        <p className="text-xl font-normal leading-6 text-textSecondary">
          After your purchase, you will receive the first box in up to 5 days.
        </p>
      </div>
      <div className="ml-[-10px]">
        <Image
          src={OrderYourBoxesImages}
          height={356}
          width={420}
          alt="Image demonstrating how we created your combination. Through your responses and conditions, also through tracking your sleep."
        />
      </div>
    </div>
  );
}
