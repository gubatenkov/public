import React, { useState } from 'react';
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  UncontrolledTooltip,
} from 'reactstrap';

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Bell } from 'react-feather';
import { Link } from 'react-router-dom';

const notificationContainerStyle = {
  maxHeight: '230px',
};

const NotificationDropdown = ({ notifications }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const getRedirectUrl = (item) => `/notification/${item.id}`;

  return (
    <>
      <Dropdown
        className='notification-list'
        id='notiDropdown'
        isOpen={dropdownOpen}
        toggle={toggleDropdown}
        tag='li'
      >
        <DropdownToggle
          className='nav-link dropdown-toggle'
          data-toggle='dropdown'
          tag='a'
          aria-expanded={dropdownOpen}
          onClick={toggleDropdown}
        >
          <Bell />
          <span className='noti-icon-badge'></span>
        </DropdownToggle>

        <DropdownMenu className='topbar-dropdown-menu dropdown-lg p-0' end>
          <div onClick={toggleDropdown}>
            <div className='dropdown-item noti-title border-bottom'>
              <h5 className='d-flex justify-content-between m-0 fs-6 fw-bold'>
                Уведомления ({notifications.length})
                <span className='float-right text-muted'>
                  <small>Очистить</small>
                </span>
              </h5>
            </div>
            <PerfectScrollbar style={notificationContainerStyle}>
              {notifications.map((item, i) => {
                return (
                  <Link
                    to={getRedirectUrl(item)}
                    className='dropdown-item notify-item'
                    key={i + '-noti'}
                  >
                    <div className={`notify-icon bg-${item.bgColor}`}>
                      {item.icon}
                    </div>
                    <p className='notify-details'>
                      {item.text}
                      <small className='text-muted'>{item.subText}</small>
                    </p>
                  </Link>
                );
              })}
            </PerfectScrollbar>

            <Link
              to='/'
              className='dropdown-item text-center text-primary notify-item notify-all border-top'
            >
              Все увед-я
            </Link>
          </div>
        </DropdownMenu>
      </Dropdown>

      <UncontrolledTooltip placement='left' target='notiDropdown'>
        {notifications.length} уведомлений(я)
      </UncontrolledTooltip>
    </>
  );
};

export default NotificationDropdown;
