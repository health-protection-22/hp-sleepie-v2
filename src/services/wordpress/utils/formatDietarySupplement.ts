import { DietarySupplementPropsWP } from '../types';
import { DietarySupplementProps } from '../../../@types/DietarySupplementProps';

export function formatDietarySupplement(
  dietarySupplement: DietarySupplementPropsWP,
): DietarySupplementProps {
  const { slug, title, featuredImage, acfDietarySupplement, seo } = dietarySupplement.node;
  const {
    scientificName,
    commonName,
    description,
    origin,
    source,
    category,
    ageRange,
    toxicity,
    benefits,
    outcomes,
    relations,
    drugs,
    foods,
    videos,
    recommendedDosages,
    maxDosage,
  } = acfDietarySupplement;

  return {
    slug,
    title,
    image: featuredImage?.node ? featuredImage.node.sourceUrl : '',
    scientificName,
    commonName,
    description,
    origin,
    source,
    category: {
      ...category,
      color: category.acfDietarySupplementCategory?.color || '#333',
      dietarySupplements: category.dietarySupplements.edges.map(({ node }) => ({
        slug: node.slug,
        title: node.title,
        category: {
          slug: node.acfDietarySupplement.category.slug,
          name: node.acfDietarySupplement.category.name,
          color: node.acfDietarySupplement.category.acfDietarySupplementCategory.color,
        },
      })),
    },
    ageRange,
    toxicity,
    benefits,
    healthGoals: outcomes.map((outcome) => ({
      slug: outcome.slug,
      title: outcome.title,
      parent: outcome.parent?.node.slug || null,
      description: outcome.acfHealthGoal.description,
    })),
    relations: relations?.map((relation) => {
      const { acfRelation } = relation;

      return {
        dietarySupplement: acfRelation?.dietarySupplement?.map(
          ({ slug, title, acfDietarySupplement }) => {
            return {
              slug,
              title,
              category: {
                slug: acfDietarySupplement?.category.slug || '',
                name: acfDietarySupplement?.category.name || '',
                color: acfDietarySupplement?.category.acfDietarySupplementCategory.color || '',
              },
            };
          },
        )[0] || { slug: '', title: '' },
        healthGoal: acfRelation?.healthGoals?.map(({ slug, title }) => ({
          slug: slug,
          title: title,
        }))[0] || { slug: '', title: '' },
        evidenceLevel: Number(acfRelation?.evidenceLevel) || 0,
        magnitudeLevel: Number(acfRelation?.magnitudeLevel) || 0,
        studies: acfRelation?.studies.map((study) => ({
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
        })),
      };
    }),
    drugs: drugs?.reduce((acc: string[], curr) => [...acc, curr.title], []) || [],
    foods: foods?.reduce((acc: string[], curr) => [...acc, curr.title], []) || [],
    videos: videos?.reduce((acc: string[], curr) => [...acc, curr.code], []) || [],
    dosages: recommendedDosages?.map((recommendedDosage) =>
      parseFloat(recommendedDosage.dosage?.replace(',', '.') || '0'),
    ),
    maxDosage: parseFloat(maxDosage.replace(',', '.') || '0'),
    seo: {
      ...seo,
      breadcrumbs: seo.breadcrumbs.map(({ text }) => text),
    },
  };
}
