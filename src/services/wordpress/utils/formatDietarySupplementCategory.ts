import { DietarySupplementCategoryPropsWP } from '../types';
import { DietarySupplementCategoryProps } from '../../../@types/DietarySupplementCategoryProps';

export function formatDietarySupplementCategory(
  category: DietarySupplementCategoryPropsWP,
): DietarySupplementCategoryProps {
  const { slug, name, acfDietarySupplementCategory, description, dietarySupplements, seo } =
    category.node;

  return {
    slug,
    name,
    color: acfDietarySupplementCategory.color,
    description,
    dietarySupplements: dietarySupplements.edges.map((dietarySupplement) => {
      const { slug, title, acfDietarySupplement } = dietarySupplement.node;
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
}
