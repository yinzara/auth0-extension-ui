import React, { Component, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { List } from 'react-window';
import classNames from 'classnames';
import '../Multiselect/Multiselect.styl';

const ROW_HEIGHT = 35;
const MAX_MENU_HEIGHT = 300;

const Row = ({ index, style, rows }) => (
  <div style={style}>{rows[index]}</div>
);

Row.propTypes = {
  index: PropTypes.number,
  style: PropTypes.object,
  rows: PropTypes.array
};

// Only renders the options which are visible, which keeps very long lists fast.
const MenuList = ({ children, options, focusedOption }) => {
  const listRef = useRef(null);
  const rows = React.Children.toArray(children);

  useEffect(() => {
    const index = options.indexOf(focusedOption);
    if (listRef.current && index >= 0 && index < rows.length) {
      listRef.current.scrollToRow({ index });
    }
  }, [ focusedOption ]); 

  return (
    <List
      listRef={listRef}
      rowComponent={Row}
      rowCount={rows.length}
      rowHeight={ROW_HEIGHT}
      rowProps={{ rows }}
      style={{ height: Math.min(MAX_MENU_HEIGHT, rows.length * ROW_HEIGHT) }}
    />
  );
};

MenuList.propTypes = {
  children: PropTypes.node,
  options: PropTypes.array,
  focusedOption: PropTypes.object
};

const components = { MenuList };

class VirtualizedSelect extends Component {

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

  renderElement(input, placeholder, options, name, validationErrors, meta, multi = false) {
    // NOTE: see https://github.com/erikras/redux-form/issues/82 for onBlur() react-select docs
    return (
      <div>
        <Select
          className="react-multiselect react-multiselect-virtualized"
          classNamePrefix="rms"
          inputId={name}
          name={name}
          value={input.value || null}
          onChange={input.onChange}
          onFocus={input.onFocus}
          onBlur={() => input.onBlur()}
          options={options}
          components={components}
          formatOptionLabel={this.renderValue}
          placeholder={placeholder}
          isMulti={multi}
        />
        {this.renderErrors(validationErrors, meta, name)}
      </div>
    );
  }

  render() {
    const { input, placeholder, options, multi, label, validationErrors, meta, meta: { touched, error } } = this.props;
    const name = input.name || 'react-multiselect';
    const classes = classNames({
      'form-group': true,
      'has-error': (validationErrors && validationErrors[name] && validationErrors[name].length) || (touched && error)
    });

    if (!label) {
      return this.renderElement(input, placeholder, options, name, validationErrors, meta, multi);
    }

    return (
      <div className={classes}>
        <label htmlFor={name} className="react-multiselect-label control-label col-xs-3">
          {label}
        </label>
        <div className="col-xs-9">
          {this.renderElement(input, placeholder, options, name, validationErrors, meta, multi)}
        </div>
      </div>
    );
  }
}

VirtualizedSelect.propTypes = {
  options: PropTypes.array.isRequired,
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

export default VirtualizedSelect;
