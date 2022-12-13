import { SupplementsList } from '../../SupplementsItems/types';

export default function useCurrentRecomendation() {
  const fakeSupplements: SupplementsList = [
    {
      name: 'Lemon Balm',
      dosage: 500,
    },
    {
      name: 'Lemon Balm',
      dosage: 500,
    },
    {
      name: 'Ashwagandha',
      dosage: 650,
    },
    {
      name: 'Ashwagandha',
      dosage: 650,
    },
    {
      name: 'Melatonin',
      dosage: 5,
    },
  ];

  return { fakeSupplements };
}
