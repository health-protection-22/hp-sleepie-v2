import { ImageProps } from './ImageProps';
import { BlockContentProps } from './BlockContentProps';
import { YoutubeProps } from './YoutubeProps';

export interface GridProps {
  _type: 'grid';
  _key: string;
  title: string;
  columns: {
    _type: 'columns';
    small: string;
    medium: string;
    large: string;
  };
  items?: Array<ImageProps | BlockContentProps | YoutubeProps>;
}
