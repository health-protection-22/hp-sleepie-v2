export type BodyResponseError = {
  [key: string]: BodyResponseError | string [] | string;
};

export type ResponseDefault<T> = {
  errors?: BodyResponseError;
  statusCheck: boolean;
  httpStatus: number;
  body?: T;
  message: string;
};
