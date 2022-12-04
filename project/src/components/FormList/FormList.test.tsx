import React from 'react';
import { render, screen } from '@testing-library/react';

import FormList from './index';
import userEvent from '@testing-library/user-event';

const mockFields = [
  {
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
  },
];

describe('FormList', () => {
  const mockFn = jest.fn();

  test('matches snapshot', () => {
    const formList = render(<FormList products={mockFields} onClick={mockFn} />);
    expect(formList).toMatchSnapshot();
  });

  test("doesn't renders any product item after initialization", () => {
    render(<FormList products={[]} onClick={mockFn} />);
    expect(screen.queryByTestId('productTitle')).not.toBeInTheDocument();
  });

  test('adds new product', () => {
    render(<FormList products={mockFields} onClick={mockFn} />);
    expect(screen.getByTestId('productTitle')).toBeInTheDocument();
  });

  test('call a function when the delete button is clicked', () => {
    render(<FormList products={mockFields} onClick={mockFn} />);
    userEvent.click(screen.getByTestId('closeButton'));
    expect(mockFn).toBeCalled();
  });

  test('renders message if list is empty', () => {
    render(<FormList products={[]} onClick={mockFn} />);
    expect(screen.getByText(/there're no items/i)).toBeInTheDocument();
  });

  test('renders message after deleting last product', () => {
    render(<FormList products={mockFields} onClick={mockFn} />);
    userEvent.click(screen.getByTestId('closeButton'));
    expect(screen.getByText(/there're no items/i)).toBeInTheDocument();
  });
});
