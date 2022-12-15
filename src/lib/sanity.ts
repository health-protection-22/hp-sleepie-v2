import sanityClient from '@sanity/client';
import { SanityImageSource } from '@sanity/asset-utils';
import createImageUrlBuilder from '@sanity/image-url';

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '', // you can find this in sanity.json
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '', // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
};

export default sanityClient(config);

export const urlFor = (source: SanityImageSource) => createImageUrlBuilder(config).image(source);
