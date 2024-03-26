import { DefaultTheme } from 'styled-components';

import { GradientName } from './types';
import { MaybeUndefined } from 'types/helpers';

export const getTitleGradient = (theme: DefaultTheme, gradient: MaybeUndefined<GradientName>) => {
  switch (gradient) {
    case 'mainGradient':
      return theme.gradients.mainGradient;
    case 'orangeGradient':
      return theme.gradients.orangeGradient;
    case 'blueGradient':
      return theme.gradients.blueGradient;
    default:
      return 'none';
  }
};
