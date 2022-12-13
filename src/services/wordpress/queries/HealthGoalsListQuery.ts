export function HealthGoalsListQuery() {
  return `
    query HealthGoalsList {
      healthGoals(where: {parentIn: "null", orderby: {field: TITLE, order: ASC}}) {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `;
}
