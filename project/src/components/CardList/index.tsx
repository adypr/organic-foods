import React from 'react';

import Card from '../Card';
import { Goods } from 'assets/goods';
import './cardlist.scss';

const CardList: React.FC<{ items: Goods }> = ({ items }) => {
  return (
    <div className="content__cards">
      <h2>All goods</h2>
      <div className="cards">
        {items.map((value, index) => (
          <Card key={index} {...value} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
