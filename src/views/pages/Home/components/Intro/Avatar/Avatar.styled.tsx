import styled, { css, keyframes } from 'styled-components';

const avatarSizeProperties = css`
  width: 250px;
  height: 250px;
`;

export const AvatarImageWrapper = styled.div`
  position: relative;
  display: flex;
  ${avatarSizeProperties}
`;

const skeletonAnimation = keyframes`
  100% {
        transform: translateX(100%);
      }
`;

export const AvatarSkeleton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  ${avatarSizeProperties}
  display: flex;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.greyBG};
  border-radius: 50%;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    ${avatarSizeProperties}
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      hsla(0, 0%, 100%, 0) 0,
      hsla(0, 0%, 100%, 0.2) 20%,
      hsla(0, 0%, 100%, 0.5) 60%,
      hsla(0, 0%, 100%, 0)
    );
    animation: ${skeletonAnimation} 3s infinite;
    content: '';
  }
`;
