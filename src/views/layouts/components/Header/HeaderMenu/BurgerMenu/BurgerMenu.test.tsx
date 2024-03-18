import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BurgerMenu } from './BurgerMenu';

import { ThemeProvider } from 'context/ThemeContext/ThemeContext';

test('renders burger menu', () => {
  const handler = jest.fn();

  const { container } = render(
    <ThemeProvider>
      <BurgerMenu isVisible={true} onClick={handler} />
    </ThemeProvider>,
  );

  expect(container).toMatchSnapshot();
});
