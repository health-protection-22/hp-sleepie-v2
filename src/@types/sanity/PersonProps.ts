import { SanityDocument } from '@sanity/types';
import { SanityImageObjectStub } from '@sanity/asset-utils';
import { PostSectionsProps } from './sections';

export interface PersonProps extends SanityDocument {
  name: string;
  image: SanityImageObjectStub;
  email: string;
  bio: PostSectionsProps;
}
