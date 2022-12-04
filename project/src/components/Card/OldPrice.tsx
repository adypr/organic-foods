import React from 'react';

const CardOldPrice = (props: { oldPrice: number }) => {
  if (props.oldPrice)
    return (
      <span className="card__old-price" data-testid="old-price">
        {props.oldPrice}
      </span>
    );
  return <></>;
};

export default CardOldPrice;
