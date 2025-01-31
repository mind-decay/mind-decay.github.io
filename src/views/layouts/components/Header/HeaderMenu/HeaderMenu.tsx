import { ThemeSwitcher } from 'views/components/ThemeSwitcher';
import { HeaderMenuItem, HeaderMenuWrapper, StyledHeaderMenu } from './HeaderMenu.styled';
import { BurgerMenu } from './BurgerMenu';

import { useMedia } from 'hooks';

import { MenuOption } from './types';

import { screenBreakpoints } from 'styles';

type HeaderMenuProps = {
  menuOptions: MenuOption[];
  isVisible: boolean;
  onClick: () => void;
};

export const HeaderMenu = ({ menuOptions, isVisible, onClick }: HeaderMenuProps) => {
  const isMobile = useMedia(`(max-width: ${screenBreakpoints.tablet}px)`);

  return (
    <HeaderMenuWrapper>
      {isMobile ? (
        <BurgerMenu isVisible={isVisible} onClick={onClick} />
      ) : (
        <StyledHeaderMenu>
          {menuOptions.map(({ key, value }) => {
            return (
              <li key={key}>
                <HeaderMenuItem to={key}>{value}</HeaderMenuItem>
              </li>
            );
          })}
        </StyledHeaderMenu>
      )}
      <ThemeSwitcher />
    </HeaderMenuWrapper>
  );
};
