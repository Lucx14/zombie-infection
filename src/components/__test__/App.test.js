import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App headlines/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a headline', () => {
  let testCities = ["london"]
  let testHeadlines = {"london": ["testing"]}
  let wrapper = shallow(<App headlines={testHeadlines} playableCities={testCities}/>);
  expect(wrapper.findWhere(n => n.type() === 'p' && n.contains('testing')))
});
