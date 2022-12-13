import groq from 'groq';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { DietarySupplementCategoryProps } from '../../../../@types/DietarySupplementCategoryProps';
import sanity from '../../../../lib/sanity';
import { Option } from '../../../../utils/types';

type OrderProps = {
  category: string;
  order: 'asc' | 'desc';
};

type DietarySupplementProps = {
  slug: string;
  title: string;
  category: {
    slug: string;
    name: string;
    color: string;
  };
};

export default function useSupplementsList() {
  const [categories, setCategories] = useState<DietarySupplementCategoryProps[]>([]);
  const [orders, setOrders] = useState<OrderProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  async function loadCategories() {
    const sleepSupplements = await sanity.fetch(
      groq`
        *[_type == "sleepSupplement"]{
        _id,
        color,
        description,
        name,
        slug,
        dietarySupplements,
        seo
      } | order(publishedAt desc)
    `,
    );
    setCategories(sleepSupplements);
    setIsLoading(false);
  }

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    setOrders(() => {
      return categories.map((category) => ({
        category: category.slug,
        order: 'asc',
      }));
    });
  }, [categories]);

  const handleOrder = useCallback(
    (category: string) => {
      const updatedOrders = orders.map((order) => {
        if (order.category === category) {
          const updatedOrder = order.order === 'asc' ? 'desc' : 'asc';

          order.order = updatedOrder;
        }

        return order;
      });

      setOrders(updatedOrders);
    },
    [orders],
  );

  const dietarySupplements = categories.reduce(
    (acc: DietarySupplementProps[], category) => [...acc, ...category.dietarySupplements],
    [],
  );

  const dietarySupplementsList = useMemo(() => {
    return dietarySupplements.map((dietarySupplement) => ({
      value: dietarySupplement.slug,
      label: dietarySupplement.title,
    }));
  }, [dietarySupplements]);

  const handleSearch = useCallback((option: Option) => {
    const selectedDietarySupplement = dietarySupplements.find(
      (dietarySupplement) => dietarySupplement.slug === option.value,
    );

    if (selectedDietarySupplement) {
      router.push(
        '/dietary-supplements/[category]/[slug]',
        `/dietary-supplements/${selectedDietarySupplement.category.slug}/${selectedDietarySupplement.slug}`,
      );
    }
  }, []);

  return { categories, orders, handleOrder, dietarySupplementsList, handleSearch, isLoading };
}
