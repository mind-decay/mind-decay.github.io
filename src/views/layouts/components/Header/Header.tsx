import { useState } from 'react';

import { HeaderLogo, HeaderNav, HeaderWrapper } from './Header.styled';
import { HeaderMenu, mainMenuOptions, menuRoutes } from './HeaderMenu';
import { MobileNav } from './MobileNav';

import Logo from 'assets/images/Logo.svg?react';

export const Header = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const handleMobileNavVisible = () => {
    setIsMobileNavVisible((prev) => !prev);
  };

  return (
    <>
      <HeaderWrapper>
        <HeaderNav>
          <HeaderLogo to={menuRoutes.Home} aria-label="Логотип при нажатии на который прокручивает до секции Интро">
            <Logo />
          </HeaderLogo>

          <HeaderMenu isVisible={isMobileNavVisible} onClick={handleMobileNavVisible} menuOptions={mainMenuOptions} />
        </HeaderNav>
      </HeaderWrapper>

      <MobileNav menuOptions={mainMenuOptions} isVisible={isMobileNavVisible} onClick={handleMobileNavVisible} />
    </>
  );
};
