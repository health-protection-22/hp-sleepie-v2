import { SanityBlock } from '../utils';

export interface SimpleBlockContentProps {
  _type: 'simpleBlockContent';
  _key: string;
  text?: SanityBlock[];
}
