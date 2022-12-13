import { Button } from '@chakra-ui/react';
import React from 'react';
import { Text5 } from '../../shared/Texts';
import { SupplementsItems } from '../SupplementsItems';
import useCurrentRecomendation from './hooks';

export function CurrentRecomendation() {
  const { fakeSupplements } = useCurrentRecomendation();

  return (
    <div className="w-full px-6 py-8 bg-brand-lightPurple rounded-2xl">
      <h3 className="m-0 p-0 text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-xl font-semibold leading-6">
        Current recomendation
      </h3>
      <span className="m-0 p-0 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-base font-light leading-5">
        Scentific based for my recommendation
      </span>
      <div className="flex flex-wrap lg:grid lg:grid-cols-2 my-8 gap-8">
        {fakeSupplements.map((item, index) => {
          return <SupplementsItems key={index} dosage={item.dosage} name={item.name} />;
        })}
      </div>
      <Button px={4} py={2} colorScheme={'red'} w={['100%', '100%', '100%', 'auto']}>
        <Text5 className="font-normal">Read more</Text5>
      </Button>
    </div>
  );
}
