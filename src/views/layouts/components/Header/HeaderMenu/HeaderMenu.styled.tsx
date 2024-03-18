import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { typography } from 'styles/typography';
import { screenBreakpoints } from 'styles/utils';

export const HeaderMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 7rem;

  @media screen and (max-width: ${screenBreakpoints.tablet}px) {
    column-gap: 3rem;
  }
`;

export const StyledHeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 7rem;
`;

export const HeaderMenuItem = styled(NavLink)`
  position: relative;
  ${typography.menu};
  color: ${({ theme }) => theme.colors.primary};
  transition: 0.2s ease-in-out;

  &::before {
    position: absolute;
    content: '';
    bottom: -0.5rem;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: 0.2s ease-in-out;
  }

  &:hover,
  &:focus-visible {
    &::before {
      width: 100%;
    }
  }
`;
