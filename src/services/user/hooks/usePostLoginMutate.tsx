import { useMutation } from '@tanstack/react-query';
import { userServices } from '..';
import { PayloadLogin } from '../types';

function handleMutate(payload: PayloadLogin) {
  return userServices()
    .postLogin(payload)
    .then((res) => res.data.body);
}

export function usePostLoginMutate() {
  return useMutation(handleMutate);
}
