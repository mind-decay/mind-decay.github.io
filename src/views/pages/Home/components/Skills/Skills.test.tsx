import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Skills } from './Skills';

import { ThemeProvider } from 'context/ThemeContext/ThemeContext';

test('renders Skills section', () => {
  const { container } = render(
    <ThemeProvider>
      <Skills />
    </ThemeProvider>,
  );

  expect(container).toMatchSnapshot();
});
