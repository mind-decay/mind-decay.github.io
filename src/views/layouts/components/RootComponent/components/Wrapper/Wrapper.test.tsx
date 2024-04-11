import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Wrapper } from './Wrapper';

test('renders wrapper for root component', () => {
  const { container } = render(<Wrapper>test 2</Wrapper>);

  expect(container).toMatchSnapshot();
});
