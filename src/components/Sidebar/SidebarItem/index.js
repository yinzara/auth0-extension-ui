import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import classNames from 'classnames';
import useIsActive from '../../utils/useIsActive';
import './SidebarItem.styl';

const SidebarItem = ({ route, title, icon, children }) => {
  const active = useIsActive(route);
  const [ open, setOpen ] = useState(active);

  // Open the group when its route becomes active and close it when it stops being active.
  useEffect(() => {
    setOpen(active);
  }, [ active ]);

  if (children && children.length) {
    const groupClass = classNames({
      submenu: true,
      open,
      active,
      'sidebar-item': true
    });

    return (
      <li className={groupClass}>
        <a href="#" onClick={(e) => { e.preventDefault(); setOpen(!open); }}>
          <div className="item-image-container">
            {icon}
          </div>
          <span>{title}</span>
        </a>
        <ul style={{ display: open ? 'block' : 'none' }}>
          {children}
        </ul>
      </li>
    );
  }

  const linkClass = classNames({
    active,
    'sidebar-item': true
  });

  return (
    <li className={linkClass}>
      <Link to={`${route}`}>
        <div className="item-image-container">
          {icon}
        </div>
        <span>{title}</span>
      </Link>
    </li>
  );
};

SidebarItem.propTypes = {
  route: PropTypes.string,
  title: PropTypes.string.isRequired,
  icon: PropTypes.element,
  children: PropTypes.node
};

export default SidebarItem;
