import React from 'react';
import Product from 'components/Product';
import { CardsContent } from 'base/types';

import './_formlist.scss';

const FormList: React.FC<{
  products: CardsContent;
  children?: React.ReactNode;
  onClick: (productId: string) => void;
}> = ({ products, children, onClick }) => {
  const handleProductClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains('remove')) onClick(e.currentTarget.id);
  };

  return (
    <div className="form-list">
      <h2 className="form-list__title">Your goods</h2>
      <div className="form-list__items">
        {!products.length ? (
          <span>There&apos;re no items</span>
        ) : (
          products.map((product, i) => {
            return <Product key={i} {...product} onClick={handleProductClick} />;
          })
        )}
        {children}
      </div>
    </div>
  );
};

export default FormList;
