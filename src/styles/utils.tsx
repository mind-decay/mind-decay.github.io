import { css } from 'styled-components';

export const screenBreakpoints = {
  xsMobile: 320,
  mobile: 570,
  tablet: 991,
  laptop: 1100,
  desktop: 1440,
} as const;

export const fonts = {
  main: css`
    font-family: 'Poppins', sans-serif;
  `,
  sub: css`
    font-family: 'Plus Jakarta Sans', sans-serif;
  `,
} as const;
