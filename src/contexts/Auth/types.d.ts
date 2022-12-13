import { PayloadLogin, PayloadRegister } from '../../services/user/types';

export type User = {
  receive_update: number | boolean;
  date_of_birth: string;
  avatar: null | string;
  email: string;
  uuid: string;
  name: string;
} | null;

export type AuthContextData = {
  register: (payload: PayloadRegister, onValidateRegister: () => void) => void;
  login: (payload: Pick<PayloadLogin, 'username' | 'password'>, onValidateLogin: () => void) => void;
  isLoadingCurrentUserData: boolean;
  authenticationIsLoading: boolean;
  registerIsLoading: boolean;
  errorCurrentUser: unknown;
  isAuthenticated: boolean;
  cookieIsLoading: boolean;
  loginIsLoading: boolean;
  signOut: () => void;
  user: User;
};
