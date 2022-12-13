import { useEffect } from 'react';

import { usePostCreateTransactionMutate } from '../../../services/nutratherapy/okCapsule/hooks/usePostCreateTransactionMutate';
import { useGetTransactionInfoQuery } from '../../../services/pgw/hooks/useGetTransactionInfoQuery';
import { useAuthContext } from '../../../contexts/Auth';
import { parseCookies } from 'nookies';
import { useRouter } from 'next/router';
import config from '../../../config';
import { useSnackbarContext } from '../../../contexts/Snackbar';

type Props = {
  transactionId: string;
};
export function usePageSuccess({ transactionId }: Props) {
  const {
    mutate: createTransactionMutate,
    isSuccess,
    isLoading,
    isError,
    isIdle,
    data,
  } = usePostCreateTransactionMutate({});
  const { data: transactionData } = useGetTransactionInfoQuery(transactionId);
  const { dispatchSnackbar } = useSnackbarContext();
  const { checkout } = config.webRoutes;
  const { user } = useAuthContext();
  const { push } = useRouter();

  const isFetching = isLoading || isIdle;

  useEffect(() => {
    if (!isError) return;
    push(checkout.failure);
  }, [isError]);


  useEffect(() => {
    if (!data) return;
    const { httpStatus } = data;
    if (httpStatus !== 208) return;
    dispatchSnackbar({ message: 'Transaction already exists', type: 'error' });
  }, [data]);

  useEffect(() => {
    if (!transactionData) return;

    const { healthProtection_defaultAddressUuid: addressUuid } = parseCookies();
    const payload = { address_uuid: addressUuid, transaction_id: transactionId };
    createTransactionMutate(payload);
  }, [transactionData]);

  return { user, isSuccess, isFetching };
}
