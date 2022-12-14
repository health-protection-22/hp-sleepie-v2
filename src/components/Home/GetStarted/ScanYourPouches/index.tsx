import Image from 'next/image';
import React from 'react';
import ScanYourPouchesImage from '../../../../../public/images/ScanYourPouches.png';

export function ScanYourPoches() {
  return (
    <div className="flex flex-col gap-4 relative left-[15%] top-[-30px] bg-backgroundCart-secondary max-w-fit z-20">
      <h2 className="font-bold text-[40px] leading-[48px] max-w-[369px]">Scan your pouches</h2>
      <p className="text-xl font-normal leading-6 text-textSecondary max-w-[369px]">
        Once you have your first box, you use the Sleep app to scan the pouches whenever you take
        it. This way you can get data and proven results, for real.
      </p>
      <div className="max-w-fit">
        <Image src={ScanYourPouchesImage} height={289} width={396} alt="none" />
      </div>
    </div>
  );
}
