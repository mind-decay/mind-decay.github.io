import styled from 'styled-components';

export const StyledThemeSwitcher = styled.button`
  display: flex;

  svg {
    width: 24px;
    height: auto;

    path {
      fill: ${({ theme }) => theme.colors.primary} !important;
    }
  }
`;
