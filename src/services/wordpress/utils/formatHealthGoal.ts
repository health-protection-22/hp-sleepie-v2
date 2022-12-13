import { HealthGoalPropsWP } from '../types';
import { HealthGoalProps } from '../../../@types/HealthGoalProps';

export function formatHealthGoal(healthGoal: HealthGoalPropsWP): HealthGoalProps {
  return {
    slug: healthGoal?.node?.slug || '',

    title: healthGoal?.node?.title || '',

    description: healthGoal?.node?.content || '',

    children: healthGoal?.node?.children.nodes.map(({ slug, title, content }) => ({
      slug,
      title,
      description: content,
    })),

    relations:
      healthGoal?.node?.acfHealthGoal?.relations?.map((relation) => ({
        dietarySupplement: relation?.acfRelation?.dietarySupplement?.map((item) => ({
          slug: item.slug,
          title: item.title,
          category: {
            slug: item.acfDietarySupplement?.category.slug || '',
            name: item.acfDietarySupplement?.category.name || '',
            color: item.acfDietarySupplement?.category?.acfDietarySupplementCategory?.color || '',
          },
        }))[0] || { slug: '', title: '' },

        healthGoal: relation?.acfRelation?.healthGoals?.map((item) => ({
          slug: item.slug,
          title: item.title,
        }))[0] || { slug: '', title: '' },

        evidenceLevel: Number(relation?.acfRelation?.evidenceLevel) || 0,

        magnitudeLevel: Number(relation?.acfRelation?.magnitudeLevel) || 0,

        studies:
          relation?.acfRelation?.studies?.map((study) => ({
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
      })) || [],

    dietarySupplements:
      healthGoal?.node?.acfHealthGoal?.dietarySupplements?.map(
        ({ slug, title, acfDietarySupplement }) => ({
          slug,
          title,
          category: {
            slug: acfDietarySupplement?.category.slug,
            name: acfDietarySupplement?.category.name,
            color: acfDietarySupplement?.category.acfDietarySupplementCategory.color,
          },
        }),
      ) || [],

    seo: {
      ...healthGoal?.node?.seo,
      breadcrumbs: healthGoal?.node?.seo.breadcrumbs.map(({ text }) => text),
    },
  };
}
