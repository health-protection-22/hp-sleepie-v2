import config from '../../config';
import { useMiddleware } from '../middleware/useMiddleware';
import { GetCitiesData, GetStatesData, GetCountriesData, GetAccessTokenData } from './types';

export function usePublicApiCountryServices() {
  const { publicApiCountry } = config.apiRoutes;
  const { requestAxios } = useMiddleware();

  async function getAccessToken() {
    return await requestAxios(false, 'publicApiCountry').get<GetAccessTokenData>(
      publicApiCountry.getAccess,
    );
  }

  async function getCountries(token?: string) {
    return await requestAxios(true, 'publicApiCountry', token).get<GetCountriesData>(
      publicApiCountry.countries,
    );
  }

  async function getStates(countryName: string, token?: string) {
    const path = publicApiCountry.states.replaceAll('{countryName}', countryName);
    return await requestAxios(true, 'publicApiCountry', token).get<GetStatesData>(path);
  }

  async function getCities(stateName: string, token?: string) {
    const path = publicApiCountry.cities.replaceAll('{stateName}', stateName);
    return await requestAxios(true, 'publicApiCountry', token).get<GetCitiesData>(path);
  }

  return {
    getAccessToken,
    getCountries,
    getStates,
    getCities,
  };
}
