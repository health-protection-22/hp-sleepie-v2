import { useQuery } from '@tanstack/react-query';
import { NutraceuticalProps } from '../types';
import { nutratherapyServices } from '..';

type Props = {
  initialData?: NutraceuticalProps[];
  query?: string;
};

export function handleQuery(query?: string) {
  return nutratherapyServices()
    .getDietarySupplements(query)
    .then((res) => res.data);
}

export function useGetDietarySupplements({ query, initialData }: Props) {
  const result = useQuery(['nutraceuticals', query], () => handleQuery(query), {
    refetchOnMount: 'always',
    initialData,
  });

  return result;
}
