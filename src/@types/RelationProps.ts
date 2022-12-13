import { StudyProps } from './StudyProps';

export type RelationProps = {
  dietarySupplement: {
    slug: string;
    title: string;
    category: {
      slug: string;
      name: string;
      color: string;
    };
  };
  healthGoalRelation: {
    slug: string;
    title: string;
    category?: {
      slug: string;
      name: string;
      color: string;
    };
  };
  evidenceLevel: number;
  magnitudeLevel: number;
  studies: StudyProps[];
};
