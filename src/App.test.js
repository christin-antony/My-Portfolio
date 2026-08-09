import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the hero greeting', () => {
  render(<App />);
  const greeting = screen.getByText(/hello, i'm/i);
  expect(greeting).toBeInTheDocument();
});
