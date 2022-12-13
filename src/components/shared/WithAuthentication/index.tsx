import React from 'react';

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import type { FC } from 'react';
import config from '../../../config';
import { useAuthContext } from '../../../contexts/Auth';

type withAuthenticationFn = (Component: FC) => FC;

const WithAuthentication: withAuthenticationFn = (Component) => {
  const Authenticated: FC = (): JSX.Element | null => {
    const { isAuthenticated, cookieIsLoading } = useAuthContext();
    const { users } = config.apiRoutes;
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated && !cookieIsLoading) router.push(users.login);
    }, [cookieIsLoading]);

    return isAuthenticated && !cookieIsLoading ? <Component /> : null;
  };

  return Authenticated;
};

export default WithAuthentication;
