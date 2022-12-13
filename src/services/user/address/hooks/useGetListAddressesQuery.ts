import { useQuery } from '@tanstack/react-query';
import { useAddressServices } from '..';

type Props = {
  enabled?: boolean;
};

export function useGetListAddressesQuery({ enabled }: Props) {
  const { getListAdresses } = useAddressServices();
  function handleQuery() {
    return getListAdresses().then((res) => res.data.body);
  }

  const query = useQuery(['address-list'], handleQuery, {
    enabled,
  });

  return query;
}
