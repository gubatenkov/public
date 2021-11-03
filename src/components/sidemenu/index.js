import React from 'react';
import { Link } from 'react-router-dom';
import MetisMenu from 'metismenujs/dist/metismenujs';
import { useLocation } from 'react-router';

import { menu } from 'utils/data';

const SideMenu = () => {
  const initMenu = () => new MetisMenu('#menu-bar');

  React.useEffect(() => initMenu(), []);

  return (
    <ul className='metismenu' id='menu-bar'>
      {menu.map((i, idx) => {
        return (
          <React.Fragment key={idx}>
            {i.header && <li className='menu-title'>{i.header}</li>}
            {i.children ? (
              <MenuItemWithChildren key={idx} item={i} />
            ) : (
              <MenuItem key={idx} item={i} />
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

const MenuItem = ({ item }) => {
  const location = useLocation();

  return (
    <li
      className={`menu-item ${
        location.pathname === item.path ? 'mm-active' : ''
      }`}
    >
      <Link to={item.path} className='menu-link'>
        {item.icon}
        {item.name}
      </Link>
    </li>
  );
};

const MenuItemWithChildren = ({ item }) => {
  return (
    <li className='menu-item'>
      <Link to='/' className='menu-link'>
        {item.icon}
        <span>{item.name}</span>
        <span className='menu-arrow'></span>
      </Link>

      <ul className='metismenu'>
        {item.children.map((child, i) => {
          return (
            <React.Fragment key={i}>
              {child.children ? (
                <MenuItemWithChildren
                  item={child}
                  subMenuClassNames='side-nav-third-level'
                />
              ) : (
                <MenuItem item={child} />
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </li>
  );
};

export default SideMenu;
