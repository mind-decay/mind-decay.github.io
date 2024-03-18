import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ExperienceWithList, skillsIcons } from './ExperienceWithList';
import { ThemeProvider } from 'context/ThemeContext/ThemeContext';

test('renders ExperienceWithList component', () => {
  const { container } = render(
    <ThemeProvider>
      <ExperienceWithList experiencesIcons={skillsIcons} />
    </ThemeProvider>,
  );

  expect(container).toMatchSnapshot();
});
