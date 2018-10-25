import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';


describe('App', () => {
  let wrapper;

  beforeAll(() => {
    let testCities = ["london"]
    let testHeadlines = {"london": ["testing"]}
    wrapper = shallow(<App headlines={testHeadlines} playableCities={testCities} map={"test map"}/>);
  });
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders a headline', () => {
    expect(wrapper.findWhere(n => n.type() === 'p' && n.contains('testing')))
  });


  it('can set the city', () => {
    const instance = wrapper.instance();
    expect(instance.state.city).toEqual(false);
    instance.setSelected("test");
    expect(instance.state.city).toEqual("test");
  });

  it('can set the game to be playing', () => {
    const instance = wrapper.instance();
    expect(instance.state.playing).toBe(false);
    instance.startGame();
    expect(instance.state.playing).toBe(true);
  });

  it('can set city back to false', () => {
    const instance = wrapper.instance();
    instance.clearCity();
    expect(instance.state.city).toEqual(false);
    instance.setSelected("test");
    expect(instance.state.city).toEqual("test");
    instance.clearCity();
    expect(instance.state.city).toEqual(false);
  });

  it('can update state for map and ticker', () => {
    const instance = wrapper.instance();
    instance.updateState([0,0], 2);
    expect(instance.state.map).toEqual([0,0]);
    expect(instance.state.ticker).toEqual(2);
  });

  it('can set the playable cities', () => {
    const instance = wrapper.instance();
    instance.activateCity('london');
    expect(instance.state.playableCities).toEqual(['london']);
    // instance.activateCity('paris');
  });

  it('can set flying zombies state', () => {
    const instance = wrapper.instance();
    instance.setState({ playableCities: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'] })
    instance.flyingZombies();
    expect(instance.state.flyingZombies).toEqual(true);
  });

  it('can spend tokens to activate a special ability', () => {
    const instance = wrapper.instance();
    instance.setState({ tokens: 20 });
    instance.specialAbility("fishFrenzy");
    expect(instance.state.fishFrenzy).toEqual(true);
    expect(instance.state.tokens).toEqual(0);
  });
});

