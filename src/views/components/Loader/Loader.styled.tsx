import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  to {
      background-size: 100% 3px;
    }
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const StyledLoader = styled.div`
  width: fit-content;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 30px;
  padding-bottom: 8px;
  background: ${({ theme }) => `linear-gradient(${theme.colors.primary} 0 0) 0 100%/0% 3px no-repeat`};
  animation: ${animation} 2s linear infinite;

  &::before {
    content: 'Loading...';
    color: ${({ theme }) => theme.colors.primary};
  }
`;
