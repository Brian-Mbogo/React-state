import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the profile header and toggle button', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /person profile/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /show profile/i })).toBeInTheDocument();
  expect(screen.getByText(/mounted/i)).toBeInTheDocument();
});

test('toggles the person profile', () => {
  render(<App />);

  fireEvent.click(screen.getByRole('button', { name: /show profile/i }));
  expect(screen.getByRole('heading', { name: /john doe/i })).toBeInTheDocument();
  expect(screen.getByText(/software developer/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /hide profile/i }));
  expect(screen.queryByRole('heading', { name: /john doe/i })).not.toBeInTheDocument();
});
