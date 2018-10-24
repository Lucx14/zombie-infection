import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';


describe('App', () => {
  let wrapper;

  beforeAll(() => {
    let testCities = ["london"]
    let testHeadlines = {"london": ["testing"]}
    wrapper = shallow(<App headlines={testHeadlines} playableCities={testCities}/>);
  });
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders a headline', () => {
    expect(wrapper.findWhere(n => n.type() === 'p' && n.contains('testing')))
  });
  
});

