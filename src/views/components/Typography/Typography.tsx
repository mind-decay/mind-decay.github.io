import { ReactNode } from 'react';
import { GradientName, HeadingLevel, VariantType } from './types';
import { H1Title, H2Title, H3Title, H4Title } from './Typography.styled';

type TitleProps = {
  tag?: HeadingLevel;
  variant: VariantType;
  gradient?: GradientName;
  children: ReactNode;
};

export const Title = ({ variant, tag, gradient, children }: TitleProps) => {
  switch (variant) {
    case 'h1':
      return <H1Title as={tag}>{children}</H1Title>;
    case 'h2':
      return (
        <H2Title as={tag} $gradient={gradient}>
          {children}
        </H2Title>
      );
    case 'h3':
      return <H3Title as={tag}>{children}</H3Title>;
    case 'h4':
      return <H4Title as={tag}>{children}</H4Title>;
    default:
      return <H1Title as={tag}>{children}</H1Title>;
  }
};
