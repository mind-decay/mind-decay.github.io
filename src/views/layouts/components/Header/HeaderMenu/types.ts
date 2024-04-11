import { menuRoutes } from './routes';

export type MenuOption = {
  key: (typeof menuRoutes)[keyof typeof menuRoutes];
  value: string;
};
