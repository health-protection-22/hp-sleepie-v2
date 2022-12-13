import React from 'react';
import { Text3 } from '../../shared/Texts';
import { AddAdressCard } from './AddAdressCard';
import { AdressCard } from './AdressCard';

export function Adresses() {
  return (
    <div className="w-full flex flex-col gap-4">
      <Text3 className="text-xl font-semibold">My Shipping Adresses</Text3>
      <AdressCard
        title="Primary Adress"
        ZIP="74590-510"
        city="São Paulo"
        state="SP"
        street="Pb-08"
      />
      <AdressCard
        title="Primary Adress"
        ZIP="74590-510"
        city="São Paulo"
        state="SP"
        street="Pb-08"
      />
      <AddAdressCard />
    </div>
  );
}
