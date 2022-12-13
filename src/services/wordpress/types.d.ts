export type GetArchiveSEOProps = {
  data: ArchiveSEOPropsWP;
};

export type ArchiveSEOPropsWP = {
  seo: {
    contentTypes: {
      [key: string]: {
        archive: {
          title: string;
          metaDesc: string;
        };
      };
    };
  };
};

export type GetDietarySupplementProps = {
  data: {
    dietarySupplements: {
      edges: DietarySupplementPropsWP[];
    };
  };
};

export type DietarySupplementPropsWP = {
  node: {
    slug: string;
    title: string;
    featuredImage: {
      node: {
        sourceUrl: string;
      };
    } | null;
    acfDietarySupplement: {
      scientificName: string;
      commonName: string;
      description: string;
      origin: string[];
      source: string;
      category: CategoryPropsWP;
      ageRange: string[];
      toxicity: string;
      benefits: string;
      outcomes: {
        __typename: string;
        slug: string;
        title: string;
        parent: {
          node: {
            slug: string;
          };
        } | null;
        acfHealthGoal: {
          description: string;
        };
      }[];
      relations: RelationPropsWP[];
      drugs: {
        __typename: string;
        title: string;
      }[];
      foods: {
        __typename: string;
        title: string;
      }[];
      videos: {
        code: string;
      }[];
      recommendedDosages: {
        dosage: string | null;
      }[];
      maxDosage: string;
    };
    seo: SEOPropsWP;
  };
};

export type CategoryPropsWP = {
  slug: string;
  name: string;
  acfDietarySupplementCategory: {
    color: string;
  };
  dietarySupplements: {
    edges: {
      node: {
        slug: string;
        title: string;
        acfDietarySupplement: {
          category: {
            slug: string;
            name: string;
            acfDietarySupplementCategory: {
              color: string;
            };
          };
        };
      };
    }[];
  };
};

export type RelationPropsWP = {
  __typename: string;
  acfRelation: {
    dietarySupplement: {
      __typename: string;
      slug: string;
      title: string;
      acfDietarySupplement: {
        category: {
          slug: string;
          name: string;
          acfDietarySupplementCategory: {
            color: string;
          };
        };
      };
    }[];
    healthGoals: {
      __typename: string;
      slug: string;
      title: string;
    }[];
    evidenceLevel: string;
    magnitudeLevel: string;
    studies: StudyPropsWP[];
  };
};

export type SEOPropsWP = {
  title: string;
  metaDesc: string;
  breadcrumbs: {
    text: string;
    url: string;
  }[];
};

export type GetHealthGoalsProps = {
  data: {
    healthGoals: {
      edges: HealthGoalPropsWP[];
    };
  };
};

export type GetHealthGoalProps = GetHealthGoalsProps;

export type GetHealthGoalsListProps = {
  data: {
    healthGoals: {
      edges: {
        node: {
          slug: string;
          title: string;
        };
      }[];
    };
  };
};

export type HealthGoalPropsWP = {
  node: {
    slug: string;
    title: string;
    content: string;
    children: {
      nodes: {
        slug: string;
        title: string;
        content: string;
      }[];
    };
    acfHealthGoal: {
      relations: RelationPropsWP[];
      dietarySupplements: {
        __typename: string;
        slug: string;
        title: string;
        acfDietarySupplement: {
          category: {
            slug: string;
            name: string;
            acfDietarySupplementCategory: {
              color: string;
            };
          };
        };
      }[];
    };
    seo: SEOPropsWP;
  };
};

export type HealthGoalSimplePropsWP = {
  node: {
    slug: string;
    title: string;
  };
};

export type GetPageSEOProps = {
  data: {
    pageBy: PageSEOPropsWP;
  };
};

export type PageSEOPropsWP = {
  seo: {
    title: string;
    metaDesc: string;
    breadcrumbs: {
      text: string;
      url: string;
    }[];
  };
};

export type GetDietarySupplementCategoriesProps = {
  data: {
    dietarySupplementCategories: {
      edges: DietarySupplementCategoryPropsWP[];
    };
  };
};

export type GetDietarySupplementCategoryProps = GetDietarySupplementCategoriesProps;

export type DietarySupplementCategoryPropsWP = {
  node: {
    slug: string;
    name: string;
    acfDietarySupplementCategory: {
      color: string;
    };
    description: string;
    dietarySupplements: {
      edges: {
        node: {
          slug: string;
          title: string;
          acfDietarySupplement: {
            category: {
              slug: string;
              name: string;
              acfDietarySupplementCategory: {
                color: string;
              };
            };
          };
        };
      }[];
    };
    seo: {
      title: string;
      metaDesc: string;
      breadcrumbs: {
        text: string;
        url: string;
      }[];
    };
  };
};

export type StudyPropsWP = {
  __typename?: string;
  slug: string;
  title: string;
  acfStudy: {
    dietarySupplement: {
      __typename: string;
      slug: string;
      title: string;
    };
    healthGoals: {
      __typename: string;
      slug: string;
      title: string;
    }[];
    link: string;
    studyLevel: string;
  };
  seo: SEOPropsWP;
};

export type StudyParentPropsWP = {
  node: {
    slug: string;
    title: string;
    acfStudy: {
      dietarySupplement: {
        __typename: string;
        slug: string;
        title: string;
      }[];
      healthGoals: {
        __typename: string;
        slug: string;
        title: string;
      }[];
      link: string;
      studyLevel: string;
    };
    seo: SEOPropsWP;
  };
};

export type PageInfoProps = {
  offsetPagination: {
    hasMore: boolean;
    hasPrevious: boolean;
    total: number;
  };
};

export type GetStudiesProps = {
  data: {
    studies: {
      pageInfo: PageInfoProps;
      edges: StudyParentPropsWP[];
    };
  };
};

export type RelationProps = {
  healthGoal: {
    slug: string;
    title: string;
  };
  evidenceLevel: number;
  magnitudeLevel: number;
  studies: RelationStudyProps[];
};

export type RelationStudyProps = {
  slug: string;
  title: string;
  link: string;
  studyLevel: string;
};

export type GetRelationsProps = {
  code: string;
  success: boolean;
  message: string;
  data: {
    status: number;
  };
  content: RelationProps[];
};
