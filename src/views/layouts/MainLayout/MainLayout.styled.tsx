import styled, { css } from 'styled-components';

import { screenBreakpoints } from 'styles';

export const MainLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  width: 100%;
`;

const commonCSS = css`
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
`;

export const MainLayoutContentWrapper = styled.div`
  ${commonCSS}
  background-color: ${({ theme }) => theme.colors.secondary};
`;
export const MainLayoutContent = styled.main`
  ${commonCSS}
  width: 100%;
  max-width: ${screenBreakpoints.laptop}px;
  padding: 10rem 4rem;
  margin: 0 auto;

  @media screen and (max-width: ${screenBreakpoints.tablet}px) {
    padding: 2rem;
  }
`;
