import { useEffect } from 'react';

const SITE_NAME = 'SASC';

/** Sets document.title to "Page | SASC" (or just SASC on home). */
export function usePageTitle(pageTitle?: string) {
  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} | ${SITE_NAME}` : SITE_NAME;
  }, [pageTitle]);
}
