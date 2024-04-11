import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ThemeProvider } from 'context/ThemeContext';

import { Experience } from './Experience';

test('renders Experience section', () => {
  const { container } = render(
    <ThemeProvider>
      <Experience />
    </ThemeProvider>,
  );

  expect(container).toMatchSnapshot();
});
