import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ children }) => (
  <div id="sidebar" className="col-xs-2">
    <div className="sidebar-fixed">
      <ul>
        { children }
      </ul>
    </div>
  </div>
);

Sidebar.propTypes = {
  children: PropTypes.node
};

export default Sidebar;
