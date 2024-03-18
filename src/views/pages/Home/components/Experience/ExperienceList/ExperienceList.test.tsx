import { render, queryAllByRole } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'context/ThemeContext/ThemeContext';

import { ExperienceList } from './ExperienceList';
import { experienceData } from '../Experience';

test('render ExperienceList component based on data', () => {
  const { container } = render(
    <ThemeProvider>
      <ExperienceList experienceData={experienceData} />
    </ThemeProvider>,
  );

  const list = queryAllByRole(container, 'list');
  const listItems = queryAllByRole(container, 'listitem');

  expect(list[0]).toBeInTheDocument();
  expect(listItems).toHaveLength(experienceData.length);
});
