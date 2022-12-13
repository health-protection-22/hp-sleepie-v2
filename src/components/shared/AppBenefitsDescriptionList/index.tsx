import React from 'react';
import CheckboxIcon from '../../../assets/icon/Checkbox';
import { Text4 } from '../Texts';

export function AppBenefitsDescriptionList() {
  return (
    <div className={'flex flex-col gap-8'}>
      <Text4 className="w-full text-center xl:text-left">
        We suggest you to download our app to track your sleep quality, but in order to get the best
        results and use our Nutratherapy® method you can change to subscription.
      </Text4>
      <div className={'flex flex-col xl:grid xl:grid-cols-2  w-full gap-y-2 xl:gap-x-8'}>
        <div className={'flex gap-4 items-center'}>
          <span className={'flex justify-center items-center w-fit'}>
            <CheckboxIcon />
          </span>
          <Text4>Recommendations for improving sleep</Text4>
        </div>
        <div className={'flex gap-4 items-center'}>
          <span className={'flex justify-center items-center w-fit'}>
            <CheckboxIcon />
          </span>
          <Text4>Track progress and compare results</Text4>
        </div>
        <div className={'flex gap-4 items-center'}>
          <span className={'flex justify-center items-center w-fit'}>
            <CheckboxIcon />
          </span>
          <Text4>Tracking the quality of your sleep</Text4>
        </div>
        <div className={'flex gap-4 items-center'}>
          <span className={'flex justify-center items-center w-fit'}>
            <CheckboxIcon />
          </span>
          <Text4>Schedule and reminders</Text4>
        </div>
        <div className={'flex gap-4 items-center'}>
          <span className={'flex justify-center items-center w-fit'}>
            <CheckboxIcon />
          </span>
          <Text4>The use of big data</Text4>
        </div>
      </div>
    </div>
  );
}
