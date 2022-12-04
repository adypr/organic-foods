import React from 'react';
import { render, screen } from '@testing-library/react';

import CardList from 'components/CardList';
import goods from 'assets/goods';

describe('CardList', () => {
  test('renders CardList component', () => {
    render(<CardList items={goods} />);
    const linkElement = screen.getByText(/all goods/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders Cards in CardList', () => {
    render(<CardList items={goods} />);
    const linkElement = screen.getAllByTestId('card');
    expect(linkElement).toHaveLength(goods.length);
  });
});
