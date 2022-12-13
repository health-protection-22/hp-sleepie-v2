import { PageSEOPropsWP } from '../types';
import { PageSEOProps } from '../../../@types/PageSEOProps';

export function formatPageSEO(pageSEO: PageSEOPropsWP): PageSEOProps {
  return {
    ...(pageSEO?.seo || { title: '', metaDesc: '', breadcrumbs: [] }),
    breadcrumbs: pageSEO?.seo?.breadcrumbs?.map(({ text }) => text) || [],
  };
}
