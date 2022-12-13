import { ShortCardUser } from '../../shared/ShortCardUser';
import React from 'react';
import { CustomCard } from '../../shared/CustomCard';
import PaperIcon from '../../../assets/icon/Paper';
import MoneyCicleIcon from '../../../assets/icon/MoneyCicle';
import { PastRecommendations } from '../PastRecommendations';

export function UserInformation() {
  return (
    <div className="w-full flex flex-col gap-4">
      <ShortCardUser />
      <div className="w-full flex justify-between items-center gap-4">
        <div className="flex-1">
          <CustomCard
            icon={<PaperIcon />}
            classname="bg-brand-secondary"
            title="Next bil"
            value={'9 days'}
            buttonLabel={'Top up balance'}
          />
        </div>
        <div className="flex-1">
          <CustomCard
            icon={<MoneyCicleIcon />}
            classname="bg-brand-marine"
            title="Subscription plan"
            value={'Monthly'}
            buttonLabel={'Manage Subscription'}
          />
        </div>
      </div>
      <PastRecommendations />
    </div>
  );
}
