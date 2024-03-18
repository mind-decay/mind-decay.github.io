import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'context/ThemeContext/ThemeContext';
import { RootComponent } from './RootComponent';

test('renders root component', () => {
  const { container } = render(
    <BrowserRouter>
      <ThemeProvider>
        <RootComponent />
      </ThemeProvider>
    </BrowserRouter>,
  );

  expect(container).toMatchSnapshot();
});
