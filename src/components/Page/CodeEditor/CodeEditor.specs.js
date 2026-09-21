import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import CodeEditor from './';

const { describe, it } = global;

describe('CodeEditor', () => {
  const field = {
    value: '<div>\nHello! This is the <strong>code editor</strong>.\n<p>New paragraph.</p>\n</div>'
  };
  const options = { mode: 'javascript' };
  let wrapper;

  beforeEach((done) => {
    // CodeMirror measures text using ranges, which jsdom does not implement.
    document.createRange = () => ({
      setStart() {},
      setEnd() {},
      getBoundingClientRect: () => ({ right: 0, left: 0, top: 0, bottom: 0 }),
      getClientRects: () => ({ length: 0, left: 0, right: 0 })
    });
    wrapper = mount(<CodeEditor value={field.value} options={options} />);
    done();
  });

  afterEach((done) => {
    wrapper.unmount();
    done();
  });

  it('should render a codemirror element', () => {
    expect(wrapper.getDOMNode().querySelectorAll('.CodeMirror')).to.have.length(1);
  });

  it('should render the given value', () => {
    expect(wrapper.instance().editor.getValue()).to.equal(field.value);
  });

  it('should call onChange when the code is edited', () => {
    const onChange = sinon.spy();
    const editable = mount(<CodeEditor value="" options={options} onChange={onChange} />);
    editable.instance().editor.setValue('const a = 1;');
    // setValue is not a user edit
    expect(onChange.called).to.equal(false);
    editable.instance().editor.replaceRange('x', { line: 0, ch: 0 });
    expect(onChange.calledWith('xconst a = 1;')).to.equal(true);
    editable.unmount();
  });
});
