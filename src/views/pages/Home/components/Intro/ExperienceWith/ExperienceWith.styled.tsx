import styled from 'styled-components';
import { screenBreakpoints } from 'styles/utils';

export const ExperienceWithContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 4.8rem;

  @media screen and (max-width: ${screenBreakpoints.tablet}px) {
    row-gap: 2rem;
  }
`;

export const ExperienceWithTitle = styled.div`
  h2 {
    letter-spacing: 0.24rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.text};
  }
`;
