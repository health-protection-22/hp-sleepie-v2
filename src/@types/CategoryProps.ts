export type CategoryProps = {
  slug: string
  name: string
  color: string
  dietarySupplements: {
    slug: string
    title: string
    category: {
      slug: string
      name: string
      color: string
    }
  }[]
}
