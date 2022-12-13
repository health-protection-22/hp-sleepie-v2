import { SanityDocument, Slug } from '@sanity/types';
import { PersonProps } from './PersonProps';
import { MetaFieldsProps } from './MetaFieldsProps';
import { ImageProps } from './sections/ImageProps';
import { PostSectionsProps } from './sections';

export interface PostProps extends SanityDocument {
  _type: 'post';
  publishedAt: string;
  slug: Slug;
  author: PersonProps;
  title: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  meta?: MetaFieldsProps;
  mainImage?: ImageProps;
  categories: string[];
  content: PostSectionsProps[];
}
