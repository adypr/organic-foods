import React from 'react';
import CardStatus from 'components/Card/Status';
import CardOldPrice from 'components/Card/OldPrice';
import ProductOldPrice from 'components/Product/OldPrice';

interface withProps {
  [key: string]: string | number;
}

const withProps = <P extends object>(Component: React.ComponentType<P>) => {
  return (props: P & withProps) => {
    if (props) {
      return <Component {...(props as P)} />;
    }
    return null;
  };
};

export const CardStatusWithProps = withProps(CardStatus);
export const CardOldPriceWithProps = withProps(CardOldPrice);
export const ProductOldPriceWithProps = withProps(ProductOldPrice);
