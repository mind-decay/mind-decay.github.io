import { StyledButton } from './Button.styled';
import { AnchorType, ButtonType } from './types';

type ButtonProps = ButtonType | AnchorType;

export const Button = ({ variant, onClick, href, target, children }: ButtonProps) => {
  if (href) {
    return (
      <StyledButton as="a" href={href} target={target} $variant={variant}>
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledButton onClick={onClick} $variant={variant}>
      {children}
    </StyledButton>
  );
};
