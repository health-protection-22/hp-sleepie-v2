import { useQuery } from '@tanstack/react-query';
import { userServices } from '..';

function handleQuery() {
  return userServices()
    .getCurrentUser()
    .then((res) => res.data.body);
}

export function useGetCurrentUserQuery(enabled: boolean) {
  const query = useQuery(['current-user'], handleQuery, {
    enabled,
    retry: 0,
  });

  return query;
}
