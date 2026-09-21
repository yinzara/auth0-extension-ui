import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

const FakeForm = (props) => (
  <form>
    { props.children }
  </form>
);

FakeForm.propTypes = {
  children: PropTypes.node
};

// TODO: understand how to test validate errors.
export default reduxForm({
  form: 'fake'
})(FakeForm);
