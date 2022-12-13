import { BlockContentProps } from './BlockContentProps';
import { GridProps } from './GridProps';
import { ImageProps } from './ImageProps';
import { SpacerProps } from './SpacerProps';
import { YoutubeProps } from './YoutubeProps';

export type SectionsProps = BlockContentProps | GridProps | ImageProps | SpacerProps | YoutubeProps;
export type PageSectionsProps =
  | BlockContentProps
  | GridProps
  | ImageProps
  | SpacerProps
  | YoutubeProps;
export type PostSectionsProps = BlockContentProps | GridProps | ImageProps | YoutubeProps;
