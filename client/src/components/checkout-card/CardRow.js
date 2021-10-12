import React from 'react';
import PropTypes from 'prop-types';

const CardRow = ({ label, value, divider = true, className }) => {
  return (
    <>
      <p className={className}>
        <span>{label}</span>
        <span>{value}</span>
      </p>
      {divider && (
        <hr
          style={{
            border: 'none',
            width: '100%',
            height: '1px',
            background: 'whitesmoke',
          }}
        />
      )}
    </>
  );
};

CardRow.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default CardRow;
