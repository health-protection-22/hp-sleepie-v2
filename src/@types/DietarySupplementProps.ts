import { CategoryProps } from './CategoryProps';
import { SEOProps } from './SEOProps';

export type DietarySupplementProps = {
  slug: string;
  title: string;
  image: string | undefined;
  scientificName: string;
  commonName: string;
  description: string;
  origin: string[];
  source: string;
  category: CategoryProps;
  ageRange: string[];
  toxicity: string;
  benefits: string;
  healthGoals: {
    slug: string;
    title: string;
    parent: string | null;
    description: string;
  }[];
  relations: any[];
  drugs: string[];
  foods: string[];
  videos: string[];
  dosages: number[];
  maxDosage: number;
  seo: SEOProps;
};
