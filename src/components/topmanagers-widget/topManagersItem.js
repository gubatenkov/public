import React from 'react';
import { BarChart, MessageSquare, MoreVertical } from 'react-feather';
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Media,
  UncontrolledButtonDropdown,
} from 'reactstrap';

const TopManagersItem = ({ image, name, position }) => {
  return (
    <Media className='d-flex justify-content-between align-content-center mt-1 border-top pt-3'>
      <div className='d-flex manager-meta-wrap align-content-center'>
        <img
          className='avatar rounded me-3'
          src={image}
          alt={name}
          style={{ width: '40px', height: '40px', objectFit: 'cover' }}
        />
        <Media body>
          <h6 className='topmanagers-widget-name mt-1 mb-0'>{name}</h6>
          <h6 className='topmanagers-widget-position text-muted font-weight-normal mt-1'>
            {position}
          </h6>
        </Media>
      </div>
      <UncontrolledButtonDropdown className='align-self-center float-right'>
        <DropdownToggle
          tag='button'
          className='btn btn-link p-0 dropdown-toggle text-muted'
        >
          <MoreVertical width='15' />
        </DropdownToggle>
        <DropdownMenu end>
          <DropdownItem>
            <BarChart className='me-2' width='15' />
            Статистика
          </DropdownItem>
          <DropdownItem>
            <MessageSquare className='me-2' width='15' />
            Инвайт в чат
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    </Media>
  );
};

export default TopManagersItem;
