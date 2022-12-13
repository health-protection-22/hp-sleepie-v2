export function ArchiveSEOQuery(archive: string | string[] | undefined) {
  return `
    query ArchiveSEO {
      seo {
        contentTypes {
          ${archive} {
            archive {
              title
              metaDesc
            }
          }
        }
      }
    }
  `;
}
