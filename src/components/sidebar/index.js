import React from 'react';
import { useSelector } from 'react-redux';

import { UserProfile, Sidemenu } from 'components';

const Sidebar = () => {
  const isVisible = useSelector((state) => state.sidebar.isVisible);

  return (
    <aside className={`sidebar ${isVisible ? 'open' : ''}`}>
      <UserProfile />
      <Sidemenu />
    </aside>
  );
};

export default Sidebar;
