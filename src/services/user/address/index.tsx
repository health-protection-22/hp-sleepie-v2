import config from '../../../config';

import { GetListAddressesData, PayloadCreateAddress, PostCreateAddressData } from './types';
import { useMiddleware } from '../../middleware/useMiddleware';

export function useAddressServices() {
  const { address } = config.apiRoutes.users;
  const { requestAxios } = useMiddleware();

  async function postCreateAddress(payload: PayloadCreateAddress) {
    return await requestAxios(true, 'auth').post<PostCreateAddressData>(address.createAddress, payload);
  }

  async function getListAdresses(){
    return await requestAxios(true, 'auth').get<GetListAddressesData>(address.getAddresses);
  }

  return {
    postCreateAddress,
    getListAdresses,
  };
}
