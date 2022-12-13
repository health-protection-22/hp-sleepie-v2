import React from 'react';
import { Supplement } from './types';

export function SupplementsItems({ name, dosage }: Supplement) {
  return (
    <div className="flex items-center gap-4 px-3 py-4 rounded-lg bg-backgroundCart-secondary flex-1 min-w-[300px]">
      <span className="m-0 p-0 text-sm sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-lg font-semibold leading-5">
        {name}
      </span>
      <span className="m-0 p-0 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-normal leading-5">
        {dosage} mg
      </span>
    </div>
  );
}
