import styled from 'styled-components';
import { typography } from 'styles/typography';
import { ButtonVariant } from './types';

export const StyledButton = styled.button<{ $variant: ButtonVariant }>`
  padding: 1.5rem 3rem;
  ${typography.button}
  border-radius: 5rem;
  color: ${({ theme, $variant: type }) => (type === 'primary' ? theme.colors.secondary : theme.colors.primary)};
  background-color: ${({ theme, $variant: type }) => (type === 'primary' ? theme.colors.primary : 'transparent')};
  border: solid 0.2rem ${({ theme }) => theme.colors.primary};
  transition: 0.2s ease-in-out;

  &:hover {
    color: ${({ theme, $variant: type }) => (type === 'primary' ? theme.colors.primary : theme.colors.secondary)};
    background-color: ${({ theme, $variant: type }) => (type === 'primary' ? 'transparent' : theme.colors.primary)};
  }
`;
