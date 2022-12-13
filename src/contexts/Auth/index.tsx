import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { useGetCurrentUserQuery } from '../../services/user/hooks/useGetCurrentUserQuery';
import { usePostRegisterMutate } from '../../services/user/hooks/usePostRegisterMutate';
import { usePostLoginMutate } from '../../services/user/hooks/usePostLoginMutate';
import useAxiosUtils from '../../utils/Axios/hooks/useAxiosUtils';
import { AuthContextData, User } from './types';
import { useRouter } from 'next/router';
import { PayloadLogin, PayloadRegister, PostLoginData } from '../../services/user/types';
import { parseCookies, setCookie, destroyCookie } from 'nookies';

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const { isLoading: registerIsLoading, mutateAsync: mutateRegister } = usePostRegisterMutate();
  const { isLoading: loginIsLoading, mutateAsync: mutateLogin } = usePostLoginMutate();

  const [cookieIsLoading, setCookieIsLoading] = useState(true);
  const [hasToken, setHasToken] = useState(false);
  const { handleAxiosError } = useAxiosUtils();
  const {
    data: currentUserData,
    isFetching: isLoadingCurrentUserData,
    error: errorCurrentUser,
  } = useGetCurrentUserQuery(hasToken);

  const authenticationIsLoading =
    loginIsLoading || registerIsLoading || cookieIsLoading || isLoadingCurrentUserData;

  const [user, setUser] = useState<User>(null);
  const router = useRouter();

  const onError = (err: unknown) => {
    handleAxiosError(err);
    return;
  };

  useEffect(() => {
    async function loadUserFromCookies() {
      if (typeof document !== 'undefined') {
        const { healthProtection_token: token } = parseCookies();
        if (token && currentUserData) {
          setUser(currentUserData);
          setHasToken(true);
        }
      }
    }
    loadUserFromCookies();
  }, [isLoadingCurrentUserData, currentUserData]);

  useEffect(() => {
    async function loadCookies() {
      if (typeof document !== 'undefined') {
        const { healthProtection_token: token } = parseCookies();
        if (token) setHasToken(true);
        setCookieIsLoading(false);
      }
    }
    loadCookies();
  }, []);

  async function login(
    payload: Pick<PayloadLogin, 'username' | 'password'>,
    onValidateLogin: () => void,
  ) {
    const onSuccess = (response: PostLoginData['body']) => {
      const token = response?.access_token as string;
      setCookie(undefined, 'healthProtection_token', token);
      setHasToken(true);
      onValidateLogin();
    };
    await mutateLogin(
      {
        ...payload,
        client_id: process.env.NEXT_PUBLIC_AUTH_CLIENT_ID as string,
        client_secret: process.env.NEXT_PUBLIC_AUTH_CLIENT_SECRET as string,
        grant_type: 'password',
      },
      {
        onSuccess,
        onError,
      },
    );
  }

  async function register(payload: PayloadRegister, onValidateRegister: () => void) {
    const onSuccess = async (payloadLogin: Pick<PayloadLogin, 'username' | 'password'>) => {
      await login(payloadLogin, onValidateRegister);
    };

    await mutateRegister(payload, {
      onSuccess: () => onSuccess({ password: payload.password, username: payload.email }),
      onError,
    });
  }

  function signOut() {
    destroyCookie(undefined, 'healthProtection_token');
    setUser(null);
    setHasToken(false);
    router.push('/');
  }

  return (
    <AuthContext.Provider
      value={{
        isLoadingCurrentUserData,
        authenticationIsLoading,
        isAuthenticated: hasToken,
        registerIsLoading,
        errorCurrentUser,
        cookieIsLoading,
        loginIsLoading,
        register,
        signOut,
        login,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);
