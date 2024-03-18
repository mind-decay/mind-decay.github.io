import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ExperienceWith } from './ExperienceWith';
import { ThemeProvider } from 'context/ThemeContext/ThemeContext';

test('renders ExperienceWith component', () => {
  const { container } = render(
    <ThemeProvider>
      <ExperienceWith />
    </ThemeProvider>,
  );

  expect(container).toMatchSnapshot();
});
