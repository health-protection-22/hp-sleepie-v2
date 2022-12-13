import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { CleanArrow } from '../CleanArrow';
import { When } from '../When';

type BreadCrumbObject = {
  label: string;
  url?: string;
};

type BreadCrumbProps = {
  items: BreadCrumbObject[];
};

export function BreadCrumb({ items }: BreadCrumbProps) {
  const router = useRouter();

  const lastItem = items[items.length - 1];

  return (
    <div className="flex gap-2 items-center text-base font-normal mt-4">
      {items.map((item, index) => {
        return (
          <div key={index}>
            <When value={item.label !== lastItem.label || item.url !== lastItem.url}>
              <span
                data-testid={`breadcrumb-${item.label}`}
                onClick={() => {
                  if (item.url) router.push(item.url);
                }}
                className="text-grayscale-600 hover:text-brand-primary duration-300 cursor-pointer"
              >
                {item.label}
              </span>
              <CleanArrow direction='right'/>
            </When>
            <When value={item.label === lastItem.label && item.url === lastItem.url}>
              <span data-testid={`breadcrumbLastItem-${item.label}`} className="text-brand-primary">
                <Text>{item.label}</Text>
              </span>
            </When>
          </div>
        );
      })}
    </div>
  );
}
