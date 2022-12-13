import { useMutation } from '@tanstack/react-query';
import { usePgwServices } from '..';
import useAxiosUtils from '../../../utils/Axios/hooks/useAxiosUtils';
import { PayloadStartCheckout } from '../types';

type Props = {
  onError?: () => void;
};

export function usePostStartCheckoutMutate({ onError }: Props) {
  const { postStartCheckout } = usePgwServices();
  const { handleAxiosError } = useAxiosUtils();

  async function handleMutate(payload: PayloadStartCheckout) {
    return (await postStartCheckout(payload)).data;
  }
  return useMutation(handleMutate, {
    onError: (err) => {
      if (onError) onError();
      handleAxiosError(err);
    },
  });
}
