import React, { useState } from 'react';
import {
  ChevronDown,
  Settings,
  User,
  HelpCircle,
  LogOut,
  Lock,
} from 'react-feather';
import { Link } from 'react-router-dom';
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';
import { useDispatch } from 'react-redux';

import profilePic from 'assets/images/user.png';
import { logoutUser } from 'features/userSlice';

const UserProfile = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleExitBtn = () => dispatch(logoutUser());

  return (
    <>
      <div className='user-profile media mt-2 mb-2 d-flex'>
        <img
          className='avatar-sm rounded-circle me-2'
          src={profilePic}
          width='36px'
          height='36px'
          alt='Джон'
        />

        <div className='media-body'>
          <h6 className='pro-user-name mt-0 mb-0 fs-6'>Джон Коннор</h6>
          <span className='pro-user-desc text-muted'>Админ</span>
        </div>

        <UncontrolledDropdown
          className='align-self-center profile-dropdown-menu ms-auto'
          isOpen={dropdownOpen}
          toggle={toggleDropdown}
        >
          <DropdownToggle
            className='btn p-0 dropdown-toggle'
            data-toggle='dropdown'
            tag='button'
          >
            <ChevronDown />
          </DropdownToggle>
          <DropdownMenu
            className='sidebar-dropdown-menu profile-dropdown-items'
            end
          >
            <Link to='/' className='dropdown-item notify-item'>
              <User className='icon-dual icon-xs me-2' />
              <span>Мой аккаунт</span>
            </Link>
            <Link to='/' className='dropdown-item notify-item'>
              <Settings className='icon-dual icon-xs me-2' />
              <span>Настройки</span>
            </Link>
            <Link to='/' className='dropdown-item notify-item'>
              <HelpCircle className='icon-dual icon-xs me-2' />
              <span>Поддержка</span>
            </Link>
            <Link to='/' className='dropdown-item notify-item'>
              <Lock className='icon-dual icon-xs me-2' />
              <span>Приватность</span>
            </Link>
            <DropdownItem divider />
            <Button
              className='dropdown-item notify-item'
              onClick={handleExitBtn}
            >
              <LogOut className='icon-dual icon-xs me-2' />
              <span>Выход</span>
            </Button>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    </>
  );
};

export default UserProfile;
