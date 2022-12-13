import { useRouter } from 'next/router';
import React from 'react';
import CartIcon from '../../../../assets/icon/Cart';
import config from '../../../../config';
import { useCartContext } from '../../../../contexts/Cart';
import { When } from '../../../shared/When';

export function CartContent() {
  const { checkout } = config.webRoutes;
  const { cartItems } = useCartContext();
  const router = useRouter();

  return (
    <div className="flex items-center gap-2">
      <a className="cursor-pointer" onClick={() => router.push(checkout.base)}>
        <CartIcon hoverAnimate />
      </a>
      <When value={cartItems.length > 0}>
        <div className="w-9 h-6 rounded-full bg-brand-red justify-center items-center hidden">
          <span className="text-sm text-backgroundCart-primary">{cartItems.length}</span>
        </div>
      </When>
    </div>
  );
}
