import { vi } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'context/ThemeContext';

import { HeaderMenu, mainMenuOptions } from './HeaderMenu';

test('renders header menu', () => {
  const handler = vi.fn();
  const isVisible = true;

  const { container } = render(
    <BrowserRouter>
      <ThemeProvider>
        <HeaderMenu isVisible={isVisible} onClick={handler} menuOptions={mainMenuOptions} />
      </ThemeProvider>
    </BrowserRouter>,
  );

  expect(container).toMatchSnapshot();
});
