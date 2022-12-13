export function DietarySupplementQuery(dietarySupplement: string | string[] | undefined) {
  return `
    query DietarySupplement {
      dietarySupplements(where: {name: "${dietarySupplement}"}) {
        edges {
          node {
            slug
            title
            featuredImage {
              node {
                sourceUrl
              }
            }
            acfDietarySupplement {
              scientificName
              commonName
              description
              origin
              source
              category {
                slug
                name
                acfDietarySupplementCategory {
                  color
                }
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
              }
              ageRange
              toxicity
              benefits
              outcomes {
                __typename
                ... on HealthGoal {
                  slug
                  title
                  parent {
                    node {
                      slug
                    }
                  }
                  acfHealthGoal {
                    description
                  }
                }
              }
              relations {
                __typename
                ... on Relation {
                  slug
                  title
                  acfRelation {
                    dietarySupplement {
                      __typename
                      ... on DietarySupplement {
                        slug,
                        title
                      }
                    }
                    healthGoals {
                      __typename
                      ... on HealthGoal {
                        slug,
                        title
                      }
                    }
                    evidenceLevel
                    magnitudeLevel
                    studies {
                      __typename
                      ... on Study {
                        slug,
                        title
                        acfStudy {
                          ... on Study_Acfstudy {
                            link
                            healthGoals {
                              __typename
                              ... on HealthGoal {
                                slug
                                title
                              }
                            }
                            dietarySupplement {
                              __typename
                              ... on DietarySupplement {
                                slug
                                title
                              }
                            }
                            studyLevel
                          }
                        }
                      }
                    }
                  }
                }
              }
              drugs {
                __typename
                ... on Drug {
                  title
                }
              }
              foods {
                __typename
                ... on Food {
                  title
                }
              }
              videos {
                code
              }
              recommendedDosages {
                dosage
              }
              maxDosage
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
