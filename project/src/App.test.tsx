import React from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('App', () => {
  test('renders App component', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const linkElement = screen.getByText(/organic foods/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('following links', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const aboutLink = screen.getByText(/about/i);
    userEvent.click(aboutLink);
    expect(screen.getByText(/about page/i)).toBeInTheDocument();
  });

  test('redirect to 404 page', () => {
    render(
      <MemoryRouter initialEntries={['/non-existent-page']}>
        <App />
      </MemoryRouter>
    );

    const element = screen.getByTestId('not-found-page');
    expect(element).toBeInTheDocument();
  });
});
