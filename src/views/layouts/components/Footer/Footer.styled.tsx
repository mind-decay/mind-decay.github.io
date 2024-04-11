import styled from 'styled-components';

import { screenBreakpoints, typography } from 'styles';

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.subBG};
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${screenBreakpoints.laptop}px;
  padding: 8rem 2rem 10rem;
  margin: 0 auto;

  @media screen and (max-width: ${screenBreakpoints.tablet}px) {
    padding: 4rem 2rem;
    flex-direction: column;
    row-gap: 1rem;
  }
`;

export const FooterTitle = styled.div`
  margin-bottom: 3.5rem;

  @media screen and (max-width: ${screenBreakpoints.tablet}px) {
    margin-bottom: 2rem;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 2.4rem;
  margin-bottom: 4rem;

  p {
    max-width: 675px;
  }

  @media screen and (max-width: ${screenBreakpoints.tablet}px) {
    margin-bottom: 2rem;
  }
`;

export const FooterEmailWrapper = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 0.55rem;
  transition: 0.2s ease-in-out;

  svg {
    width: 16.5px;
    height: 16.5px;

    path {
      stroke: ${({ theme }) => theme.colors.primary};
    }
  }

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

export const FooterEmail = styled.span`
  ${typography.text}
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;
