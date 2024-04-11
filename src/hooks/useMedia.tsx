import { useCallback, useLayoutEffect, useState } from 'react';

export const useMedia = (query: string): boolean => {
  const getMatch = (query: string) => {
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState<boolean>(false);

  const handleChange = useCallback(() => {
    setMatches(getMatch(query));
  }, [query]);

  useLayoutEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Fire at the first load
    handleChange();

    matchMedia.addEventListener('change', handleChange);

    return () => matchMedia.removeEventListener('change', handleChange);
  }, [query, handleChange]);

  return matches;
};
