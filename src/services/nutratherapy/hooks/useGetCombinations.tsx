import { FiltersProps } from '../../../components/Nutratherapy/@types/FiltersProps';
import { useQuery } from '@tanstack/react-query';
import { GetCombinationsData } from '../types';
import { nutratherapyServices } from '..';

type Props = {
  initialData?: GetCombinationsData;
  filters?: FiltersProps;
};

export function handleQuery(filters?: FiltersProps) {
  return nutratherapyServices()
    .getCombinations(filters)
    .then((res) => res.data);
}

export function useGetCombinations({ filters, initialData }: Props) {
  const query = useQuery(['combinations', filters], () => handleQuery(filters), {
    initialData: initialData,
  });

  return query;
}
