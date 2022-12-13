import { useQuery } from '@tanstack/react-query';
import { usePgwServices } from '..';
import useAxiosUtils from '../../../utils/Axios/hooks/useAxiosUtils';

export function useGetTransactionInfoQuery(transactionId: string) {
  const { getTransactionInfo } = usePgwServices();
  const { handleAxiosError } = useAxiosUtils();
  function handleQuery() {
    return getTransactionInfo(transactionId).then((res) => res.data);
  }

  const query = useQuery([], handleQuery, {
    enabled: !!transactionId,
    onError: (err) => {
      handleAxiosError(err);
    },
  });

  return query;
}
