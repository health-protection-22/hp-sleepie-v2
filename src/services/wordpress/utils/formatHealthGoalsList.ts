import { HealthGoalSimplePropsWP } from '../types';
import { HealthGoalSimpleProps } from '../../../@types/HealthGoalSimpleProps';

export function formatHealthGoalsList(
  healthGoalsList: HealthGoalSimplePropsWP[],
): HealthGoalSimpleProps[] {
  return healthGoalsList.map(({ node }) => ({
    slug: node.slug,
    title: node.title,
  }));
}
