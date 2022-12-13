import { SanityBlock } from '../utils';

export interface BlockContentProps {
  _type: 'blockContent';
  _key: string;
  text?: SanityBlock[];
}
