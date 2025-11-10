import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders main navigation', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  
  // Check for navigation elements
  const navElement = screen.getByRole('navigation');
  expect(navElement).toBeInTheDocument();

  // Check for main content area
  const mainContent = screen.getByRole('main');
  expect(mainContent).toBeInTheDocument();
});
