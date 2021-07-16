import React from 'react';
import './FormInputItem.scss';

const FormInputItem = ({ handleChange, label, ...restProps }) => {
  return (
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...restProps} />
      {label ? (
        <label
          className={`${
            restProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInputItem;
