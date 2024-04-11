import { render } from '@testing-library/react';

import { ThemeProvider } from 'context/ThemeContext';

import { Footer } from './Footer';

test('renders footer', () => {
  const { container } = render(
    <ThemeProvider>
      <Footer />
    </ThemeProvider>,
  );

  expect(container).toMatchSnapshot();
});
