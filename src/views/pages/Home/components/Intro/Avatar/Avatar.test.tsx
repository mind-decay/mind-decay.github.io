import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ThemeProvider } from 'context/ThemeContext';

import { Avatar } from './Avatar';

test('renders Avatar component with image inside', () => {
  const { getByAltText } = render(
    <ThemeProvider>
      <Avatar />
    </ThemeProvider>,
  );

  expect(getByAltText('My simple avatar')).toBeInTheDocument();
  expect(getByAltText('My simple avatar').tagName).toBe('IMG');
});
