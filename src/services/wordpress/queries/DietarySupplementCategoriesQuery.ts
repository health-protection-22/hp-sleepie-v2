export function DietarySupplementCategoriesQuery() {
  return `
    query DietarySupplementCategories {
      dietarySupplementCategories {
        edges {
          node {
            slug
            name
            acfDietarySupplementCategory {
              color
            }
            description
            dietarySupplements(where: {orderby: {field: TITLE, order: ASC}}) {
              edges {
                node {
                  slug
                  title
                  acfDietarySupplement {
                    category {
                      slug
                      name
                      acfDietarySupplementCategory {
                        color
                      }
                    }
                  }
                }
              }
            }
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
      }
    }
  `;
}
