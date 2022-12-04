import React from 'react';

const CardStatus = (props: { status: string }) => {
  if (props.status)
    return (
      <div
        className={
          props.status === 'new' ? 'card__label card__label-new' : 'card__label card__label-sale'
        }
        data-testid="status"
      >
        {props.status}
      </div>
    );
  return <></>;
};

export default CardStatus;
