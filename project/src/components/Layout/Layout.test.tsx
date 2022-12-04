import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Layout from '.';

describe('Layout', () => {
  test('renders Layout component', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
    const linkElement = screen.getByText(/2022/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders NavLinks', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
    const linkElement = screen.getByRole('navigation');
    expect(linkElement).toBeInTheDocument();
  });
});
