import styled from 'styled-components';

import { screenBreakpoints } from 'styles';

export const ExperienceContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5.5rem;
  width: 100%;

  @media screen and (max-width: ${screenBreakpoints.tablet}px) {
    row-gap: 2rem;
  }
`;
