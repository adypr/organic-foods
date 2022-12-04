import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Form from 'components/Form';

const mockFields = {
  title: 'Title',
  currentPrice: '100',
  oldPrice: '200',
  img: new File(['file'], 'file.png', { type: 'image/png' }),
  description: 'Product description',
  bestBefore: '2024-04-04',
};

describe('Form', () => {
  const mockFn = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    render(<Form onSubmit={mockFn} />);
  });

  test('matches snapshot', () => {
    const form = render(<Form onSubmit={mockFn} />);
    expect(form).toMatchSnapshot();
  });

  test('enables submit button after the first typing', () => {
    const submitButton = screen.getByRole('button', {
      name: /add product/i,
    });
    expect(submitButton).toBeDisabled();
    userEvent.type(
      screen.getByRole('textbox', {
        name: /title\*/i,
      }),
      mockFields.title
    );
    expect(submitButton).toBeEnabled();
  });

  test('disables submit button after form submitting', () => {
    const submitButton = screen.getByRole('button', {
      name: /add product/i,
    });
    userEvent.type(
      screen.getByRole('textbox', {
        name: /title\*/i,
      }),
      mockFields.title
    );
    expect(submitButton).toBeEnabled();
    userEvent.click(submitButton);
    expect(submitButton).toBeDisabled();
  });

  test('adds title', () => {
    const title = screen.getByRole('textbox', {
      name: /title\*/i,
    });
    userEvent.type(title, mockFields.title);
    expect(title).toHaveValue(mockFields.title);
  });

  test('chooses type of product', () => {
    const productType = screen.getByRole('combobox', {
      name: /type of product\*/i,
    });
    userEvent.selectOptions(productType, ['resale']);
    expect(productType).toHaveValue('resale');
  });

  test('adds current price', () => {
    const currentPrice = screen.getByRole('spinbutton', {
      name: /current price\*/i,
    });
    userEvent.type(currentPrice, mockFields.currentPrice);
    expect(currentPrice).toHaveValue(+mockFields.currentPrice);
  });

  test('adds old price', () => {
    const oldPrice = screen.getByRole('spinbutton', {
      name: /old price/i,
    });
    userEvent.type(oldPrice, mockFields.oldPrice);
    expect(oldPrice).toHaveValue(+mockFields.oldPrice);
  });

  test('chooses promo', () => {
    const promo = screen.getByRole('radio', {
      name: /yes/i,
    });
    userEvent.click(promo);
    expect(promo).toBeChecked();
  });

  test('uploads image file', () => {
    const imgInput = screen.getByLabelText(/choose image/i);
    userEvent.upload(imgInput, mockFields.img);
    expect(((imgInput as HTMLInputElement).files as FileList)[0]).toStrictEqual(mockFields.img);
  });

  test('adds description', () => {
    const description = screen.getByRole('textbox', {
      name: /description/i,
    });
    userEvent.type(description, mockFields.description);
    expect(description).toHaveValue(mockFields.description);
  });

  test('adds best before date', () => {
    const date = screen.getByLabelText(/best before date\*/i);
    userEvent.type(date, mockFields.bestBefore);
    expect(date).toHaveValue(mockFields.bestBefore);
  });

  test('checks delivery options', () => {
    const pickup = screen.getByRole('checkbox', {
      name: /pickup/i,
    });
    const courier = screen.getByRole('checkbox', {
      name: /courier/i,
    });
    const post = screen.getByRole('checkbox', {
      name: /post/i,
    });

    userEvent.click(pickup);
    userEvent.click(courier);
    userEvent.click(post);

    expect(pickup).toBeChecked();
    expect(courier).toBeChecked();
    expect(post).toBeChecked();
  });

  test("adds error message if field didn't pass validation", () => {
    const submitButton = screen.getByRole('button', {
      name: /add product/i,
    });
    const title = screen.getByRole('textbox', {
      name: /title\*/i,
    });
    userEvent.type(title, 's');
    userEvent.click(submitButton);

    expect((title as HTMLInputElement).value).toHaveLength(1);
    expect(submitButton).toBeDisabled();

    expect(screen.getByText(/current price\*/i)).toHaveClass('form__error');
  });

  test('submits when all fields pass validation', () => {
    const submitButton = screen.getByRole('button', {
      name: /add product/i,
    });

    const title = screen.getByRole('textbox', {
      name: /title\*/i,
    });
    userEvent.type(title, mockFields.title);

    const productType = screen.getByRole('combobox', {
      name: /type of product\*/i,
    });
    userEvent.selectOptions(productType, ['resale']);

    const currentPrice = screen.getByRole('spinbutton', {
      name: /current price\*/i,
    });
    userEvent.type(currentPrice, mockFields.currentPrice);

    const oldPrice = screen.getByRole('spinbutton', {
      name: /old price/i,
    });
    userEvent.type(oldPrice, mockFields.oldPrice);

    const promo = screen.getByRole('radio', {
      name: /yes/i,
    });
    userEvent.click(promo);

    const imgInput = screen.getByLabelText(/choose image/i);
    userEvent.upload(imgInput, mockFields.img);

    const description = screen.getByRole('textbox', {
      name: /description/i,
    });
    userEvent.type(description, mockFields.description);

    const date = screen.getByLabelText(/best before date\*/i);
    userEvent.type(date, mockFields.bestBefore);

    const pickup = screen.getByRole('checkbox', {
      name: /pickup/i,
    });
    userEvent.click(pickup);

    expect(submitButton).toBeEnabled();
    userEvent.click(submitButton);

    expect(mockFn).toBeCalled();
  });
});
