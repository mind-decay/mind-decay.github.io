import { queryAllByRole, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ThemeProvider } from 'context/ThemeContext';

import { SkillsList } from './SkillsList';

const skillsData = ['HTML', 'CSS', 'SCSS'];

test('renders SkillsList based on array of skills', () => {
  const { getByRole } = render(
    <ThemeProvider>
      <SkillsList skillsData={skillsData} />
    </ThemeProvider>,
  );
  const list = getByRole('list');
  const listItems = queryAllByRole(list, 'listitem');

  expect(list).toBeInTheDocument();
  expect(listItems).toHaveLength(skillsData.length);
});
