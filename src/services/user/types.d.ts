import { User } from '../../contexts/Auth/types';
import { ResponseDefault } from '../types';

export type PostLoginData = ResponseDefault<{
  token_type: 'Bearer';
  expires_in: number | string;
  access_token: string;
}>;

export type PostRegisterData = ResponseDefault<User>;

export type PayloadLogin = {
  grant_type: 'password';
  client_secret: string;
  client_id: string;
  username: string;
  password: string;
};

export type GetCurrentUserData = ResponseDefault<NonNullable<User>>;

export type PayloadRegister = {
  password_confirmation: string;
  receive_update: boolean;
  date_of_birth: string;
  password: string;
  email: string;
  name: string;
};
