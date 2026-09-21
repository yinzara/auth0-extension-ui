import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/lint/lint';
import 'codemirror/addon/lint/lint.css';
import 'codemirror/addon/lint/javascript-lint';
import 'codemirror/addon/lint/json-lint';
import 'codemirror/addon/hint/show-hint.css';

import './editor.css';

export default class CodeEditor extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: '',
    options: {
      mode: 'javascript',
      lineWrapping: true,
      continueComments: 'Enter',
      matchBrackets: true,
      styleActiveLine: true,
      closeBrackets: true,
      indentUnit: 2,
      smartIndent: true,
      autofocus: true,
      tabSize: 2,
      lint: {
        options: {
          sub: true,
          noarg: true,
          undef: true,
          eqeqeq: true,
          laxcomma: true,
          '-W025': true,
          predef: [ 'module' ]
        }
      }
    }
  };

  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.edited = false;
  }

  componentDidMount() {
    const { value, options } = this.props;

    this.editor = CodeMirror(this.container.current, { ...options, value: value || '' });
    this.editor.on('change', this.onChange);
    this.editor.refresh();
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props;

    // Keep in sync with the value prop until the user starts typing.
    if (value && !this.edited && value !== this.editor.getValue()) {
      this.editor.setValue(value);
    }

    if (prevProps.options !== this.props.options) {
      Object.keys(this.props.options).forEach((key) => this.editor.setOption(key, this.props.options[key]));
    }

    this.editor.refresh();
  }

  componentWillUnmount() {
    if (this.editor) {
      this.editor.off('change', this.onChange);
      this.editor.getWrapperElement().remove();
      this.editor = null;
    }
  }

  onChange = (editor, change) => {
    if (change.origin === 'setValue') {
      return;
    }

    this.edited = true;

    if (this.props.onChange) {
      this.props.onChange(editor.getValue());
    }
  };

  render() {
    return <div ref={this.container} />;
  }
}
