import { useState } from 'react';

import { useGetAccessTokenQuery } from '../services/publicApiCountry/hooks/useGetAccessTokenQuery';
import { useGetCountriesQuery } from '../services/publicApiCountry/hooks/useGetCountriesQuery';
import { useGetCitiesQuery } from '../services/publicApiCountry/hooks/useGetCitiesQuery';
import { useGetStatesQuery } from '../services/publicApiCountry/hooks/useGetStatesQuery';

type Props = {
  selectedCountry?: string;
  selectedState?: string;
};

export function usePublicApiCountry({ selectedState, selectedCountry }: Props) {
  const [token, setToken] = useState<string | undefined>();
  const { data: accessToken, isFetching: isLoadingAccessToken } = useGetAccessTokenQuery({
    setToken,
  });
  const {
    isFetching: isLoadingCountriesData,
    isFetched: isFetchedCountriesData,
    data: countriesData,
  } = useGetCountriesQuery({ token, setToken });
  const { data: statesData, isFetching: isLoadingStatesData } = useGetStatesQuery(
    selectedCountry ?? '',
    token,
  );
  const { data: citiesData, isFetching: isLoadingCitiesData } = useGetCitiesQuery(
    selectedState ?? '',
    token,
  );

  return {
    hasAccessToken: !!token,
    isFetchedCountriesData,
    isLoadingCountriesData,
    isLoadingAccessToken,
    isLoadingStatesData,
    isLoadingCitiesData,
    countriesData,
    accessToken,
    citiesData,
    statesData,
  };
}
