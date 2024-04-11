import { useState } from 'react';

import { AvatarImageWrapper, AvatarSkeleton } from './Avatar.styled';

import { screenBreakpoints } from 'styles';

import AvatarImage from 'assets/images/Avatar.png';
import AvatarImageWebp from 'assets/images/Avatar.webp';
import AvatarImage2x from 'assets/images/Avatar2x.png';
import AvatarImage2xWebp from 'assets/images/Avatar2x.webp';

export const Avatar = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <AvatarImageWrapper>
      {!isLoaded && <AvatarSkeleton aria-label="Avatar is loading, please wait..." />}

      <picture>
        <source
          srcSet={`${AvatarImageWebp} 250w, ${AvatarImage2xWebp} 375w`}
          type="image/webp"
          sizes={`(max-width: ${screenBreakpoints.tablet}px) 250px, 375px`}
        />

        <img
          srcSet={`${AvatarImage} 250w, ${AvatarImage2x} 375w`}
          sizes={`(max-width: ${screenBreakpoints.tablet}px) 250px, 375px`}
          src={AvatarImage}
          alt="My simple avatar"
          width={250}
          height={250}
          onLoad={() => setIsLoaded(true)}
        />
      </picture>
    </AvatarImageWrapper>
  );
};
