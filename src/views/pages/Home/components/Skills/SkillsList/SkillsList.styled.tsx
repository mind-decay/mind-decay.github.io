import styled from 'styled-components';

import { typography } from 'styles';

export const StyledSkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: 100%;
`;

export const StyledSkillsItem = styled.li`
  position: relative;
  z-index: 1;
  display: flex;
  flex-grow: 0;
  padding: 0.8rem;
  ${typography.text}
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.greyBG};
  border-radius: 0.4rem;
  overflow: hidden;

  span {
    position: relative;
    z-index: 2;
  }

  &::before {
    position: absolute;
    display: block;
    bottom: -45px;
    right: -60px;
    width: 50px;
    height: 50px;
    border-radius: 4rem;
    content: '';
    background: ${({ theme }) => theme.gradients.mainGradient};
    filter: blur(12px);
    transition: 0.35s ease-in-out;
  }

  &:hover {
    &::before {
      transform: translate(-40px, -20px);
    }
  }
`;
