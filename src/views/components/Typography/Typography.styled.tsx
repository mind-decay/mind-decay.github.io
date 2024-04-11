import styled from 'styled-components';

import { getTitleGradient } from './utils';

import { H2TitleProps } from './types';

import { typography } from 'styles';

export const H1Title = styled.h1`
  ${typography.h1}
  color: ${({ theme }) => theme.colors.primary};

  mark {
    background: ${({ theme }) => theme.gradients.mainGradient};
    color: transparent;
    background-clip: text;
  }
`;

export const H2Title = styled.h2<H2TitleProps>`
  ${typography.h2}
  color: ${({ theme, $gradient }) => ($gradient ? 'transparent' : theme.colors.primary)};
  background: ${({ theme, $gradient }) => getTitleGradient(theme, $gradient)};
  background-clip: text;
`;

export const H3Title = styled.h3`
  ${typography.h3}
  color: ${({ theme }) => theme.colors.primary};
`;

export const H4Title = styled.h4`
  ${typography.h4}
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledText = styled.p`
  ${typography.text}
  color: ${({ theme }) => theme.colors.text};
`;
