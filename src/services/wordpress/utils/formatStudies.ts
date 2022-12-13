import { StudyParentPropsWP } from '../types';
import { StudyProps } from '../../../@types/StudyProps';

export function formatStudies(studies: StudyParentPropsWP[]): StudyProps[] {
  return studies.map((study) => ({
    slug: study?.node?.slug || '',
    title: study?.node?.title || '',
    dietarySupplement: {
      slug: study?.node?.acfStudy.dietarySupplement[0].slug || '',
      title: study?.node?.acfStudy.dietarySupplement[0].title || '',
    },
    healthGoal: {
      slug: study?.node?.acfStudy.healthGoals[0].slug || '',
      title: study?.node?.acfStudy.healthGoals[0].title || '',
    },
    link: study?.node?.acfStudy.link || '',
    studyLevel: study?.node?.acfStudy.studyLevel || '',
    seo: {
      ...study?.node?.seo,
      breadcrumbs: study?.node?.seo?.breadcrumbs.map(({ text }) => text) || [],
    },
  }));
}
