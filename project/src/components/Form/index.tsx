import React from 'react';
import { FormProps, FormFields } from 'base/types';
import validateFields from './validateFields';
import InputGroup from 'components/InputGroup';

import './_form.scss';

const Form = ({ onSubmit }: FormProps) => {
  let currentErrorFields: string[] = [];

  const handleSubmit: React.FormEventHandler<HTMLFormElement & FormFields> = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const deliveryList = form.delivery
      ? Array.from(form.delivery)
          .reduce((acc: string[], item) => {
            if ((item as HTMLInputElement).checked) acc.push((item as HTMLInputElement).value);
            return acc;
          }, [])
          .join(', ')
      : '';

    const isValidateFields = validateFields(form, deliveryList);

    Object.keys(isValidateFields).forEach((field) => {
      if (
        !isValidateFields[field as keyof typeof isValidateFields]() &&
        !currentErrorFields.includes(field)
      ) {
        currentErrorFields.push(field);
      }
    });

    if (currentErrorFields.length) {
      (form.lastChild?.firstChild as HTMLInputElement).disabled = true;
      currentErrorFields.map((errorField) => {
        if (form[errorField]) {
          const field = (form[errorField] as HTMLInputElement).classList
            ? ((form[errorField] as HTMLInputElement).parentElement as HTMLLabelElement) // error message for inputs elements
            : ((form[errorField] as NodeList)[0] as HTMLInputElement); // error message for input groups elements
          field.classList.add('form__error', 'form__error-' + errorField);
        }
      });
      return false;
    }

    const title = form.title.value;
    const promoValue = form.promo.value;
    const bestBefore = form.bestBefore.value;
    const typeOfProduct = form.productType.value;
    const price = form.currentPrice.value;
    const oldPrice = form.oldPrice.value;
    const description = form.description.value;

    let file = (form.img.files as FileList)[0];
    const reader = new FileReader();
    if (!file) file = new File(['no-file'], 'no-file.png', { type: 'image/png' });
    reader.readAsDataURL(file);

    if (form.img.nextSibling) form.img.nextSibling.textContent = 'File not selected';
    if (form.img.previousSibling)
      (form.img.previousSibling as HTMLImageElement).src = './images/no-image.png';

    reader.onload = function () {
      currentErrorFields = [];
      onSubmit({
        title: title,
        productType: typeOfProduct,
        currentPrice: price,
        oldPrice: oldPrice,
        promo: promoValue,
        img: reader.result as string,
        description: description,
        bestBefore: bestBefore,
        delivery: deliveryList,
        id: String(Math.random()),
      });
    };
    form.reset();
    (form.lastChild?.firstChild as HTMLInputElement).disabled = true;
    form.classList.add('form__message');
    setTimeout(() => {
      form.classList.remove('form__message');
    }, 2200);
  };

  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    const inputField = e.target as HTMLInputElement;
    if (currentErrorFields.includes(inputField.name))
      currentErrorFields.splice(currentErrorFields.indexOf(inputField.name), 1);

    if (inputField.classList && inputField.parentElement) {
      inputField.parentElement.classList.remove('form__error', 'form__error-' + inputField.name);
    }

    if (!currentErrorFields.length) {
      (e.currentTarget.lastChild?.firstChild as HTMLInputElement).disabled = false;
    }

    if (inputField.type === 'file' && inputField.files) {
      if (inputField.nextSibling) {
        inputField.nextSibling.textContent = inputField.files[0]
          ? inputField.files[0].name
          : 'File not selected';
      }
      if (inputField.previousSibling) {
        const img = inputField.files[0];

        if (img) {
          const reader = new FileReader();
          reader.readAsDataURL(img);
          reader.onload = function () {
            (inputField.previousSibling as HTMLImageElement).src = reader.result as string;
          };
        } else (inputField.previousSibling as HTMLImageElement).src = './images/no-image.png';
      }
    }
  };

  const handleGroupChange = (e: React.FormEvent<HTMLInputElement>) => {
    const elements = (e.target as HTMLInputElement).parentElement?.parentElement?.children;

    if (elements)
      Array.from(elements).forEach((element) => {
        if (element.tagName === 'LABEL') {
          const errorElement = element.firstChild as HTMLInputElement;
          errorElement.classList.remove('form__error', 'form__error-' + errorElement.name);
        }
      });
  };

  const deliveryOptions = [
    { value: 'pickup', description: 'pickup' },
    { value: 'courier', description: 'courier' },
    { value: 'post', description: 'post' },
  ];
  const promoOptions = [
    { value: 'promoYes', description: 'Yes' },
    { value: 'promoNo', description: 'No' },
  ];

  return (
    <form className="form" onSubmit={handleSubmit} onChange={handleChange}>
      <h2>Add your product</h2>
      <label className="form__title">
        Title*
        <input name="title" type="text" />
      </label>
      <label className="form__productType">
        Type of product*
        <select name="productType">
          <option value="">choose value</option>
          <option value="own production">own production</option>
          <option value="resale">resale</option>
        </select>
      </label>
      <fieldset className="form__prices">
        <legend>Prices</legend>
        <label>
          Current price*
          <input name="currentPrice" type="number" />
        </label>
        <label>
          Old price
          <input name="oldPrice" type="number" />
        </label>
      </fieldset>
      <InputGroup
        title="Participation in promotions*"
        name="promo"
        type="radio"
        items={promoOptions}
        className="form__promo"
        handleChange={handleGroupChange}
      />
      <label className="form__img">
        Choose image*
        <img src="./images/no-image.png" alt="choose file" width="50px" />
        <input name="img" type="file" />
        <span>File not selected</span>
      </label>
      <label className="form__description">
        Description
        <textarea name="description"></textarea>
      </label>
      <label className="form__bestBefore">
        Best before date*
        <input type="date" name="bestBefore" />
      </label>
      <InputGroup
        title="Delivery options*"
        name="delivery"
        type="checkbox"
        items={deliveryOptions}
        className="form__delivery"
        handleChange={handleGroupChange}
      />
      <div className="form__buttons">
        <input type="submit" value="Add product" disabled />
      </div>
    </form>
  );
};

export default Form;
