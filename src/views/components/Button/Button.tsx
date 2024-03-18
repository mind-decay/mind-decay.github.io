import { StyledAnchor, StyledButton, StyledLink } from './Button.styled';
import { AnchorType, ButtonType, LinkType } from './types';

type ButtonProps = ButtonType | AnchorType | LinkType;

export const Button = ({ variant, onClick, href, target, to, children }: ButtonProps) => {
  if (to) {
    return (
      <StyledLink to={to} $variant={variant}>
        {children}
      </StyledLink>
    );
  }

  if (href) {
    return (
      <StyledAnchor href={href} target={target} $variant={variant}>
        {children}
      </StyledAnchor>
    );
  }

  return (
    <StyledButton onClick={onClick} $variant={variant}>
      {children}
    </StyledButton>
  );
};
