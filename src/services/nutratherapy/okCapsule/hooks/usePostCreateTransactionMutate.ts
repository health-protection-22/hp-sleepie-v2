import useAxiosUtils from '../../../../utils/Axios/hooks/useAxiosUtils';
import { useMutation } from '@tanstack/react-query';
import { PayloadCreateTransaction } from '../types';
import { useOkCapsuleServices } from '..';

type Props = {
  onError?: () => void;
};

export function usePostCreateTransactionMutate({ onError }: Props) {
  const { createTransaction } = useOkCapsuleServices();
  const { handleAxiosError } = useAxiosUtils();

  async function handleMutate(payload: PayloadCreateTransaction) {
    return (await createTransaction(payload)).data;
  }
  return useMutation(handleMutate, {
    onError: (err) => {
      if (onError) onError();
      handleAxiosError(err);
    },
  });
}
