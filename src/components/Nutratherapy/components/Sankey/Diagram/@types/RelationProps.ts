export type RelationProps = {
  healthGoal: {
    slug: string;
    title: string;
  };
  evidenceLevel: number;
  magnitudeLevel: number;
  studies: {
    slug: string;
    title: string;
    link: string;
    studyLevel: string;
  }[];
};
