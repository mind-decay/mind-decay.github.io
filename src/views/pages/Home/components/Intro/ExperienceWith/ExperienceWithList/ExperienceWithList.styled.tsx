import { ThemeType } from 'context/ThemeContext/types';
import styled from 'styled-components';
import { screenBreakpoints } from 'styles/utils';

export const StyledExperienceWithList = styled.ul<{ $itemsCount?: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $itemsCount }) => ($itemsCount ? $itemsCount : 'auto-fit')}, max-content);
  column-gap: 6rem;
  list-style: none;

  @media screen and (max-width: ${screenBreakpoints.mobile}px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 3rem;
    row-gap: 1rem;
  }
`;

export const ExperienceWithItem = styled.li<{ $gradientId: string; $currentTheme: ThemeType }>`
  transform: scale(1);
  transition: 0.3s ease-in-out;

  svg {
    path {
      fill: ${({ $gradientId: gradientId, $currentTheme: currentTheme }) =>
        currentTheme === 'dark' ? `url(#${gradientId}_dark)` : `url(#${gradientId}_light)`};
    }
  }

  &:hover {
    transform: scale(1.1);
  }
`;
