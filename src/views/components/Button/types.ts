import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary';

type CommonType = {
  variant: ButtonVariant;
  children: ReactNode;
};

type AnchorTarget = '_target' | '_blank' | '_self' | '_parent' | '_top';

export type LinkType = CommonType &
  ButtonHTMLAttributes<HTMLButtonElement> & { onClick?: never; href?: never; target?: never; to: string };

export type ButtonType = CommonType &
  ButtonHTMLAttributes<HTMLButtonElement> & { onClick: () => void; href?: never; target?: never; to?: never };
export type AnchorType = CommonType &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    onClick?: never;
    href: string;
    target?: AnchorTarget;
    to?: never;
  };
