import React from 'react';
import CallendaryIcon from '../../../assets/icon/Callendary';
import GreenCheckIcon from '../../../assets/icon/GreenCheck';
import MoonIcon from '../../../assets/icon/Moon';
import { Button } from '../../shared/Button';

export function SelectedDateInformation() {
  return (
    <div className="w-full px-6 lg:px-8 py-9 flex lg:flex-row flex-col justify-between items-center bg-brand-lightPurple rounded-2 gap-2">
      <div className="flex-1 flex justify-between items-center w-full">
        <div>
          <h3 className="text-2xl font-light">Saturday</h3>
          <span className="text-base font-light text-gray-500">10 sept 2022</span>
        </div>
        <Button className="bg-brand-red px-4">
          <CallendaryIcon />
          <span className="text-white-full text-sm font-normal">Set date</span>
        </Button>
      </div>
      <div className="flex-1 w-full flex justify-end gap-4">
        <div className="px-6 py-4 rounded-lg flex flex-col gap-2 bg-grayScale-600 min-w-fit w-full lg:w-auto">
          <div className="flex gap-2 items-center">
            <GreenCheckIcon />
            <span className="text-sm lg:text-base font-light">Took my pills at</span>
          </div>
          <span className="text-2xl font-light">9:30 p.m.</span>
        </div>
        <div className="px-6 py-4 rounded-lg bg-grayScale-600 flex flex-col gap-2">
          <MoonIcon />
          <span className="text-2xl font-light">21/30</span>
        </div>
      </div>
    </div>
  );
}
