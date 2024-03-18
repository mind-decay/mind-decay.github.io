import { queryAllByRole, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { FooterSocials } from './FooterSocials';

import { ThemeProvider } from 'context/ThemeContext/ThemeContext';

import { socialItems } from '../Footer';

test('renders footer socials', () => {
  const { getByRole } = render(
    <ThemeProvider>
      <FooterSocials socials={socialItems} />
    </ThemeProvider>,
  );

  const list = getByRole('list');
  const listItem = queryAllByRole(list, 'listitem');

  expect(listItem).toHaveLength(socialItems.length);
});
