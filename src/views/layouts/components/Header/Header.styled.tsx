import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { screenBreakpoints } from 'styles/utils';

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.subBG};
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  max-width: ${screenBreakpoints.laptop}px;
  padding: 2.5rem 4rem;
  margin: 0 auto;

  @media screen and (max-width: ${screenBreakpoints.tablet}px) {
    padding: 2rem;
  }
`;

export const HeaderLogo = styled(Link)`
  display: flex;

  svg {
    width: 40px;
    height: auto;

    g {
      g {
        path {
          fill: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`;
