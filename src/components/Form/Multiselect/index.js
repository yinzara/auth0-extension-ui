import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/async';
import classNames from 'classnames';
import './Multiselect.styl';

// Supports both the callback style `loadOptions(input, (err, { options }) => {})` and promises.
const adaptLoadOptions = (loadOptions) => (input) => new Promise((resolve, reject) => {
  const done = (err, data) => {
    if (err) return reject(err);
    return resolve((data && data.options) || (Array.isArray(data) ? data : []));
  };

  const result = loadOptions(input, done);
  if (result && typeof result.then === 'function') {
    result.then((data) => done(null, data), reject);
  }
});

class Multiselect extends Component {

  renderErrors(validationErrors, meta, name) {
    if (validationErrors && validationErrors[name] && validationErrors[name].length) {
      return (<div className="help-block">{validationErrors[name][0]}</div>);
    } else if (meta && meta.touched && meta.error) {
      return (<span className="help-block">{meta.error}</span>);
    }

    return null;
  }

  renderValue = (value) => {
    if (value.label === value.value || this.props.displayLabelOnly) {
      return (
        <span>
          <strong>{value.label}</strong>
        </span>
      );
    }

    return (
      <span>
        <strong>{value.label}</strong>
        <span> ({value.value})</span>
      </span>
    );
  };

  renderElement(input, placeholder, loadOptions, name, validationErrors, meta, multi = true) {
    // NOTE: see https://github.com/erikras/redux-form/issues/82 for onBlur() react-select docs
    return (
      <div>
        <AsyncSelect
          className="react-multiselect"
          classNamePrefix="rms"
          inputId={name}
          name={name}
          value={input.value || null}
          onChange={input.onChange}
          onFocus={input.onFocus}
          onBlur={() => input.onBlur()}
          defaultOptions
          loadOptions={adaptLoadOptions(loadOptions)}
          formatOptionLabel={this.renderValue}
          placeholder={placeholder}
          isMulti={multi}
        />
        {this.renderErrors(validationErrors, meta, name)}
      </div>
    );
  }

  render() {
    const { input, placeholder, loadOptions, multi, label, validationErrors, meta, meta: { touched, error } } = this.props;
    const name = input.name || 'react-multiselect';
    const classes = classNames({
      'form-group': true,
      'has-error': (validationErrors && validationErrors[name] && validationErrors[name].length) || (touched && error)
    });

    if (!label) {
      return this.renderElement(input, placeholder, loadOptions, name, validationErrors, meta, multi);
    }

    return (
      <div className={classes}>
        <label htmlFor={name} className="react-multiselect-label control-label col-xs-3">
          {label}
        </label>
        <div className="col-xs-9">
          {this.renderElement(input, placeholder, loadOptions, name, validationErrors, meta, multi)}
        </div>
      </div>
    );
  }
}

Multiselect.propTypes = {
  loadOptions: PropTypes.func.isRequired,
  displayLabelOnly: PropTypes.bool,
  onBlur: PropTypes.func,
  input: PropTypes.object,
  placeholder: PropTypes.string,
  multi: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  validationErrors: PropTypes.object,
  meta: PropTypes.object
};

export default Multiselect;
