import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { SelectOption } from '../../shared/FakeSelect/types';
import { parseCookies, setCookie } from 'nookies';
import {
  LANGUAGE_ENGLISH,
  LANGUAGE_SPANISH,
  LANGUAGE_TOKEN_NAME,
  LANGUAGE_HEBREW,
} from '../../../config/constants';

export default function useHeader() {
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');
  const [initialLanguage, setInitialLanguage] = useState<string>('');
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  function handleMobileMenu() {
    setOpenMobileMenu(!openMobileMenu);
  }

  const router = useRouter();

  useEffect(() => {
    const { healthProtection_language: initialLanguage } = parseCookies();
    setInitialLanguage(initialLanguage);
  }, [selectedLanguage]);

  const LanguageOptions: SelectOption[] = [LANGUAGE_ENGLISH, LANGUAGE_SPANISH, LANGUAGE_HEBREW];

  function handleModal() {
    setOpenLoginModal(!openLoginModal);
  }

  function onLogin() {
    handleModal();
    router.push('/dashboard');
  }

  function onChangeLanguage() {
    const languageSelectValue = (
      document.getElementById('selectedLanguageSelect') as HTMLInputElement
    ).value;
    switch (languageSelectValue) {
      case LANGUAGE_ENGLISH.value:
        setCookie(undefined, LANGUAGE_TOKEN_NAME, LANGUAGE_ENGLISH.label);
        setSelectedLanguage(LANGUAGE_ENGLISH.value);
        document.getElementById('weglot-language-en')?.click();
        break;

      case LANGUAGE_SPANISH.value:
        setCookie(undefined, LANGUAGE_TOKEN_NAME, LANGUAGE_SPANISH.label);
        setSelectedLanguage(LANGUAGE_SPANISH.value);
        document.getElementById('weglot-language-es')?.click();
        break;

      case LANGUAGE_HEBREW.value:
        setCookie(undefined, LANGUAGE_TOKEN_NAME, LANGUAGE_HEBREW.label);
        setSelectedLanguage(LANGUAGE_HEBREW.value);
        document.getElementById('weglot-language-he')?.click();
        break;
      default:
        break;
    }
  }

  return {
    openLoginModal,
    LanguageOptions,
    handleModal,
    onLogin,
    onChangeLanguage,
    initialLanguage,
    openMobileMenu,
    handleMobileMenu,
  };
}
