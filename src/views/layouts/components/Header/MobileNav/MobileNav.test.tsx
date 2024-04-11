import { vi } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { MobileNav } from './MobileNav';

import { mainMenuOptions } from '../HeaderMenu';

test('renders mobile nav', () => {
  const handler = vi.fn();
  const isVisible = true;

  const { container } = render(<MobileNav menuOptions={mainMenuOptions} isVisible={isVisible} onClick={handler} />);

  expect(container).toMatchSnapshot();
});
