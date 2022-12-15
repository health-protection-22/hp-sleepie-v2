import Image from 'next/image';
import React from 'react';
import ImprovedFormulaImage from '../../../../../public/images/ImprovedFormulaImage.png';

export function ImprovedFormula() {
  return (
    <div className="flex justify-center items-center mt-[-40px]">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-[40px] leading-[48px] max-w-[369px]">Improved formula</h2>
        <p className="text-xl font-normal leading-6 text-textSecondary max-w-[369px]">
          {`Your Following box will have a data-driven personalized formula to help you sleep even better. Keep improving your formula using the Sleepie App.`}
        </p>
      </div>
      <Image src={ImprovedFormulaImage} width={340} height={285} alt="hand" />
    </div>
  );
}
