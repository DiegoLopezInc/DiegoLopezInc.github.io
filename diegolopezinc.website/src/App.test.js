import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Diego Lopez', () => {
  render(<App />);
  const headerElement = screen.getByText(/Diego Lopez/i);
  expect(headerElement).toBeInTheDocument();
});