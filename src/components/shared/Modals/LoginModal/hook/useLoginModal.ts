import { FormEvent } from 'react';
import { useAuthContext } from '../../../../../contexts/Auth';

type Props = {
  onLogin: () => void;
  closeModal: () => void;
};

export function useLoginModal({ onLogin, closeModal }: Props) {
  const { login, authenticationIsLoading } = useAuthContext();


  function onLoginSuccess() {
    onLogin();
    closeModal();
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const emailValue = (document.getElementById('inputEmail') as HTMLInputElement).value;
    const passwordValue = (document.getElementById('inputPassword') as HTMLInputElement).value;
    login({ username: emailValue, password: passwordValue }, onLoginSuccess);
  }

  return { handleSubmit, authenticationIsLoading };
}
