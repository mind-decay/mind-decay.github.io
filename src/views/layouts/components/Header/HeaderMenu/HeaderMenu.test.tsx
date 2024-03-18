import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';

import { HeaderMenu, mainMenuOptions } from './HeaderMenu';

import { ThemeProvider } from 'context/ThemeContext/ThemeContext';

test('renders header menu', () => {
  const handler = jest.fn();
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
