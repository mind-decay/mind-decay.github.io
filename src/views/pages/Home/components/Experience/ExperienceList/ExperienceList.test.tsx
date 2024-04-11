import { render, queryAllByRole } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ThemeProvider } from 'context/ThemeContext';

import { ExperienceList } from './ExperienceList';

import { ExperienceItem } from './types';

const experienceData: ExperienceItem[] = [
  {
    icons: ['Icon 0', 'Icon 0'],
    title: 'Senior Frontend-разработчик в Agro.Club',
    dateFrom: 'Октябрь 2022',
    dateTo: 'Февраль 2024',
    Description: () => <div></div>,
  },
  {
    icons: ['Icon 1', 'Icon 1'],
    title: 'Lead Frontend-разработчик в Sidewalk Developers Group',
    dateFrom: 'Май 2021',
    dateTo: 'Октябрь 2022',
    Description: () => <div></div>,
  },
  {
    icons: ['Icon 2', 'Icon 2'],
    title: 'Frontend-разработчик на фрилансе',
    dateFrom: 'Июнь 2019',
    dateTo: 'Май 2021',
    Description: () => <div></div>,
  },
];

test('render ExperienceList component based on data', () => {
  const { container } = render(
    <ThemeProvider>
      <ExperienceList experienceData={experienceData} />
    </ThemeProvider>,
  );

  const list = queryAllByRole(container, 'list');
  const listItems = queryAllByRole(list[0], 'listitem');

  expect(list[0]).toBeInTheDocument();
  expect(list[0]).toContainHTML(listItems[0].innerHTML);
});
