import { MobileNavBackdrop, MobileNavList, MobileNavWrapper, StyledMobileNav } from './MobileNav.styled';
import { HeaderMenuItem, MenuOption } from '../HeaderMenu';

import { useMedia } from 'hooks';

import { screenBreakpoints } from 'styles';

type MobileNavProps = {
  menuOptions: MenuOption[];
  isVisible: boolean;
  onClick: () => void;
};

export const MobileNav = ({ menuOptions, isVisible, onClick }: MobileNavProps) => {
  const isMobile = useMedia(`(max-width: ${screenBreakpoints.tablet}px)`);

  if (!isMobile) return null;

  return (
    <>
      <MobileNavWrapper $isVisible={isVisible}>
        <StyledMobileNav>
          <MobileNavList>
            {menuOptions.map(({ key, value }) => {
              return (
                <li key={key} onClick={onClick}>
                  <HeaderMenuItem to={key}>{value}</HeaderMenuItem>
                </li>
              );
            })}
          </MobileNavList>
        </StyledMobileNav>
      </MobileNavWrapper>
      <MobileNavBackdrop $isVisible={isVisible} onClick={onClick} />
    </>
  );
};
