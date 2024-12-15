'use client';

import { useEffect, useState } from 'react';
import { THEME } from '@/lib/config';

type MediaQueryKey = keyof typeof THEME.breakpoints;

export function useMediaQuery(breakpoint: MediaQueryKey) {
  const query = `(min-width: ${THEME.breakpoints[breakpoint]})`;
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [query, matches]);

  return matches;
}