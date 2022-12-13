import React from 'react';
import { ShortCardUser } from '../../shared/ShortCardUser';
import { ChangeInfosForm } from '../ChangeInfosForm/ChangeInfosForm';

export function PersonalData() {
  return (
    <div className="w-full flex flex-col gap-8">
      <ShortCardUser isInProfilePage />
      <div className="flex flex-col gap-12 xl:flex-row">
        <div className="flex-1">
          <ChangeInfosForm />
        </div>
        {/* <div className="flex-1">
          <SubscribePlan />
        </div> */}
      </div>
    </div>
  );
}
