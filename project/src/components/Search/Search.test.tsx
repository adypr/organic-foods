import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from 'components/Search';

const text = 'Some text';

const localStorageMock = (function () {
  const store: {
    [key: string]: string;
  } = {};

  return {
    getItem(key: string) {
      if (store[key]) return store[key];
    },

    setItem(key: string, value: string) {
      store[key] = value;
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('Search', () => {
  test('renders Search component', () => {
    render(<Search />);
    const linkElement = screen.getByLabelText(/search/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders Input field', () => {
    render(<Search />);
    const linkElement = screen.getByRole('textbox');
    expect(linkElement).toBeInTheDocument();
  });

  test('saves Search text to LocalStorage during component’s unmount', () => {
    const component = render(<Search />);
    userEvent.type(screen.getByRole('textbox'), text);
    component.unmount();
    render(<Search />);
    const linkElement = screen.getByRole('textbox');
    expect(linkElement).toContainHTML(text);
    expect(localStorage.getItem('searchValue')).toBe(text);
  });
});
