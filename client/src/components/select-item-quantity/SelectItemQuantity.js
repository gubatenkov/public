import React from 'react';
import styles from './SelectItemQuantity.module.css';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import PropTypes from 'prop-types';

const SelectItemQuantity = ({
  available,
  value,
  onChangeHandler,
  disabled = false,
}) => {
  return (
    <FormControl className={styles.productCount} fullWidth size='small'>
      <InputLabel id='demo-simple-select-label'>Кiлькiсть:</InputLabel>

      <Select
        labelId='productSelect'
        id='productSelect'
        value={value}
        label='Кiлькiсть'
        disabled={disabled}
        onChange={(e) => onChangeHandler(e.target.value)}
      >
        {[...Array(available).keys()].map((qty, idx) => (
          <MenuItem key={qty} value={idx + 1}>
            {idx + 1}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

SelectItemQuantity.propTypes = {
  available: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

export default SelectItemQuantity;
