import { DietarySupplementCategoryPropsWP } from '../types';
import { DietarySupplementCategoryProps } from '../../../@types/DietarySupplementCategoryProps';

export function formatDietarySupplementCategories(
  categories: DietarySupplementCategoryPropsWP[],
): DietarySupplementCategoryProps[] {
  return categories.map(({ node }) => {
    const { slug, name, acfDietarySupplementCategory, description, dietarySupplements, seo } = node;

    return {
      slug: slug,
      name: name,
      color: acfDietarySupplementCategory.color,
      description: description,
      dietarySupplements: dietarySupplements.edges.map(({ node }) => {
        const { slug, title, acfDietarySupplement } = node;
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
      }),
      seo: {
        ...seo,
        breadcrumbs: seo.breadcrumbs.map(({ text }) => text),
      },
    };
  });
}
