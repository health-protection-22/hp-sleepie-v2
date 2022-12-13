export function StudyQuery(study: string | string[] | undefined) {
  return `
    query Studies {
      studies(
        where: {title: "${study}"}
      ) {
        pageInfo {
          offsetPagination {
            hasMore
            hasPrevious
            total
          }
        }
        edges {
          node {
            slug
            title(format: RENDERED)
            acfStudy {
              dietarySupplement {
                __typename
                ... on DietarySupplement {
                  slug
                  title
                }
              }
              healthGoals {
                __typename
                ... on HealthGoal {
                  slug
                  title
                }
              }
              link
              studyLevel
            }
            seo {
              breadcrumbs {
                text
                url
              }
              title
              metaDesc
            }
          }
        }
      }
    }
  `;
}
