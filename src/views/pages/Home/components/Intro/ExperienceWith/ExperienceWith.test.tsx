import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ThemeProvider } from 'context/ThemeContext';

import { ExperienceWith } from './ExperienceWith';

test('renders ExperienceWith component', () => {
  const { container } = render(
    <ThemeProvider>
      <ExperienceWith />
    </ThemeProvider>,
  );

  expect(container).toMatchSnapshot();
});
