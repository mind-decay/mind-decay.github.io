import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ThemeProvider } from 'context/ThemeContext/ThemeContext';

import { Footer } from './Footer';

test('renders footer', () => {
  const { container } = render(
    <ThemeProvider>
      <Footer />
    </ThemeProvider>,
  );

  expect(container).toMatchSnapshot();
});
