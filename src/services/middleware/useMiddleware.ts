/* eslint-disable react-hooks/rules-of-hooks */
import { selectedBaseUrlAPI, selectedTokenName } from './constants';
import axios from 'axios';
import { parseCookies } from 'nookies';

export function useMiddleware() {
  function requestAxios(
    withAuth = false,
    api: keyof typeof selectedBaseUrlAPI = 'base',
    customToken: string | undefined = undefined,
  ) {
    const request = axios.create({
      baseURL: selectedBaseUrlAPI[api],
      headers: { Accept: 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
    if (!withAuth && api === 'publicApiCountry') {
      request.interceptors.request.use((requestConfig) => {
        requestConfig = { ...requestConfig };
        requestConfig.headers = {
          ...requestConfig.headers,
          'api-token': process.env.NEXT_PUBLIC_API_COUNTRY_TOKEN,
          'user-email': process.env.NEXT_PUBLIC_API_COUNTRY_EMAIL,
        };

        return requestConfig;
      });
    }

    if (api === 'pgw') {
      const token = process.env.NEXT_PUBLIC_PGW_API_TOKEN as string;
      request.interceptors.request.use((requestConfig) => {
        requestConfig = { ...requestConfig };
        requestConfig.headers = { ...requestConfig.headers, Authorization: `Bearer ${token}` };

        return requestConfig;
      });
    }
    if (api === 'publicApiCountry' && customToken) {
      request.interceptors.request.use((requestConfig) => {
        requestConfig = { ...requestConfig };
        requestConfig.headers = {
          ...requestConfig.headers,
          Authorization: `Bearer ${customToken}`,
        };

        return requestConfig;
      });
    }

    if (withAuth && api !== 'pgw') {
      const { [selectedTokenName[api]]: token } = parseCookies();
      if (token) {
        request.interceptors.request.use((requestConfig) => {
          requestConfig = { ...requestConfig };
          requestConfig.headers = { ...requestConfig.headers, Authorization: `Bearer ${token}` };

          return requestConfig;
        });
      }
    }

    return request;
  }

  return { requestAxios };
}
