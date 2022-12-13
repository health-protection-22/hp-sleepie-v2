import React from 'react';
import NextLink from 'next/link';
import { HStack, Link } from '@chakra-ui/react';

import menuItems from '../../../../menu-main.json';
import { LoginModal } from '../../../shared/Modals/LoginModal';
import useHeader from '../../hooks/useHeader';
import { FakeSelect } from '../../../shared/FakeSelect';
import colors from '../../../../styles/Theme/colors';
import { TryNowButton } from '../TryNowButton';

export function Menu() {
  const {
    handleModal,
    openLoginModal,
    onLogin,
    LanguageOptions,
    onChangeLanguage,
    initialLanguage,
  } = useHeader();

  return (
    <>
      <HStack as="nav" spacing={8}>
        {menuItems.map(({ link, title }) => (
          <NextLink key={link} href={link} passHref>
            <Link _hover={{ color: 'primary.200' }}>{title}</Link>
          </NextLink>
        ))}
        <TryNowButton
          style={{
            backgroundColor: colors.brand.secondary,
            paddingRight: '16px',
            paddingLeft: '16px',
            height: '33px',
            fontWeight: 'bold',
            color: colors.white.full,
            fontSize: '14px',
          }}
        />
        <FakeSelect
          options={LanguageOptions}
          className="h-8"
          id="selectedLanguageSelect"
          onSet={onChangeLanguage}
          placeholder={initialLanguage ?? 'Language'}
          usePlaceholderHasSelectedOption
        />
        {/* <SearchIcon /> */}
        {/* <CartContent /> */}
      </HStack>
      <LoginModal closeModal={handleModal} show={openLoginModal} onLogin={onLogin} />
    </>
  );
}
