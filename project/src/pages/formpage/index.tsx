import React, { Component } from 'react';

import Form from 'components/Form';
import FormList from 'components/FormList';
import { FormData, CardsContent } from 'base/types';

import './_formpage.scss';

class FormPage extends Component<unknown, { products: CardsContent }> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      products: [],
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onSubmit(formData?: FormData) {
    if (formData) {
      this.setState((state) => {
        const { products } = state;
        return { products: [...products, formData] };
      });
    }
  }

  handleClick(currentProductId: string) {
    this.setState((state) => {
      const { products } = state;
      const newProducts = products.filter((product) => {
        return currentProductId !== product.id;
      });
      return { ...state, products: newProducts };
    });
  }

  render() {
    return (
      <div className="form-page">
        <Form onSubmit={this.onSubmit} />
        <FormList products={this.state.products} onClick={this.handleClick} />
      </div>
    );
  }
}

export default FormPage;
