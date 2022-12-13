import { SEOProps } from './SEOProps';

export type HealthGoalProps = {
  slug: string;
  title: string;
  description: string;
  children?: {
    slug: string;
    title: string;
    description: string;
  }[];
  relations: any[];
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
