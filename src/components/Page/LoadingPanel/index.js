import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const overlayStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1
};

const LoadingPanel = ({ show, delay, backgroundStyle, children }) => {
  const [ loading, setLoading ] = useState(!!show);

  // Only show the spinner after `delay` ms, to avoid flashing it for fast requests.
  useEffect(() => {
    if (!show) {
      setLoading(false);
      return undefined;
    }

    const timer = setTimeout(() => setLoading(true), delay || 200);
    return () => clearTimeout(timer);
  }, [ show, delay ]);

  if (!loading) {
    return <div>{children}</div>;
  }

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          ...overlayStyle,
          padding: '5px',
          backgroundColor: 'rgba(255,255,255,0.8)',
          minHeight: '50px',
          ...backgroundStyle
        }}
      >
        <div className="spinner spinner-sm" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="circle" />
        </div>
      </div>
      {children}
    </div>
  );
};

LoadingPanel.propTypes = {
  backgroundStyle: PropTypes.object,
  show: PropTypes.bool,
  delay: PropTypes.number,
  children: PropTypes.node
};

export default LoadingPanel;
