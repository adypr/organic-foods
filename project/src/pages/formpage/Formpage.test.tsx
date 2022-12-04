import React from 'react';
import { render, screen } from '@testing-library/react';

import FormPage from 'pages/formpage';

describe('FormPage', () => {
  test('matches snapshot', () => {
    const form = render(<FormPage />);
    expect(form).toMatchSnapshot();
  });

  test('renders form', () => {
    render(<FormPage />);

    expect(
      screen.getByRole('heading', {
        name: /add your product/i,
      })
    ).toBeInTheDocument();
  });

  test('renders form-list', () => {
    render(<FormPage />);

    expect(
      screen.getByRole('heading', {
        name: /your goods/i,
      })
    ).toBeInTheDocument();
  });
});
