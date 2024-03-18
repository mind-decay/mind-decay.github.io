import { useState } from 'react';

import { HeaderLogo, HeaderNav, HeaderWrapper } from './Header.styled';
import { HeaderMenu, mainMenuOptions } from './HeaderMenu/HeaderMenu';
import { MobileNav } from './MobileNav/MobileNav';

import { ReactComponent as Logo } from 'assets/images/Logo.svg';
import { menuRoutes } from './HeaderMenu/routes';

export const Header = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const handleMobileNavVisible = () => {
    setIsMobileNavVisible((prev) => !prev);
  };

  return (
    <>
      <HeaderWrapper>
        <HeaderNav>
          <HeaderLogo to={menuRoutes.Home}>
            <Logo />
          </HeaderLogo>
          <HeaderMenu isVisible={isMobileNavVisible} onClick={handleMobileNavVisible} menuOptions={mainMenuOptions} />
        </HeaderNav>
      </HeaderWrapper>

      <MobileNav menuOptions={mainMenuOptions} isVisible={isMobileNavVisible} onClick={handleMobileNavVisible} />
    </>
  );
};
