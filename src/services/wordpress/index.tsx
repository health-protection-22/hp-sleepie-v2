import middleware from '../middleware';
import config from '../../config';

import { ArchiveSEOQuery } from './queries/ArchiveSEOQuery';
import { DietarySupplementQuery } from './queries/DietarySupplementQuery';
import { HealthGoalsQuery } from './queries/HealthGoalsQuery';
import { HealthGoalQuery } from './queries/HealthGoalQuery';
import { HealthGoalsListQuery } from './queries/HealthGoalsListQuery';
import { DietarySupplementCategoriesQuery } from './queries/DietarySupplementCategoriesQuery';
import { DietarySupplementCategoryQuery } from './queries/DietarySupplementCategoryQuery';
import { PageSEOQuery } from './queries/PageSEOQuery';
import { StudiesQuery } from './queries/StudiesQuery';

import { formatArchiveSEO } from './utils/formatArchiveSEO';
import { formatDietarySupplement } from './utils/formatDietarySupplement';
import { formatHealthGoals } from './utils/formatHealthGoals';
import { formatHealthGoal } from './utils/formatHealthGoal';
import { formatHealthGoalsList } from './utils/formatHealthGoalsList';
import { formatDietarySupplementCategories } from './utils/formatDietarySupplementCategories';
import { formatDietarySupplementCategory } from './utils/formatDietarySupplementCategory';
import { formatPageSEO } from './utils/formatPageSEO';
import { formatStudies } from './utils/formatStudies';

import {
  GetArchiveSEOProps,
  GetDietarySupplementProps,
  GetHealthGoalProps,
  GetHealthGoalsProps,
  GetHealthGoalsListProps,
  GetDietarySupplementCategoriesProps,
  GetDietarySupplementCategoryProps,
  GetPageSEOProps,
  GetStudiesProps,
  GetRelationsProps,
} from './types';
import { api } from './api';

const { wordpress } = config.apiRoutes;

export function wordpressServices() {
  async function getArchiveSEO(archiveName: string) {
    const path = wordpress.graphql.replace('{query}', ArchiveSEOQuery(archiveName));

    return middleware
      .requestAxios(null, 'wp')
      .get<GetArchiveSEOProps>(path)
      .then(({ data }) => formatArchiveSEO(data.data, archiveName));
  }

  async function getDietarySupplement(dietarySupplementName: string | string[] | undefined) {
    const path = wordpress.graphql.replace(
      '{query}',
      DietarySupplementQuery(dietarySupplementName),
    );

    return middleware
      .requestAxios(null, 'wp')
      .get<GetDietarySupplementProps>(path)
      .then(({ data }) => formatDietarySupplement(data.data.dietarySupplements.edges[0]));
  }

  async function getHealthGoals() {
    const path = wordpress.graphql.replace('{query}', HealthGoalsQuery());

    return api
      .get<GetHealthGoalsProps>(path)
      .then(({ data }) => formatHealthGoals(data.data.healthGoals.edges));
  }

  async function getHealthGoal(healthGoalName: string | string[] | undefined) {
    const path = wordpress.graphql.replace('{query}', HealthGoalQuery(healthGoalName));

    return middleware
      .requestAxios(null, 'wp')
      .get<GetHealthGoalProps>(path)
      .then(({ data }) => formatHealthGoal(data.data.healthGoals.edges[0]));
  }

  async function getHealthGoalsList() {
    const path = wordpress.graphql.replace('{query}', HealthGoalsListQuery());

    return middleware
      .requestAxios(null, 'wp')
      .get<GetHealthGoalsListProps>(path)
      .then(({ data }) => formatHealthGoalsList(data.data.healthGoals.edges));
  }

  async function getDietarySupplementCategories() {
    const path = wordpress.graphql.replace('{query}', DietarySupplementCategoriesQuery());

    return api
      .get<GetDietarySupplementCategoriesProps>(path)
      .then(({ data }) =>
        formatDietarySupplementCategories(data.data.dietarySupplementCategories.edges),
      );
  }

  async function getDietarySupplementCategory(categoryName: string | string[] | undefined) {
    const path = wordpress.graphql.replace('{query}', DietarySupplementCategoryQuery(categoryName));

    return middleware
      .requestAxios(null, 'wp')
      .get<GetDietarySupplementCategoryProps>(path)
      .then(({ data }) =>
        formatDietarySupplementCategory(data.data.dietarySupplementCategories.edges[0]),
      );
  }

  async function getPageSEO(pageURI: string) {
    const path = wordpress.graphql.replace('{query}', PageSEOQuery(pageURI));

    return middleware
      .requestAxios(null, 'wp')
      .get<GetPageSEOProps>(path)
      .then(({ data }) => formatPageSEO(data.data.pageBy));
  }

  async function getStudies({ offset = 0, size = 10 }) {
    const path = wordpress.graphql.replace('{query}', StudiesQuery({ offset, size }));

    return middleware
      .requestAxios(null, 'wp')
      .get<GetStudiesProps>(path)
      .then(({ data }) => ({
        studies: formatStudies(data?.data?.studies?.edges || []),
        pageInfo: data?.data?.studies?.pageInfo || {
          offsetPagination: {
            hasMore: false,
            hasPrevious: false,
            total: 0,
          },
        },
      }));
  }

  async function getRelations(dietarySupplement: string) {
    const path = wordpress.relations.replace('{query}', dietarySupplement);

    return await api.get<GetRelationsProps>(path).then((res) => res.data.content);
  }

  return {
    getArchiveSEO,
    getDietarySupplement,
    getHealthGoals,
    getHealthGoal,
    getHealthGoalsList,
    getDietarySupplementCategories,
    getDietarySupplementCategory,
    getPageSEO,
    getStudies,
    getRelations,
  };
}
