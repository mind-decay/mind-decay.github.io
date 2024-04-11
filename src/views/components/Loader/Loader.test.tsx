import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ThemeProvider } from 'context/ThemeContext';

import { Loader } from './Loader';

test('render Loader component', () => {
  const { getByTestId } = render(
    <ThemeProvider>
      <Loader />
    </ThemeProvider>,
  );

  const loader = getByTestId('loader');

  expect(loader).toBeInTheDocument();
  expect(loader).toMatchSnapshot();

  expect(loader).toHaveAttribute('data-testid', 'loader');
});
