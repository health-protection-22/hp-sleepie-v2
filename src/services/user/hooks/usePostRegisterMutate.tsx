import { useMutation } from '@tanstack/react-query';
import { userServices } from '..';
import { PayloadRegister } from '../types';

function handleMutate(payload: PayloadRegister) {
  return userServices()
    .postRegister(payload)
    .then((res) => res.data);
}

export function usePostRegisterMutate() {
  return useMutation(handleMutate);
}
