import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { MemoryRouter } from 'react-router';

import TabPane from './';

const { describe, it } = global;

describe('TabPane', () => {
  const title = 'Users';
  const render = (location) => mount(
    <MemoryRouter initialEntries={[ location ]}>
      <ul>
        <TabPane title={title} route="users" />
      </ul>
    </MemoryRouter>
  );

  it('should create TabPane', () => {
    const wrapper = render('/users');
    expect(wrapper.find('a.script-button')).to.have.length(1);
  });

  it('should create TabPane with provided title', () => {
    const wrapper = render('/users');
    expect(wrapper.find('span.tab-title').text()).to.be.equal(title);
  });

  it('should link to the route', () => {
    const wrapper = render('/users');
    expect(wrapper.find('a').props().href).to.equal('/users');
  });

  it('should be active when the route matches the location', () => {
    expect(render('/users').find('li').hasClass('active')).to.equal(true);
    expect(render('/users/123').find('li').hasClass('active')).to.equal(true);
  });

  it('should not be active when the route does not match the location', () => {
    expect(render('/settings').find('li').hasClass('active')).to.equal(false);
  });
});
