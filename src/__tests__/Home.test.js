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
  const welcomeImage = screen.getByAltText('logo');
  expect(welcomeImage).toBeInTheDocument();
});