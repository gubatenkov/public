import React from 'react';
import { Search } from 'react-feather';

const Searchbar = () => {
  return (
    <li className='d-none d-sm-block'>
      <div className='app-search'>
        <form>
          <div className='input-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Поиск...'
            />

            <Search />
          </div>
        </form>
      </div>
    </li>
  );
};

export default Searchbar;
