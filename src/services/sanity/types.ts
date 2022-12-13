export type SEO = {
  breadcrumbs: string[];
  metaDesc: string;
  title: string;
};

export type Studies = {
  dietarySupplement: DiaterySupplements;
  healthGoalRelation: HealthGoalRelation;
  link: string;
  slug: string;
  studyLevel: string;
  title: string;
};

export type HealthGoalRelation = {
  slug: string;
  title: string;
};

export type Category = {
  color: string;
  name: string;
  slug: string;
};

export type DiaterySupplements = {
  category?: Category;
  slug: string;
  title: string;
};

export type Relations = {
  dietarySupplement: DiaterySupplements;
  evidenceLevel: number;
  healthGoalRelation: HealthGoalRelation;
  magnitudeLevel: number;
  studies: Studies[];
};

export interface HealthGoalSanity {
  description: string;
  dietarySupplements: DiaterySupplements[];
  relations: Relations[];
  seo: SEO;
  slug: string;
  title: string;
}

export interface HealthGoalSanityCreate extends HealthGoalSanity {
  _type: string;
}
