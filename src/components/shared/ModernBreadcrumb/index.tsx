import MiniArrowRight from '../../../assets/icon/MiniArrowRight';
import { BreadcrumbList } from './types';
import React from 'react';
import { When } from '../When';
import { Text3 } from '../Texts';
import { useRouter } from 'next/router';

export function ModernBreadcrumb({ items }: BreadcrumbList) {
  const router = useRouter();

  return (
    <div className="flex gap-4 items-center h-[60px]">
      {items.map((item, index) => {
        const isLast = items.length !== index + 1;

        return (
          <React.Fragment key={index}>
            <a
              onClick={() => {
                if (item.url) router.push(item.url);
              }}
            >
              <Text3
                className={`font-light ${
                  isLast
                    ? `text-customGray cursor-pointer hover:text-brand-primary duration-200`
                    : ``
                }`}
              >
                {item.label}
              </Text3>
            </a>
            <When value={isLast}>
              <MiniArrowRight />
            </When>
          </React.Fragment>
        );
      })}
    </div>
  );
}
