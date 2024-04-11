import { css } from 'styled-components';

import PoppinsRegular from 'assets/fonts/Poppins-Regular.ttf';
import PoppinsRegularWOFF from 'assets/fonts/Poppins-Regular.woff';
import PoppinsRegularWOFF2 from 'assets/fonts/Poppins-Regular.woff2';
import PoppinsBold from 'assets/fonts/Poppins-Bold.ttf';
import PoppinsBoldWOFF from 'assets/fonts/Poppins-Bold.woff';
import PoppinsBoldWOFF2 from 'assets/fonts/Poppins-Bold.woff2';
import PoppinsSemiBold from 'assets/fonts/Poppins-SemiBold.ttf';
import PoppinsSemiBoldWOFF from 'assets/fonts/Poppins-SemiBold.woff';
import PoppinsSemiBoldWOFF2 from 'assets/fonts/Poppins-SemiBold.woff2';
import PoppinsExtraBold from 'assets/fonts/Poppins-ExtraBold.ttf';
import PoppinsExtraBoldWOFF from 'assets/fonts/Poppins-ExtraBold.woff';
import PoppinsExtraBoldWOFF2 from 'assets/fonts/Poppins-ExtraBold.woff2';
import PlusJakartaSansMedium from 'assets/fonts/PlusJakartaSans-Medium.ttf';
import PlusJakartaSansMediumWOFF from 'assets/fonts/PlusJakartaSans-Medium.woff';
import PlusJakartaSansMediumWOFF2 from 'assets/fonts/PlusJakartaSans-Medium.woff2';
import PoppinsLight from 'assets/fonts/Poppins-Light.ttf';
import PoppinsLightWOFF from 'assets/fonts/Poppins-Light.woff';
import PoppinsLightWOFF2 from 'assets/fonts/Poppins-Light.woff2';

export const fontsCSS = css`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src:
      url(${PoppinsLightWOFF2}) format('woff2'),
      url(${PoppinsLightWOFF}) format('woff'),
      url(${PoppinsLight}) format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src:
      url(${PoppinsRegularWOFF2}) format('woff2'),
      url(${PoppinsRegularWOFF}) format('woff'),
      url(${PoppinsRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src:
      url(${PoppinsSemiBoldWOFF2}) format('woff2'),
      url(${PoppinsSemiBoldWOFF}) format('woff'),
      url(${PoppinsSemiBold}) format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src:
      url(${PoppinsBoldWOFF2}) format('woff2'),
      url(${PoppinsBoldWOFF}) format('woff'),
      url(${PoppinsBold}) format('truetype');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src:
      url(${PoppinsExtraBoldWOFF2}) format('woff2'),
      url(${PoppinsExtraBoldWOFF}) format('woff'),
      url(${PoppinsExtraBold}) format('truetype');
  }

  @font-face {
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src:
      url(${PlusJakartaSansMediumWOFF2}) format('woff2'),
      url(${PlusJakartaSansMediumWOFF}) format('woff'),
      url(${PlusJakartaSansMedium}) format('truetype');
  }
`;
