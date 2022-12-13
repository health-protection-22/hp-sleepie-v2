import { SEOProps } from './SEOProps';

export type StudyProps = {
  slug: string;
  title: string;
  dietarySupplement: {
    slug: string;
    title: string;
  };
  healthGoal: {
    slug: string;
    title: string;
  };
  link: string;
  studyLevel: string;
  seo?: SEOProps;
};
