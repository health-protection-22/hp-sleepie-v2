import React from 'react';
import NextLink from 'next/link';
import { IconButton, Drawer, DrawerOverlay, DrawerContent } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import menuItems from '../../../../menu-main.json';
import useHeader from '../../hooks/useHeader';
import { LoginModal } from '../../../shared/Modals/LoginModal';
import { FakeSelect } from '../../../shared/FakeSelect';
import { CloseDrawerIcon } from '../../../../assets/icon/CloseDrawer';
import colors from '../../../../styles/Theme/colors';
import { Divider } from '../../../shared/Divider';
import { Address } from './Address';
import { SocialMedias } from './SocialMedias';
import { TryNowButton } from '../TryNowButton';

export function MobileMenu() {
  const {
    onLogin,
    openLoginModal,
    handleModal,
    LanguageOptions,
    onChangeLanguage,
    initialLanguage,
    handleMobileMenu,
    openMobileMenu,
  } = useHeader();

  return (
    <>
      <IconButton
        aria-label="Main menu"
        variant="outline"
        borderWidth={2}
        size="lg"
        icon={<HamburgerIcon />}
        fontSize={24}
        onClick={handleMobileMenu}
      />
      <Drawer
        isOpen={openMobileMenu}
        placement="right"
        onClose={handleMobileMenu}
        returnFocusOnClose={false}
      >
        <DrawerOverlay />
        <DrawerContent py={'76px'} px={'36px'} bgColor={colors.white.full}>
          <div className="flex flex-col justify-between items-start w-full h-full">
            <div className="w-full">
              <div className="w-full flex justify-between items-start">
                <nav className="flex flex-col items-start gap-8">
                  {menuItems.map((item, index) => {
                    return (
                      <button key={index} onClick={handleMobileMenu}>
                        <NextLink
                          href={item.link}
                          className="text-lg leading-[27px] font-medium text-text-primary"
                        >
                          {item.title}
                        </NextLink>
                      </button>
                    );
                  })}
                  <TryNowButton
                    style={{
                      backgroundColor: colors.brand.secondary,
                      color: colors.white.full,
                      fontSize: '14px',
                    }}
                    onClick={handleMobileMenu}
                  />
                </nav>
                <button onClick={handleMobileMenu}>
                  <CloseDrawerIcon />
                </button>
              </div>
              <div className="flex flex-col gap-6 items-start mt-8">
                <FakeSelect
                  options={LanguageOptions}
                  className="h-8 w-full"
                  id="selectedLanguageSelect"
                  onSet={onChangeLanguage}
                  placeholder={initialLanguage ?? 'Language'}
                  usePlaceholderHasSelectedOption
                />
              </div>
            </div>
            <div className="w-full">
              <Divider className="my-6" />
              <footer>
                <Address />
                <Divider className="my-6" />
                <SocialMedias />
              </footer>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
      <LoginModal closeModal={handleModal} show={openLoginModal} onLogin={onLogin} />
    </>
  );
}
