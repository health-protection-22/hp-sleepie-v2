import { FiltersProps } from '../../components/Nutratherapy/@types/FiltersProps';
import { GetCombinationsData, DrugProps, NutraceuticalProps } from './types';
import middleware from '../middleware';
import config from '../../config';
import param from 'jquery-param';

const { nutratherapy } = config.apiRoutes;

export function nutratherapyServices() {
  async function getCombinations(filters?: FiltersProps) {
    const filtersQuery = filters ? `?${param(filters)}` : '';
    const path = nutratherapy.combinations.replace('{filtersQuery}', filtersQuery);
    return middleware
      .requestAxios()
      .get<GetCombinationsData>(path)
      .then((res) => res);
  }

  async function getDrugs(query?: string) {
    const drugsQuery = query ? `?q=${query}` : '';
    const path = nutratherapy.drugs.replace('{query}', drugsQuery);
    return middleware
      .requestAxios()
      .get<DrugProps[]>(path)
      .then((res) => res);
  }

  async function getDietarySupplements(query?: string) {
    const dietarySupplementsQuery = query ? `?q=${query}` : '';
    const path = nutratherapy.dietarySupplements.replace('{query}', dietarySupplementsQuery);
    return middleware
      .requestAxios()
      .get<NutraceuticalProps[]>(path)
      .then((res) => res);
  }

  return { getCombinations, getDrugs, getDietarySupplements };
}
