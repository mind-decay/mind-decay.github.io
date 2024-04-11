import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'context/ThemeContext';

import { Intro } from './Intro';

test('renders Intro section', () => {
  const { container } = render(
    <BrowserRouter>
      <ThemeProvider>
        <Intro />
      </ThemeProvider>
    </BrowserRouter>,
  );

  expect(container).toMatchSnapshot();
});
