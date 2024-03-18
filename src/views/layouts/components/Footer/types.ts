import { FC, SVGProps } from 'react';

export type socialItem = {
  name: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  href: string;
};
