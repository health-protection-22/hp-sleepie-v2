import React from 'react';
import { Box, useBreakpointValue } from '@chakra-ui/react';

import { When } from '../shared/When';

import { Logo } from './components/Logo';
import { MobileMenu } from './components/MobileMenu';
import { Menu } from './components/Menu';

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box as="header" w="100%" borderBottom="1px" borderColor="gray.200">
      <nav className="max-w-[1440px] w-full flex justify-between py-4 items-center px-6 lg:px-[60px] mx-auto">
        <Logo />
        <When value={!!isWideVersion}>
          <Menu />
        </When>
        <When value={!isWideVersion}>
          <div className="flex justify-end gap-8">
            {/* <CartContent /> */}
            <MobileMenu />
          </div>
        </When>
      </nav>
    </Box>
  );
}
