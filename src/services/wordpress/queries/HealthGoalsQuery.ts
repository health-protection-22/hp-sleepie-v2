export function HealthGoalsQuery() {
  return `
    query HealthGoals {
      healthGoals(where: {orderby: {field: MENU_ORDER, order: ASC}}) {
        edges {
          node {
            slug
            title
            content(format: RENDERED)
            children {
              nodes {
                slug
                ... on HealthGoal {
                  title
                  slug
                  content(format: RENDERED)
                }
              }
            }
            acfHealthGoal {
              ... on HealthGoal_Acfhealthgoal {
                relations {
                  __typename
                  ... on Relation {
                    acfRelation {
                      dietarySupplement {
                        __typename
                        ... on DietarySupplement {
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
                      healthGoals {
                        __typename
                        ... on HealthGoal {
                          slug
                          title
                        }
                      }
                      evidenceLevel
                      magnitudeLevel
                      studies {
                        __typename
                        ... on Study {
                          slug
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
                dietarySupplements {
                  __typename
                  ... on DietarySupplement {
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
