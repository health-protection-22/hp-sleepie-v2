import { ArchiveSEOPropsWP } from '../types';
import { ArchiveSEOProps } from '../../../@types/ArchiveSEOProps';

export function formatArchiveSEO(
  archiveSEO: ArchiveSEOPropsWP,
  archiveName: string,
): ArchiveSEOProps {
  const { seo } = archiveSEO;

  return {
    title: seo.contentTypes[archiveName].archive.title,
    metaDesc: seo.contentTypes[archiveName].archive.metaDesc,
  };
}
