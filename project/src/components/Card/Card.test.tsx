import React from 'react';
import { render, screen } from '@testing-library/react';

import Card from 'components/Card';
import { Item } from 'assets/goods';

const data: Item = {
  id: 11,
  title: 'potato',
  image: '/images/potato.png',
  price: 9,
  count: 0,
};

const dataWithOptionalParams: Item = {
  id: 11,
  title: 'potato',
  image: '/images/potato.png',
  price: 9,
  oldPrice: 11,
  count: 0,
  status: 'sale',
};

describe('renders Card element', () => {
  test('renders Search component', () => {
    render(<Card {...data} />);
    const linkElement = screen.getByTestId('card');
    expect(linkElement).toBeInTheDocument();
  });

  test('renders Card image', () => {
    render(<Card {...data} />);
    const linkElement = screen.getByRole('img');
    expect(linkElement).toBeInTheDocument();
  });

  test('renders Card without optional param Status', () => {
    render(<Card {...data} />);
    const linkElement = screen.queryByTestId('status');
    expect(linkElement).toBeNull();
  });

  test('renders Card without optional param Old Price', () => {
    render(<Card {...data} />);
    const linkElement = screen.queryByTestId('old-price');
    expect(linkElement).toBeNull();
  });

  test('renders Card with optional param Status', () => {
    render(<Card {...dataWithOptionalParams} />);
    const linkElement = screen.getByTestId('status');
    expect(linkElement).toBeInTheDocument();
  });

  test('renders Card with optional param Old Price', () => {
    render(<Card {...dataWithOptionalParams} />);
    const linkElement = screen.getByTestId('old-price');
    expect(linkElement).toBeInTheDocument();
  });
});
