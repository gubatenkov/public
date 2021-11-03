import React from 'react';
import { Container } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { Menu } from 'react-feather';

import {
  Logo,
  NotificationDropdown,
  Searchbar,
  SettingsButton,
  LanguageDropdown,
} from 'components';
import { notifications } from 'utils/data';
import { toggleSidebar } from 'features/sidebarSlice';

const Topbar = () => {
  const dispatch = useDispatch();
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <header className='topbar navbar navbar-expand flex-column flex-md-row navbar-custom'>
      <Container fluid>
        <Logo />

        <button
          className='button-menu-mobile open-left disable-btn'
          onClick={handleToggleSidebar}
        >
          <Menu className='menu-icon' />
          {/* <X className='close-icon' /> */}
        </button>

        <ul className='navbar-nav flex-row ml-auto d-flex list-unstyled topnav-menu float-right mb-0'>
          <Searchbar />
          <LanguageDropdown tag='li' />
          <NotificationDropdown notifications={notifications} />
          <SettingsButton />
        </ul>
      </Container>
    </header>
  );
};

export default Topbar;
