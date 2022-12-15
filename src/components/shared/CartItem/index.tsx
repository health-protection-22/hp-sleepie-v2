import React from 'react';
import SensorilLogo from '../../../../public/images/SensorilLogo.png';
import SuntheanineLogo from '../../../../public/images/SuntheanineLogo.png';
import GoldenOmega from '../../../../public/images/GoldenOmega.png';
import AlbionLogo from '../../../../public/images/AlbionLogo.png';
import StressIcon from './SVGIcons/StressIcon.png';
import Image from 'next/image';
import { When } from '../When';
import { Beauty } from './SVGIcons/Beauty';
import { PhysicalIcon } from './SVGIcons/Physical';
import { Brain } from './SVGIcons/Brain';

type Props = {
  dosageUnit: string;
  dosage: number;
  imgUrl: string;
  title: string;
  index: number;
};

export function CartItem({ dosage, dosageUnit, title, imgUrl, index }: Props) {
  return (
    <div className="w-full bg-[#F9FAFB] p-8 rounded-lg flex flex-col gap-12">
      <div className="flex w-full justify-between">
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
        <When value={title === 'Theanine'}>
          <div className="flex gap-3 items-start">
            <Image src={SuntheanineLogo} width={109.25} height={22.25} alt="Suntheanine logo" />
            <p className="max-w-[260px] text-left text-text-secondary">
              Clinically proven and award winning, Suntheanine has been shown to reduce stress while
              improving focus and concentration without drowsiness
            </p>
          </div>
        </When>
        <When value={title === 'Ashwagandha'}>
          <div className="flex gap-3 items-start">
            <Image src={SensorilLogo} width={100} height={33} alt="Suntheanine logo" />
            <p className="max-w-[260px] text-left text-text-secondary">
              Sensoril Ashwagandha is made from extracts of the roots and leaves of the plant
              instead just the leaves from ordinary methods
            </p>
          </div>
        </When>
        <When value={title === 'Omega 3'}>
          <div className="flex gap-3 items-start">
            <Image src={GoldenOmega} width={109} height={57.7} alt="Suntheanine logo" />
            <p className="max-w-[260px] text-left text-text-secondary">
              Golden Omega offers a wide variety of superior quality Omega-3 concentrated.
            </p>
          </div>
        </When>
        <When value={title === 'Magnesium' || title === 'Zinc'}>
          <div className="flex gap-3 items-start">
            <Image src={AlbionLogo} width={100} height={99} alt="Suntheanine logo" />
            <p className="max-w-[260px] text-left text-text-secondary">
              100% Chelated, best High Absorption Zinc Bisglycinate
            </p>
          </div>
        </When>
        {/* <button
        type={'button'}
        onClick={() => removeCartItem(index)}
        className="flex w-8 h-8 rounded-lg bg-[#EAECEF] justify-center items-center"
      >
        <TrashIcon />
      </button> */}
      </div>
      <div className="flex items-center gap-6 px-5">
        <div className="flex gap-2 items-center">
          <When
            value={
              title === 'Ashwagandha' ||
              title === 'Theanine' ||
              title === 'Omega 3' ||
              title === 'Rhodiola Rosea'
            }
          >
            <Beauty />
          </When>
          <When value={title !== 'Zinc'}>
            <PhysicalIcon />
          </When>
          <When
            value={
              title === 'Ashwagandha' ||
              title === 'Magnesium' ||
              title === 'Omega 3' ||
              title === 'Rhodiola Rosea'
            }
          >
            <Brain />
          </When>
          <When
            value={
              title === 'Ashwagandha' ||
              title === 'Theanine' ||
              title === 'Magnesium' ||
              title === 'Omega 3' ||
              title === 'Rhodiola Rosea'
            }
          >
            <div>
              <Image src={StressIcon} width={20} height={20} alt="Stress icon" />
            </div>
          </When>
        </div>
        <When value={title === 'Melatonin'}>
          <span className="text-text-secondary">Impacts on sleep</span>
        </When>
        <When value={title === 'Theanine'}>
          <span className="text-text-secondary">Impacts on anxiety, sleep and stress</span>
        </When>
        <When value={title === 'Ashwagandha' || title === 'Omega 3' || title === 'Rhodiola Rosea'}>
          <span className="text-text-secondary">
            Impacts on anxiety, sleep, depression and stress
          </span>
        </When>
      </div>
    </div>
  );
}
