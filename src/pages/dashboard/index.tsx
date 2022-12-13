import React from 'react';
import { CurrentRecomendation } from '../../components/Profile/CurrentRecomendation';
import { PeriodInformation } from '../../components/Profile/PeriodInformation';
import { UserInformation } from '../../components/Profile/UserInformation';
import { Divider } from '../../components/shared/Divider';
import { ModernBreadcrumb } from '../../components/shared/ModernBreadcrumb';
import { BreadcrumbItem } from '../../components/shared/ModernBreadcrumb/types';
import WithAuthentication from '../../components/shared/WithAuthentication';

const Profile = () => {
  const breadCrumbList: BreadcrumbItem[] = [
    {
      label: `Homepage`,
      url: `/`,
    },
    {
      label: `Dashboard`,
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center my-16">
      <div className="max-w-[1440px] px-6 lg:px-[60px] w-full flex flex-col items-center lg:block ">
        <div className="w-full hidden lg:block">
          <ModernBreadcrumb items={breadCrumbList} />
          <Divider />
        </div>
        <div className="flex xl:flex-row flex-col-reverse gap-8 max-w-[500px] lg:max-w-full mb-[30px] lg:mb-[60px]">
          <div className="min-w-fit flex-1 min-h-fit">
            <CurrentRecomendation />
          </div>
          <div className="flex-1 min-w-fit min-h-fit">
            <UserInformation />
          </div>
        </div>
        <Divider className="hidden lg:block" marginBottomPx={60} />
        <div className="flex max-w-[500px] lg:max-w-full mb-[30px] lg:mb-[60px] w-full">
          <div className="min-w-fit xl:max-w-[820px] min-h-fit w-full">
            <PeriodInformation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithAuthentication(Profile);
