import styled from 'styled-components';

export const StyledBurgerMenu = styled.button`
  order: 1;

  svg {
    display: flex;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transform: scaleX(-1);
    line {
      stroke: ${({ theme }) => theme.colors.primary};
      stroke-dasharray: 100%;
      stroke-dashoffset: 0%;
      transition:
        transform 0.3s,
        stroke-dashoffset 0.4s;
      transform-origin: center;
      stroke-width: 3px;

      &:first-child {
        transform: translateY(-35%);
      }

      &:nth-child(2) {
        transform: scaleX(1);
        transition:
          opacity 0.3s,
          transform 0.3s;
      }

      &:last-child {
        transform: translateY(33%);
        stroke-dasharray: 100%;
        stroke-dashoffset: 9px;
      }
    }
  }

  &:hover {
    svg {
      line {
        &:last-child {
          stroke-dashoffset: 0%;
        }
      }
    }
  }

  &.active {
    svg {
      line {
        &:first-child {
          transform: rotate(45deg);
          stroke-linecap: round;
        }

        &:nth-child(2) {
          transform: scaleX(0.1);
          opacity: 0;
        }

        &:last-child {
          transform: rotate(-45deg);
          stroke-linecap: round;
          stroke-dashoffset: 0%;
        }
      }
    }
  }
`;
