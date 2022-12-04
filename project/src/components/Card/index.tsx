import React from 'react';
import { Item } from 'assets/goods';
import './_card.scss';

import { CardStatusWithProps, CardOldPriceWithProps } from 'components/HOC/withProps';

const Card = (props: Item) => {
  return (
    <div key={props.id} className="card" data-testid="card">
      <CardStatusWithProps status={props.status as string} />
      <div className="card__picture">
        <img className="card__image" src={props.image} alt={props.title} />
      </div>
      <div className="card__icons">
        <a href="#" className="card__link">
          <svg className="card__icon" width="20" height="20">
            <use xlinkHref="images/icons.svg#cart"></use>
          </svg>
        </a>
        <a href="#" className="card__link">
          <svg className="card__icon" width="20" height="20">
            <use xlinkHref="images/icons.svg#heart"></use>
          </svg>
        </a>
      </div>
      <h4 className="card__title">{props.title}</h4>
      <div className="card__prices">
        <span className="card__price">${props.price}</span>
        <CardOldPriceWithProps oldPrice={props.oldPrice as number} />
      </div>
    </div>
  );
};

export default Card;
