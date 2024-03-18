import { useMedia } from 'hooks/useMedia';
import { MobileNavBackdrop, MobileNavList, MobileNavWrapper, StyledMobileNav } from './MobileNav.styled';
import { screenBreakpoints } from 'styles/utils';
import { MenuOption } from '../HeaderMenu/types';
import { HeaderMenuItem } from '../HeaderMenu/HeaderMenu.styled';

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
