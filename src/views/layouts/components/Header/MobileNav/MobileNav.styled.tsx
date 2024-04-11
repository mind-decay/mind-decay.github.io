import styled from 'styled-components';

export const MobileNavBackdrop = styled.div<{ $isVisible?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.backdrop};
`;

export const MobileNavWrapper = styled.aside<{ $isVisible?: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1001;
  width: 240px;
  padding: 4rem 2rem;
  transition: 0.3s ease-in-out;
  opacity: ${({ $isVisible }) => ($isVisible ? '1' : '0')};
  transform: translateX(${({ $isVisible }) => ($isVisible ? '0' : '100%')});
  background-color: ${({ theme }) => theme.colors.subBG};
`;

export const StyledMobileNav = styled.nav`
  display: flex;
`;

export const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 1.5rem;
`;
