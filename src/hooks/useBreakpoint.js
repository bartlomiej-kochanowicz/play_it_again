import { useState, useEffect } from 'react';
import { theme } from 'theme/mainTheme';

/**
 * useBreakpoint - hook to get information about media query in js
 * @param {string} name - name of media query
 * @param {string} type - type of media query
 * @returns {bool} return true if media query is range
 */
export const useBreakpoint = (name, type) => {
  const pixels = theme.breakpoints[name];

  const getMatchMediaQuery = mediaType => {
    if (mediaType === 'min') {
      return `(min-width: ${pixels}px)`;
    }

    return `(max-width: ${pixels}px)`;
  };

  const matchMediaQuery = getMatchMediaQuery(type);

  const [match, setMatch] = useState(
    typeof window !== 'undefined'
      ? window.matchMedia(matchMediaQuery).matches
      : false
  );

  useEffect(() => {
    const onMatch = event => setMatch(event.matches);

    const matcher = window.matchMedia(matchMediaQuery);

    matcher.addListener(onMatch);

    return () => matcher.removeListener(onMatch);
  }, [pixels]);

  return match;
};
