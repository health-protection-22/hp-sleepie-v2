import { useMiddleware } from '../../middleware/useMiddleware';
import { PayloadCreateTransaction } from './types';
import config from '../../../config';
import { ResponseDefault } from '../../types';

export function useOkCapsuleServices() {
  const { transactions } = config.apiRoutes.nutratherapy;
  const { requestAxios } = useMiddleware();

  async function createTransaction(payload: PayloadCreateTransaction) {
    return await requestAxios(true, 'auth').post<ResponseDefault<undefined>>(transactions.create, { ...payload, vertical: 'sleepie' });
  }

  return {
    createTransaction,
  };
}
