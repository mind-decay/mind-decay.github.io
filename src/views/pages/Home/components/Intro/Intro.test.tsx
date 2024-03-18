import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'context/ThemeContext/ThemeContext';
import { Intro } from './Intro';
import { BrowserRouter } from 'react-router-dom';

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
