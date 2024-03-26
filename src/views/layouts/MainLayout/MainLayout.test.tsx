import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import MainLayout from './MainLayout';
import { ThemeProvider } from 'context/ThemeContext/ThemeContext';
import { BrowserRouter } from 'react-router-dom';

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
