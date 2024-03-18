import { css } from 'styled-components';
import { fonts, screenBreakpoints } from './utils';

export const typography = {
  h1: css`
    font-size: 5.5rem;
    font-weight: 800;
    line-height: 1.15;
    text-align: inherit;

    @media screen and (max-width: ${screenBreakpoints.tablet}px) {
      font-size: 3rem;
    }

    @media screen and (max-width: ${screenBreakpoints.mobile}px) {
      font-size: 2.4rem;
    }
  `,
  h2: css`
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.15;
    text-align: inherit;

    @media screen and (max-width: ${screenBreakpoints.tablet}px) {
      font-size: 2.2rem;
    }
  `,
  h3: css`
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.15;
    text-align: inherit;

    @media screen and (max-width: ${screenBreakpoints.tablet}px) {
      font-size: 2rem;
    }
  `,
  h4: css`
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.15;
    text-align: inherit;

    @media screen and (max-width: ${screenBreakpoints.tablet}px) {
      font-size: 1.8rem;
    }
  `,
  text: css`
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: inherit;
  `,
  menu: css`
    ${fonts.sub}
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1;
    text-align: inherit;
  `,
  button: css`
    font-size: 2.1rem;
    font-weight: 600;
    line-height: 1.43;
    text-align: inherit;

    @media screen and (max-width: ${screenBreakpoints.tablet}px) {
      font-size: 1.8rem;
    }
  `,
} as const;
