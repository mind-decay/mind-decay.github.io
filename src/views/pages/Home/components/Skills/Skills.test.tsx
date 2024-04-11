import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ThemeProvider } from 'context/ThemeContext';

import { Skills } from './Skills';

test('renders Skills section', () => {
  const { container } = render(
    <ThemeProvider>
      <Skills />
    </ThemeProvider>,
  );

  expect(container).toMatchSnapshot();
});
