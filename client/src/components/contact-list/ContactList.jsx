import React from 'react';

import { ContactItem } from '../';
import img from '../../assets/empty.jpg';

const ContactList = ({ contacts }) => {
  return <ul className='contacts'>{renderItems(contacts)}</ul>;
};

const renderItems = (items = []) => {
  if (items.length === 0) {
    return (
      <div>
        <img className='empty-img' src={img} alt='empty placeholder' />
      </div>
    );
  }

  return items.map((i) => (
    <li className='contacts-item' key={i._id}>
      <ContactItem {...i} />
    </li>
  ));
};

export default ContactList;
