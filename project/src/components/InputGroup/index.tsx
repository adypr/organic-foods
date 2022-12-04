import React from 'react';
import { InputGroupProps } from 'base/types';

const InputGroup: React.FC<InputGroupProps> = ({
  title,
  name,
  type,
  items,
  className,
  handleChange,
}) => {
  return (
    <fieldset className={className}>
      <legend>{title}</legend>
      {items.map((item, i) => {
        return (
          <label key={i}>
            <input name={name} type={type} value={item.value} onChange={handleChange} />
            {item.description}
          </label>
        );
      })}
    </fieldset>
  );
};

export default InputGroup;
