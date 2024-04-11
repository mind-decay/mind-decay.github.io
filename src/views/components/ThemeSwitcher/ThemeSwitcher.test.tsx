import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ThemeProvider } from 'context/ThemeContext';

import { ThemeSwitcher } from './ThemeSwitcher';

test('renders theme switcher, and changes theme', () => {
  const { container } = render(
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>,
  );

  expect(container).toMatchSnapshot();
});
