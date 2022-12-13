import { useQuery } from '@tanstack/react-query';
import { usePublicApiCountryServices } from '..';

export function useGetStatesQuery(countryName: string, token: string | undefined) {
  const { getStates } = usePublicApiCountryServices();
  function handleQuery() {
    return getStates(countryName, token).then((res) => res.data);
  }

  const query = useQuery(['publicApiCountry-states', countryName], handleQuery, {
    enabled: !!countryName,
  });

  return query;
}
