export function PageSEOQuery(pageURI: string | string[] | undefined) {
  return `
    query PageSEO {
      pageBy(uri: "${pageURI}") {
        seo {
          title
          metaDesc
          breadcrumbs {
            text
            url
          }
        }
      }
    }
  `;
}
