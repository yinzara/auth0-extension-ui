import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import classNames from 'classnames';
import useIsActive from '../../utils/useIsActive';

const TabPane = ({ route, title }) => {
  const linkClass = classNames({
    active: useIsActive(route)
  });

  return (
    <li className={linkClass}>
      <Link className="script-button" to={`/${route}`} aria-expanded="true">
        <span className="tab-title">{title}</span>
      </Link>
    </li>
  );
};

TabPane.propTypes = {
  route: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default TabPane;
