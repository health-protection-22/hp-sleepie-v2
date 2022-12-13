export type GetAccessTokenData = {
  auth_token: string;
};

export type CountryObject = {
  country_name: string;
  country_short_name: string;
  country_phone_code: number;
};

export type StateObject = {
  state_name: string;
};

export type CityObject = {
    city_name: string;
  };

export type GetCountriesData = CountryObject[];
export type GetStatesData = StateObject[];
export type GetCitiesData = CityObject[];

