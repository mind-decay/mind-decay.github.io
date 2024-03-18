import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './Header';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'context/ThemeContext/ThemeContext';

test('renders header', () => {
  const { container } = render(
    <BrowserRouter>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </BrowserRouter>,
  );

  expect(container).toMatchSnapshot();
});
