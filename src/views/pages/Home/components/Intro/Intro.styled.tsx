import styled from 'styled-components';
import { screenBreakpoints } from 'styles/utils';

export const IntroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 9rem;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: ${screenBreakpoints.tablet}px) {
    row-gap: 4rem;
  }
`;

export const IntroMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5.4rem;
  width: 100%;

  @media screen and (max-width: ${screenBreakpoints.tablet}px) {
    row-gap: 2rem;
  }
`;

export const IntroInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 4rem;
  width: 100%;
  text-align: center;

  @media screen and (max-width: ${screenBreakpoints.mobile}px) {
    row-gap: 2rem;
  }
`;

export const IntroImage = styled.div`
  display: flex;
  max-width: 250px;
`;

export const IntroButtons = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.8rem;

  @media screen and (max-width: ${screenBreakpoints.mobile}px) {
    flex-direction: column;
    row-gap: 2rem;
  }
`;
