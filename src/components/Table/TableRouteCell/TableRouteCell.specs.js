import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { MemoryRouter } from 'react-router';

import TableRouteCell from './';

const { describe, it } = global;

describe('TableRouteCell', () => {
  const field = {
    title: 'Route name',
    route: '/someroute'
  };
  const wrapper = mount(
    <MemoryRouter>
      <table>
        <tbody>
          <tr>
            <TableRouteCell route={field.route}>{field.title}</TableRouteCell>
          </tr>
        </tbody>
      </table>
    </MemoryRouter>
  );

  it('should render one td item', () => {
    expect(wrapper.find('td')).to.have.length(1);
  });

  it('should render one route with provided title', () => {
    expect(wrapper.find('td').props().title).to.equal(field.title);
  });

  it('should have on Link component', () => {
    expect(wrapper.find('Link')).to.have.length(1);
    expect(wrapper.find('Link').props().to).to.equal(field.route);
  });

  it('should link to the route', () => {
    expect(wrapper.find('a').props().href).to.equal(field.route);
  });
});
