import useAxiosUtils from '../../../../utils/Axios/hooks/useAxiosUtils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PayloadCreateAddress } from '../types';
import { useAddressServices } from '..';

export function usePostCreateAddressMutate() {
  const { postCreateAddress } = useAddressServices();
  const { handleAxiosError } = useAxiosUtils();
  const queryClient = useQueryClient();
  function onSuccess() {
    queryClient.invalidateQueries(['address-list']);
  }

  function handleMutate(payload: PayloadCreateAddress) {
    return postCreateAddress(payload).then((res) => res.data);
  }
  
  return useMutation(handleMutate, { onSuccess, onError: (err) => handleAxiosError(err) });
}
