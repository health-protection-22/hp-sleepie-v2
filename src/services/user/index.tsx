import config from '../../config';
import middleware from '../middleware';

import {
  GetCurrentUserData,
  PayloadLogin,
  PayloadRegister,
  PostLoginData,
  PostRegisterData,
} from './types';

export function userServices() {
  const { users } = config.apiRoutes;

  async function postRegister(payload: PayloadRegister) {
    return await middleware.requestAxios(null,'auth').post<PostRegisterData>(users.register, payload);
  }

  async function postLogin(payload: PayloadLogin) {
    return await middleware.requestAxios(null,'auth').post<PostLoginData>(users.login, payload);
  }

  async function getCurrentUser() {
    return await middleware.requestAxios(true,'auth').get<GetCurrentUserData>(users.current);
  }

  return {
    getCurrentUser,
    postRegister,
    postLogin,
  };
}
