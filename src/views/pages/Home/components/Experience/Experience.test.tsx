import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Experience } from './Experience';
import { ThemeProvider } from 'context/ThemeContext/ThemeContext';

test('renders Experience section', () => {
  const { container } = render(
    <ThemeProvider>
      <Experience />
    </ThemeProvider>,
  );

  expect(container).toMatchSnapshot();
});
