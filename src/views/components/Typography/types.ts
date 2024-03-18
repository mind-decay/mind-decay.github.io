import { gradients } from 'styles/themes';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type VariantType = Exclude<HeadingLevel, 'h5' | 'h6'>;

export type GradientName = keyof typeof gradients;

export type H2TitleProps = {
  $gradient?: GradientName;
};
