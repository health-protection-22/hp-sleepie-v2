import React from 'react';
import { SelectedDateInformation } from '../SelectedDateInformation';

export function PeriodInformation() {
  return (
    <div className="w-full flex flex-col gap-9">
      {/* <PeriodTabList defaultActive="day" /> */}
      <SelectedDateInformation />
      {/* <div className="flex gap-6 bg-brand-lightPurple rounded-2 px-7 py-6">
        <CircularGraph
          color={colors.brand.pink}
          percentage={14}
          label="Awake"
          graphRotate={0}
        />
        <CircularGraph 
          color={colors.brand.orange}
          percentage={61}
          label="Light"
        />
        <CircularGraph
          color={colors.brand.green}
          percentage={25}
          label="Awake"
          graphRotate={0.75}
        />
      </div> */}
    </div>
  );
}
