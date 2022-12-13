import { useQuery } from '@tanstack/react-query';
import { usePublicApiCountryServices } from '..';
import { GetAccessTokenData } from '../types';

type Props = {
  setToken: (token: string | undefined) => void;
}

export function useGetAccessTokenQuery({ setToken }: Props) {
  const { getAccessToken } = usePublicApiCountryServices();

  function onError() {
    setToken(undefined);
  }
  function onSuccess(res: GetAccessTokenData) {
    setToken(res.auth_token);
  }

  function handleQuery() {
    return getAccessToken().then((res) => res.data);
  }
  const query = useQuery(['publicApiCountry-token'], handleQuery, {
    refetchOnMount: 'always',
    onSuccess,
    onError,
  });

  return query;
}
