type Props = {
  offset?: number;
  size?: number;
};

export function StudiesQuery({ offset = 0, size = 10 }: Props) {
  return `
    query Studies {
      studies(
        where: {orderby: {field: TITLE, order: ASC}, offsetPagination: {offset: ${offset}, size: ${size}}}
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
