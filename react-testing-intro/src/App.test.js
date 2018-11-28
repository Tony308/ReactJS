import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

describe('App component testing', function() {
    it('renders welcome message', function() {
        const wrapper = shallow(<App />);
        const welcome = <h1 className='App-title'>Welcome to React</h1>;
        expect(wrapper.contains(welcome)).to.equal(true);
    });
});

describe('Test Suite 2', function() {
    it('render something', function() {
      const wrapper = shallow(<App />);

    });
});