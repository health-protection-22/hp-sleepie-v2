import { SanityImageSource } from '@sanity/asset-utils';

import { SanityAsset } from '../utils';

export type ImageProps = SanityImageSource & {
  _type: 'mainImage';
  _key: string;
  alt: string;
  asset: SanityAsset;
};
