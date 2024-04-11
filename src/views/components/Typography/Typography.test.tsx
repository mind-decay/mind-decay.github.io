import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ThemeProvider } from 'context/ThemeContext';

import { Title } from './Typography';
import { Text } from '.';

import { gradients } from 'styles/themes';

describe('Title', () => {
  test('renders Title with h1 tag', () => {
    const { getByRole } = render(
      <ThemeProvider>
        <Title variant="h1" tag="h1">
          Title
        </Title>
      </ThemeProvider>,
    );
    const title = getByRole('heading', { level: 1 });

    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('H1');
    expect(title.textContent).toBe('Title');
  });

  test('renders Title with h2 tag and gradient', () => {
    const { getByRole } = render(
      <ThemeProvider>
        <Title variant="h2" tag="h2" gradient="mainGradient">
          Title
        </Title>
      </ThemeProvider>,
    );
    const title = getByRole('heading', { level: 2 });

    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('H2');
    expect(title.textContent).toBe('Title');
    expect(title).toHaveStyle({ 'background-image': `${gradients.mainGradient}` });
  });

  test('renders Text', () => {
    const { getByText } = render(
      <ThemeProvider>
        <Text>Text</Text>
      </ThemeProvider>,
    );
    const text = getByText('Text');

    expect(text).toBeInTheDocument();
    expect(text.tagName).toBe('P');
    expect(text.textContent).toBe('Text');
  });
});
