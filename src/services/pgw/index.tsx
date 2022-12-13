import config from '../../config';
import { useMiddleware } from '../middleware/useMiddleware';
import { GetTransactionData, PayloadStartCheckout, PostStartCheckoutData } from './types';

export function usePgwServices() {
  const { pgw } = config.apiRoutes;
  const { requestAxios } = useMiddleware();

  async function postStartCheckout(payload: PayloadStartCheckout) {
    return await requestAxios(false, 'pgw').post<PostStartCheckoutData>(pgw.startCheckout, payload);
  }

  async function getTransactionInfo(transactionId: string) {
    const path = pgw.getInfoTransaction.replace('{transactionId}', transactionId);
    return await requestAxios(false, 'pgw').get<GetTransactionData>(path);
  }

  return {
    postStartCheckout,
    getTransactionInfo
  };
}
