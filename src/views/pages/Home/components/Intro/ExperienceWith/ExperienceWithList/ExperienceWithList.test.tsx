import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ThemeProvider } from 'context/ThemeContext';

import { ExperienceWithList } from './ExperienceWithList';

import { SkillIcon } from '../types';

export const skillsIcons: SkillIcon[] = [
  {
    gradientId: '0',
    Icon: () => <svg></svg>,
  },
  {
    gradientId: '1',
    Icon: () => <svg></svg>,
  },
  {
    gradientId: '2',
    Icon: () => <svg></svg>,
  },
  {
    gradientId: '3',
    Icon: () => <svg></svg>,
  },
  {
    gradientId: '4',
    Icon: () => <svg></svg>,
  },
];

test('renders ExperienceWithList component', () => {
  const { container } = render(
    <ThemeProvider>
      <ExperienceWithList experiencesIcons={skillsIcons} />
    </ThemeProvider>,
  );

  expect(container).toMatchSnapshot();
});
