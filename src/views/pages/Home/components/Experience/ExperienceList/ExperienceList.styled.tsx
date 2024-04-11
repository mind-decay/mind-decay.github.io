import styled from 'styled-components';

import { screenBreakpoints } from 'styles';

export const StyledExperienceList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 7rem;
  width: 100%;

  @media screen and (max-width: ${screenBreakpoints.tablet}px) {
    row-gap: 3rem;
  }
`;

export const StyledExperienceItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  row-gap: 2.5rem;

  @media screen and (max-width: ${screenBreakpoints.tablet}px) {
    row-gap: 1.5rem;
  }
`;

export const ExperienceItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: ${screenBreakpoints.tablet}px) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1rem;
  }

  @media screen and (max-width: ${screenBreakpoints.xsMobile}px) {
    align-items: center;
  }
`;

export const ExperienceItemTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;

  @media screen and (max-width: ${screenBreakpoints.xsMobile}px) {
    flex-direction: column;
    row-gap: 1rem;
    text-align: center;
  }
`;

export const ExperienceItemTitleIcon = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 0.4rem;
  overflow: hidden;
`;
