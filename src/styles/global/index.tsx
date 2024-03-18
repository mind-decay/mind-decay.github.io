import { createGlobalStyle } from 'styled-components';
import { fontsCSS } from './fonts';
import { resetCSS } from './reset';
import { defaultStylesCSS } from './default';

export const GlobalStyles = createGlobalStyle`
  ${fontsCSS}
  ${resetCSS}
  ${defaultStylesCSS}
`;
