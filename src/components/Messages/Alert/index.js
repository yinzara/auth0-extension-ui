import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

class AlertMessage extends Component {
  static defaultProps = {
    type: 'success',
    show: true
  };

  onDismiss = () => {
    if (this.props.onDismiss) {
      this.props.onDismiss();
    }
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    if (!this.props.message) {
      return this.props.children || <div />;
    }

    return (
      <Alert variant={this.props.type} className="alert-dismissible">
        <button type="button" className="close" aria-label="Close" onClick={this.onDismiss}>
          <span aria-hidden="true">&times;</span>
        </button>
        <strong>{this.props.title}</strong> {this.props.message}
      </Alert>
    );
  }
}

AlertMessage.propTypes = {
  show: PropTypes.bool,
  type: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
  onDismiss: PropTypes.func,
  children: PropTypes.node
};

export default AlertMessage;
