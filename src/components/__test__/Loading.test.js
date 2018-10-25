import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../Loading';
import ReactDOM from 'react-dom';


describe('Loading', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Loading/>, div);
  });
});