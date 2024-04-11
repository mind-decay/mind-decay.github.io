import styled from 'styled-components';

export const FooterSocialsList = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 2.7rem;
`;

export const FooterSocialsItem = styled.li`
  display: flex;
  transform: scale(1);
  transition: 0.3s ease-in-out;

  svg {
    width: 24px;
    height: auto;

    path {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  a {
    display: flex;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
