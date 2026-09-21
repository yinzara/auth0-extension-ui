import { useLocation, matchPath } from 'react-router';

// Replacement for the removed react-router v2 `router.isActive(route)`.
export default function useIsActive(route) {
  const { pathname } = useLocation();
  if (!route) return false;

  const path = route.charAt(0) === '/' ? route : `/${route}`;
  return !!matchPath({ path, end: false }, pathname);
}
