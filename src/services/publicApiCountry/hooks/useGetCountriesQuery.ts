import { usePublicApiCountryServices } from '..';
import { useQuery, useQueryClient } from '@tanstack/react-query';

type Props = {
  token: string | undefined;
  setToken: (token: string | undefined) => void;
};

export function useGetCountriesQuery({ token, setToken }: Props) {
  const { getCountries } = usePublicApiCountryServices();
  function handleQuery() {
    return getCountries(token).then((res) => res.data);
  }

  const queryClient = useQueryClient();

  function onSuccess() {
    queryClient.invalidateQueries(['publicApiCountry-states']);
    queryClient.invalidateQueries(['publicApiCountry-cities']);
  }

  function onError() {
    setToken(undefined);
    queryClient.invalidateQueries(['publicApiCountry-token']);
  }

  const query = useQuery(['publicApiCountry-countries'], handleQuery, {
    enabled: !!token,
    onSuccess,
    onError,
  });

  return query;
}
