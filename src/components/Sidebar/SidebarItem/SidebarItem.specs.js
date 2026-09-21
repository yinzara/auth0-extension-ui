import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { MemoryRouter } from 'react-router';

import SidebarItem from './';

const { describe, it } = global;

describe('SidebarItem', () => {
  const render = (props, location = '/permissions', children) => mount(
    <MemoryRouter initialEntries={[ location ]}>
      <ul>
        <SidebarItem
          title="Permissions"
          route="permissions"
          icon={<i className="icon icon-budicon-488" />}
          {...props}
        >
          {children}
        </SidebarItem>
      </ul>
    </MemoryRouter>
  );

  it('should have a SidebarItem', () => {
    const wrapper = render();
    expect(wrapper.find('li.sidebar-item')).to.have.length(1);
  });

  it('should have a Link component to the route', () => {
    const wrapper = render();
    expect(wrapper.find('Link')).to.have.length(1);
    expect(wrapper.find('a').props().href).to.equal('/permissions');
  });

  it('should have an icon', () => {
    const wrapper = render();
    expect(wrapper.find('.icon.icon-budicon-488')).to.have.length(1);
  });

  it('should be active when the route matches the location', () => {
    expect(render({}, '/permissions').find('li').hasClass('active')).to.equal(true);
    expect(render({}, '/other').find('li').hasClass('active')).to.equal(false);
  });

  describe('with children', () => {
    const children = [ <li key="1">Child 1</li>, <li key="2">Child 2</li> ];

    it('should show children after html reference is clicked', () => {
      const wrapper = render({}, '/other', children);
      expect(wrapper.find('ul ul').props().style.display).to.be.equal('none'); // invisible
      wrapper.find('a').simulate('click');
      expect(wrapper.find('ul ul').props().style.display).to.be.equal('block'); // visible
    });

    it('should be open when the route is active', () => {
      const wrapper = render({}, '/permissions', children);
      expect(wrapper.find('ul ul').props().style.display).to.be.equal('block');
    });
  });
});
