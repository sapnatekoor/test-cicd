import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('Testing presence of button', () => {
  render(<App />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});
