import { DefaultTheme } from 'styled-components';

export const gradients = {
  mainGradient: 'linear-gradient(to right, hsl(14, 100%, 69%), hsl(270, 100%, 60%))',
  orangeGradient: 'linear-gradient(to bottom, hsl(14, 100%, 69%), hsl(14, 76%, 47%))',
  blueGradient: 'linear-gradient(to bottom, hsl(210, 100%, 68%), hsl(210, 83%, 45%))',
} as const;

const backdrop = 'rgba(30, 30, 30, 0.5)';

export const lightTheme: DefaultTheme = {
  colors: {
    primary: 'hsl(40, 7%, 8%)',
    secondary: 'hsl(0, 0%, 100%)',
    text: 'hsl(0, 2%, 10%)',
    subBG: 'hsl(0, 0%, 91%)',
    greyBG: 'hsl(0, 0%, 80%)',
    backdrop,
  },
  gradients: gradients,
} as const;

export const darkTheme: DefaultTheme = {
  colors: {
    primary: 'hsl(0, 0%, 100%)',
    secondary: 'hsl(40, 7%, 8%)',
    text: 'hsl(0, 0%, 77%)',
    subBG: 'hsl(0, 0%, 10%)',
    greyBG: 'hsl(0, 0%, 16%)',
    backdrop,
  },
  gradients: gradients,
  backdrop,
} as const;
