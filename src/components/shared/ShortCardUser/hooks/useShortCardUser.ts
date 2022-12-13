import { useAuthContext } from '../../../../contexts/Auth';

export function useShortCardUser() {
  const { user, isAuthenticated } = useAuthContext();

  return { isAuthenticated, user };
}
