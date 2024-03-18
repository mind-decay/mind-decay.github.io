import styled from 'styled-components';
import { screenBreakpoints } from 'styles/utils';

export const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5.5rem;
  width: 100%;
  margin: 10rem 0;

  @media screen and (max-width: ${screenBreakpoints.tablet}px) {
    row-gap: 2rem;
    margin: 4rem 0;
  }
`;
