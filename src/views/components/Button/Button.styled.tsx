import styled, { css } from 'styled-components';
import { typography } from 'styles/typography';
import { ButtonVariant } from './types';
import { Link } from 'react-router-dom';

const buttonStyles = css`
  padding: 1.5rem 3rem;
  ${typography.button}
  border-radius: 5rem;
  transition: 0.2s ease-in-out;
  border: solid 0.2rem ${({ theme }) => theme.colors.primary};
`;

const primaryButtonStyles = css`
  ${buttonStyles}
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: transparent;
  }
`;

const secondaryButtonStyles = css`
  ${buttonStyles}
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledButton = styled.button<{ $variant: ButtonVariant }>`
  ${({ $variant }) => ($variant === 'primary' ? primaryButtonStyles : secondaryButtonStyles)}
`;

export const StyledAnchor = styled.a<{ $variant: ButtonVariant }>`
  ${({ $variant }) => ($variant === 'primary' ? primaryButtonStyles : secondaryButtonStyles)}
`;

export const StyledLink = styled(Link)<{ $variant: ButtonVariant }>`
  ${({ $variant }) => ($variant === 'primary' ? primaryButtonStyles : secondaryButtonStyles)}
`;
