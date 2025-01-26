// This file contains tests for the App component, verifying the rendering of the profile name and download CV button.
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders profile name', () => {
  render(<App />);
  const profileName = screen.getByText(/Jyothi Prasanna Kambam/i);
  expect(profileName).toBeInTheDocument();
});

test('renders download CV button', () => {
  render(<App />);
  const downloadButton = screen.getByRole('button', { name: /download cv/i });
  expect(downloadButton).toBeInTheDocument();
});
