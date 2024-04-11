import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'context/ThemeContext';

import MainLayout from './MainLayout';

test('renders main layout', () => {
  const { container } = render(
    <BrowserRouter>
      <ThemeProvider>
        <MainLayout />
      </ThemeProvider>
    </BrowserRouter>,
  );

  expect(container).toMatchSnapshot();
});
