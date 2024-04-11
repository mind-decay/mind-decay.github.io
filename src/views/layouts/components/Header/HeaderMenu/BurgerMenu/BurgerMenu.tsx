import { StyledBurgerMenu } from './BurgerMenu.styled';

type BurgerMenuProps = {
  isVisible: boolean;
  onClick: () => void;
};

export const BurgerMenu = ({ isVisible, onClick }: BurgerMenuProps) => {
  return (
    <StyledBurgerMenu
      type="button"
      onClick={onClick}
      className={`${isVisible ? 'active' : ''}`}
      aria-label="Открыть меню"
    >
      <svg>
        <line x1="0" y1="50%" x2="100%" y2="50%" shapeRendering="crispEdges" />
        <line x1="0" y1="50%" x2="100%" y2="50%" shapeRendering="crispEdges" />
        <line x1="0" y1="50%" x2="100%" y2="50%" shapeRendering="crispEdges" />
      </svg>
    </StyledBurgerMenu>
  );
};
