import Image from 'next/image';
import React from 'react';
import TwentyThreeAndMe from './EnterprisesLogo/23andme.svg';
import Ancestry from './EnterprisesLogo/ancestry.svg';
import Familytree from './EnterprisesLogo/familytree.svg';
import Myheritage from './EnterprisesLogo/myheritage.svg';

export function SleepPerceptions() {
  return (
    <div className="flex flex-col gap-[46px] max-w-[369px]">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-[40px] leading-[48px]">Sleep perceptions</h2>
        <p className="text-xl font-normal leading-6 text-textSecondary">
          Answer about your sleep and health conditions. Sleepie will use this data to create a
          scientific based, supplement combination, for free.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <p className="font-normal text-base text-textSecondary">
          If you have your raw DNA sequenced, you can upload it to get results even more
          personalized.
        </p>
        <div className="flex gap-6 flex-wrap max-w-[360px]">
          <Image src={TwentyThreeAndMe} height={25.61} width={69.15} alt="23andme logo" />
          <Image src={Ancestry} height={18.33} width={102.45} alt="23andme logo" />
          <Image src={Familytree} height={16.79} width={145.99} alt="23andme logo" />
          <Image src={Myheritage} height={18.57} width={106.93} alt="23andme logo" />
        </div>
      </div>
    </div>
  );
}
