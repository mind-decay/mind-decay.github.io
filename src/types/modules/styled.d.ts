import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      text: string;
      subBG: string;
      greyBG: string;
      backdrop: string;
    };
    gradients: {
      mainGradient: string;
      orangeGradient: string;
      blueGradient: string;
    };
  }
}
