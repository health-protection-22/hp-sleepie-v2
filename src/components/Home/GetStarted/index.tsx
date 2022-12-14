import Image from 'next/image';
import React from 'react';
import Steps from '../../../../public/images/GetStartedSteps.png';
import { SleepPerceptions } from './SleepPerceptions';
import SleepPerceptionsImages from '../../../../public/images/SleepPerceptions.png';
import { OrderYourBoxes } from './OrderYourBoxes';
import DownloadSleepieAppImage from '../../../../public/images/DownloadSleepieAppImage.png';
import AppleStoreButton from './Buttons/AppleStore.svg';
import PlayStoreButton from './Buttons/PlayStore.svg';
import { ScanYourPoches } from './ScanYourPouches';
import CycleArrow from '../../../../public/images/CycleArrow.png';

export function GetStarted() {
  return (
    <div className="bg-backgroundCart-secondary py-[58px]">
      <div
        id="how-it-works"
        className="w-full flex flex-col justify-center items-center my-16 lg:mt-16 relative"
      >
        <div className="max-w-[1440px] px-6 lg:px-[60px] w-full flex">
          <div className="flex flex-col gap-[120px]">
            <SleepPerceptions />
            <OrderYourBoxes />
          </div>
          <div className="mt-[70px]">
            <Image src={Steps} height={976} width={310} alt="Dashed line with steps to start" />
          </div>
          <div className="mt-[50px]">
            <div className="absolute left-[40%]">
              <Image
                src={SleepPerceptionsImages}
                alt="Image demonstrating how we track your sleep and some of our questions you will answer"
                layout="intrinsic"
              />
            </div>
            <div className="absolute top-[60%] left-[51%] flex flex-col gap-3 max-w-fit z-50">
              <button>
                <Image
                  src={AppleStoreButton}
                  layout="intrinsic"
                  alt="Download the app in the apple store"
                />
              </button>
              <button>
                <Image
                  src={PlayStoreButton}
                  layout="intrinsic"
                  alt="Download the app in the play store"
                />
              </button>
            </div>
            <div className="absolute top-[42%] left-[51%] flex flex-col">
              <Image
                src={DownloadSleepieAppImage}
                width={427}
                height={326}
                alt="Image demonstrating how to download the sleepie app"
              />
              <div className="flex flex-col gap-4 ml-[66px]">
                <h2 className="font-bold text-[40px] leading-[48px] max-w-[410px]">
                  Download Sleepie App
                </h2>
                <p className="text-xl font-normal leading-6 text-textSecondary max-w-[369px]">
                  Install our app to start monitoring your sleep and generating data before
                  receiving your first box.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <ScanYourPoches />
        <div className="absolute max-w-fit top-[-50px] left-[33%]">
          <Image src={CycleArrow} width={480} height={499.63} alt="Cycle arrow" />
        </div>
      </div>
    </div>
  );
}
