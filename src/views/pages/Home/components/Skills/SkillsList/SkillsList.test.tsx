import { queryAllByRole, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { SkillsList } from './SkillsList';

import { skillsData } from '../Skills';
import { ThemeProvider } from 'context/ThemeContext/ThemeContext';

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
