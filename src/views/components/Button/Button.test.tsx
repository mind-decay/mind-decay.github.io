import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';
import { ThemeProvider } from 'context/ThemeContext/ThemeContext';

describe('Button', () => {
  test('renders button with onClick handler', () => {
    const handleClick = jest.fn();
    const buttonText = 'Click me';

    const { getByText } = render(
      <ThemeProvider>
        <Button variant="primary" onClick={handleClick}>
          {buttonText}
        </Button>
      </ThemeProvider>,
    );
    const { click } = fireEvent;

    expect(getByText(buttonText)).toBeInTheDocument;
    expect(handleClick).toHaveBeenCalledTimes(0);
    click(getByText(buttonText));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders button as anchor', () => {
    const href = 'https://www.google.com';
    const { getByRole } = render(
      <ThemeProvider>
        <Button variant="primary" href={href}>
          Google
        </Button>
      </ThemeProvider>,
    );
    expect(getByRole('link')).toHaveAttribute('href', href);
  });
});
