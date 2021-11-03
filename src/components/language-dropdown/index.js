import React, { useState } from 'react';

import enFlag from 'assets/images/flags/us.jpg';
import russiaFlag from 'assets/images/flags/russia.jpg';
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  UncontrolledTooltip,
} from 'reactstrap';
import { Globe } from 'react-feather';
import { Link } from 'react-router-dom';

const languages = [
  {
    name: 'English',
    flag: enFlag,
  },
  {
    name: 'Русский',
    flag: russiaFlag,
  },
];

const LanguageDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <>
      <Dropdown
        isOpen={dropdownOpen}
        toggle={toggleDropdown}
        className='d-none d-lg-block'
        tag='li'
        id='langDropdown'
      >
        <DropdownToggle
          data-toggle='dropdown'
          tag='a'
          className='nav-link mr-0'
          onClick={toggleDropdown}
          aria-expanded={dropdownOpen}
        >
          <Globe />
        </DropdownToggle>
        <DropdownMenu className='language-dropdown' end>
          <div onClick={toggleDropdown}>
            {languages.map((lang, i) => {
              return (
                <Link
                  to='/'
                  className='dropdown-item language-item'
                  key={i + '-lang'}
                >
                  <img
                    src={lang.flag}
                    alt={lang.name}
                    className='mr-1'
                    height='12'
                  />{' '}
                  <span className='align-middle'>{lang.name}</span>
                </Link>
              );
            })}
          </div>
        </DropdownMenu>
      </Dropdown>

      <UncontrolledTooltip placement='left' target='langDropdown'>
        Язык
      </UncontrolledTooltip>
    </>
  );
};

export default LanguageDropdown;
