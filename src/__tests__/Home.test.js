import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('renders welcome message', () => {
  render(<Home />);
  const welcomeMessage = screen.getByText(/Welcome to/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('renders welcome image', () => {
  render(<Home />);

  const welcomeImage = screen.getByRole('heading', {
    name: /welcome to pixiel palace/i
  })
  expect(welcomeImage).toBeInTheDocument();
});