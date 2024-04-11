import { MenuOption } from './types';

import { menuRoutes } from './routes';

export const mainMenuOptions: MenuOption[] = [
  {
    key: menuRoutes.Home,
    value: 'Интро',
  },
  {
    key: menuRoutes.Skills,
    value: 'Навыки',
  },
  {
    key: menuRoutes.Experience,
    value: 'Опыт',
  },
  {
    key: menuRoutes.Contact,
    value: 'Связаться',
  },
];
