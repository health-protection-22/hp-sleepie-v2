import Image from 'next/image';
import React from 'react';
import TrackYoursleepImage from '../../../../../public/images/TrackYourSleepImage.svg';

export function TrackYourSleep() {
  return (
    <div className="absolute bg-background-secondary top-[-50px] left-[50%]">
      <Image src={TrackYoursleepImage} width={408.66} height={172.71} alt="Woman sleeping image" />
      <div className="mt-1 flex flex-col ml-[99px]">
        <h2 className="font-bold text-[40px] leading-[48px] max-w-[369px]">Track your sleep</h2>
        <p className="text-xl font-normal leading-6 text-textSecondary max-w-[369px]">
          {`Start sleeping well! Use the app to scan pouches and monitor your sleep. This way, you'll
          have a data-driven and more personalized formula on your next box.`}
        </p>
      </div>
    </div>
  );
}
