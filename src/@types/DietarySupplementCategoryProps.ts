import { SEOProps } from './SEOProps';

export type DietarySupplementCategoryProps = {
  slug: string;
  name: string;
  color: string;
  description: string;
  dietarySupplements: {
    slug: string;
    title: string;
    category: {
      slug: string;
      name: string;
      color: string;
    };
  }[];
  seo: SEOProps;
};
