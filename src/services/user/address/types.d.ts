import { User } from '../../../contexts/Auth/types';
import { ResponseDefault } from '../../types';


export type Address = {
  address_line1: string;
  address_line2: string;
  country_code: string;
  is_default?: 1 | 0;
  first_name: string;
  last_name: string;
  zipcode: string;
  country: string;
  phone: string;
  state: string;
  uuid: string;
  city: string;
};

export type PayloadCreateAddress = Omit<Address,'uuid'>;

export type PostCreateAddressData = ResponseDefault<Address>;

export type GetListAddressesData = ResponseDefault<{items:(Address & {user: User})[]}>;
