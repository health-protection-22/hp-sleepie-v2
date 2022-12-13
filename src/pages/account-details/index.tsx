import WithAuthentication from '../../components/shared/WithAuthentication';
import React from 'react';
import { ModernBreadcrumb } from '../../components/shared/ModernBreadcrumb';
import { Divider } from '../../components/shared/Divider';
import { BreadcrumbItem } from '../../components/shared/ModernBreadcrumb/types';
import { PersonalData } from '../../components/AccountDetails/PersonalData';
import { Adresses } from '../../components/AccountDetails/Adresses';
import { PaymentMethods } from '../../components/AccountDetails/PaymentMethods';

const AccountDetails = () => {
  const breadCrumbList: BreadcrumbItem[] = [
    {
      label: `Homepage`,
      url: `/`,
    },
    {
      label: `Dashboard`,
      url: `/dashboard`,
    },
    {
      label: `Account Details`,
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center my-16">
      <div className="max-w-[1440px] px-6 lg:px-[60px] w-full flex flex-col items-center lg:block ">
        <div className="w-full hidden lg:block">
          <ModernBreadcrumb items={breadCrumbList} />
          <Divider />
        </div>
        <div className="w-full flex xl:flex-row flex-col gap-8 max-w-[500px] lg:max-w-full mb-[30px] lg:mb-[60px]">
          <div className="min-w-fit min-h-fit max-w-[945px] w-full">
            <PersonalData />
          </div>
          <div className="flex-1 min-w-fit min-h-fit">
            <div className="w-full flex flex-col gap-4">
              <Adresses />
              <PaymentMethods />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithAuthentication(AccountDetails);
