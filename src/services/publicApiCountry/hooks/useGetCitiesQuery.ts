import { useQuery } from '@tanstack/react-query';
import { usePublicApiCountryServices } from '..';

export function useGetCitiesQuery(stateName: string, token?: string) {
  const { getCities } = usePublicApiCountryServices();
  function handleQuery() {
    return getCities(stateName, token).then((res) => res.data);
  }

  const query = useQuery(['publicApiCountry-cities',stateName], handleQuery, { enabled: !!stateName });

  return query;
}
