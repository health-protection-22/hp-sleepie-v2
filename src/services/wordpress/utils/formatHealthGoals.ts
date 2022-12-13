import { HealthGoalPropsWP } from '../types';
import { HealthGoalProps } from '../../../@types/HealthGoalProps';

export function formatHealthGoals(healthGoals: HealthGoalPropsWP[]): HealthGoalProps[] {
  return healthGoals.map(({ node }) => {
    const { slug, title, content, children, acfHealthGoal, seo } = node;

    return {
      slug,
      title,
      description: content,
      children: children.nodes.map(({ slug, title, content }) => ({
        slug,
        title,
        description: content,
      })),
      relations:
        acfHealthGoal?.relations?.map(({ acfRelation }) => {
          const { dietarySupplement } = acfRelation;

          return {
            dietarySupplement: dietarySupplement?.map((item) => ({
              slug: item?.slug || '',
              title: item?.title || '',
              category: {
                slug: item?.acfDietarySupplement?.category.slug,
                name: item?.acfDietarySupplement?.category.name,
                color: item?.acfDietarySupplement?.category.acfDietarySupplementCategory.color,
              },
            }))[0] || { slug: '', title: '', category: { slug: '', name: '', color: '' } },
            healthGoal: acfRelation?.healthGoals?.map((item) => ({
              slug: item.slug,
              title: item.title,
            }))[0] || { slug: '', title: '' },
            evidenceLevel: Number(acfRelation?.evidenceLevel) || 0,
            magnitudeLevel: Number(acfRelation?.magnitudeLevel) || 0,
            studies:
              acfRelation?.studies?.map((study) => ({
                slug: study?.slug || '',
                title: study?.title || '',
                dietarySupplement: {
                  slug: study?.acfStudy.dietarySupplement.slug || '',
                  title: study?.acfStudy.dietarySupplement.title || '',
                },
                healthGoal: {
                  slug: study?.acfStudy.healthGoals[0].slug || '',
                  title: study?.acfStudy.healthGoals[0].title || '',
                },
                link: study?.acfStudy.link || '',
                studyLevel: study?.acfStudy.studyLevel || '',
                seo: {
                  ...study?.seo,
                  breadcrumbs: study?.seo?.breadcrumbs.map(({ text }) => text) || [],
                },
              })) || [],
          };
        }) || [],
      dietarySupplements:
        acfHealthGoal.dietarySupplements?.map(({ slug, title, acfDietarySupplement }) => {
          const { category } = acfDietarySupplement;

          return {
            slug,
            title,
            category: {
              slug: category.slug,
              name: category.name,
              color: category.acfDietarySupplementCategory.color,
            },
          };
        }) || [],
      seo: {
        ...seo,
        breadcrumbs: seo?.breadcrumbs.map(({ text }) => text) || [],
      },
    };
  });
}
