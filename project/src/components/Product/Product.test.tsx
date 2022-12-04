import React from 'react';
import { render, screen } from '@testing-library/react';

import Product from 'components/Product';

const mockFields = {
  title: 'Title',
  currentPrice: '100',
  oldPrice: '200',
  img: 'file.png',
  description: 'Product description',
  bestBefore: '2024-04-04',
  productType: 'resale',
  promo: 'promoYes',
  delivery: 'post',
  id: '123',
};

const mockFn = jest.fn();

describe('Product', () => {
  test('matches snapshot', () => {
    const product = render(<Product {...mockFields} onClick={mockFn} />);
    expect(product).toMatchSnapshot();
  });

  test('renders without optional param Old price', () => {
    render(<Product {...mockFields} onClick={mockFn} oldPrice="" />);
    expect(screen.queryByText(/old price:/i)).not.toBeInTheDocument();
  });

  test('renders without optional param Description', () => {
    render(<Product {...mockFields} onClick={mockFn} description="" />);
    expect(screen.getByTestId('productDescription')).toHaveTextContent(/no description/i);
  });
});
