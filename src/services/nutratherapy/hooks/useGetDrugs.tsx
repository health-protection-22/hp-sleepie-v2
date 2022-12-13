import { useQuery } from '@tanstack/react-query';
import { DrugProps } from '../types';
import { nutratherapyServices } from '..';

type Props = {
  initialData?: DrugProps[];
  query?: string;
};

export function handleQuery(query?: string) {
  return nutratherapyServices()
    .getDrugs(query)
    .then((res) => res.data);
}

export function useGetDrugs({ query, initialData }: Props) {
  const result = useQuery(['drugs', query], () => handleQuery(query), {
    refetchOnMount: 'always',
    initialData,
  });

  return result;
}
