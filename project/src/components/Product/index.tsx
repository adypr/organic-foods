import React from 'react';
import { FormData } from 'base/types';
import { ProductOldPriceWithProps } from 'components/HOC/withProps';

import './_product.scss';

const Product = (props: FormData & { onClick: (e: React.MouseEvent) => void }) => {
  return (
    <div className="product" onClick={props.onClick} id={props.id} data-testid="productTitle">
      <img
        className="product__img"
        src={props.img}
        alt={props.title}
        width="100px"
        height="100px"
      />
      <div className="product__content">
        <h4 className="product__title">{props.title}</h4>
        <div className="product__prices">
          <span className="product__price">Current price: {props.currentPrice}</span>
          <ProductOldPriceWithProps oldPrice={props.oldPrice as string} />
        </div>
        <div className="product__settings">
          <div className="product__setting product__type">type: {props.productType}</div>
          <div className="product__setting product__action">
            promo: {props.promo === 'promoYes' ? '\u2705' : '\ud83d\udeab'}
          </div>
          <div className="product__setting product__date">best before: {props.bestBefore}</div>
          <div className="product__setting product__delivery">delivery: {props.delivery}</div>
        </div>
        <details className="product__description">
          <summary>Description</summary>
          <div className="product__text" data-testid="productDescription">
            {props.description || <span className="product__no-text">No description</span>}
          </div>
        </details>
      </div>
      <ul className="product__control">
        <li className="control__item">
          <a href="#" className="control__link edit">
            &#128393;
          </a>
        </li>
        <li className="control__item">
          <a href="#" className="control__link remove" data-testid="closeButton">
            &#10006;
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Product;
