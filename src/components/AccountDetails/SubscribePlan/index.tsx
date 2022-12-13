import React from 'react';
import RefreshMoneyIcon from '../../../assets/icon/RefreshMoney';
import SecondaryPaperIcon from '../../../assets/icon/SecondaryPaper';
import { Divider } from '../../shared/Divider';

export function SubscribePlan() {
  return (
    <div className="w-full p-4 rounded-2 bg-backgroundCart-primary">
      <div className="flex flex-col gap-4 items-start lg:flex-row lg:justify-between">
        <div className="flex gap-2 items-center">
          <SecondaryPaperIcon />
          <div className="flex flex-col">
            <span className="text-xs font-light">Current plan</span>
            <span className="text-xl font-semibold">Subscribe</span>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <RefreshMoneyIcon />
          <div className="flex flex-col">
            <span className="text-xs font-light">Next bil</span>
            <span className="text-xl font-semibold">October 1st, 2022</span>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
}
