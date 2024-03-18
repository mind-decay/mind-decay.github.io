import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'context/ThemeContext/ThemeContext';
import { Intro } from './Intro';

test('renders Intro section', () => {
  const { container } = render(
    <ThemeProvider>
      <Intro />
    </ThemeProvider>,
  );

  expect(container).toMatchSnapshot();
});
