import React from 'react';

const ProductOldPrice = (props: { oldPrice: string }) => {
  if (props.oldPrice)
    return <span className="product__old-price">Old price: {props.oldPrice}</span>;
  return null;
};

export default ProductOldPrice;
