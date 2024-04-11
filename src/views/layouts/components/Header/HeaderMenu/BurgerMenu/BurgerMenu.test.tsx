import { vi } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ThemeProvider } from 'context/ThemeContext';

import { BurgerMenu } from './BurgerMenu';

test('renders burger menu', () => {
  const handler = vi.fn();
  const { container } = render(
    <ThemeProvider>
      <BurgerMenu isVisible={true} onClick={handler} />
    </ThemeProvider>,
  );

  expect(container).toMatchSnapshot();
});
