import { AxiosError } from 'axios';
import { ResponseDefault } from '../../services/types';

export type CustomAxiosError = AxiosError<ResponseDefault<null>>;
