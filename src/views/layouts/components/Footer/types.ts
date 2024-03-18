import { FC, SVGProps } from 'react';

export type SocialItem = {
  name: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  href: string;
};
