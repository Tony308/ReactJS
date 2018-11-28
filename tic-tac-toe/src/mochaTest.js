import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Game from './index.js';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('HelloWorld Component', function() {
  it('renders h1', function() {
    const wrapper = shallow(<Game />);
    expect(wrapper.find('Button').text()).toEqual('Go to game start');
  });

  it('renders p', function() {
    expect(wrapper.find('p').text()).toEqual('Welcome to my world');
  });
});
