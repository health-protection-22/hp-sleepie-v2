export function FoodsQuery() {
  return `
    query Foods {
      foods(where: {orderby: {field: TITLE, order: ASC}}, first: 50) {
        edges {
          node {
            slug
            title
            featuredImage {
              node {
                guid
              }
            }
            acfFood {
              diet {
                slug
                name
              }
              allergy {
                slug
                name
              }
              unitOfMeasurement
              globalDosages
              frequencyUnit
              intakeFrequency
              interactions {
                dietarySupplement {
                  __typename
                  ... on DietarySupplement {
                    slug
                    title
                  }
                }
                dosage
                source
              }
              portion
              portions {
                value
              }
            }
          }
        }
      }
    }
  `;
}
