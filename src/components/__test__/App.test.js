import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';


describe('App', () => {
  let wrapper;

  beforeAll(() => {
    window.HTMLMediaElement.prototype.load = () => {}
    window.HTMLMediaElement.prototype.play = () => {}
    let testCities = ["london","paris","rome","oslo",
                      "reykjavik","new-york","madrid","marrakech",
                      "cairo","nairobi","istanbul" ,"dubai","cape-town",
                      "los-angeles","mexico-city","bogota","rio-de-janeiro",
                      "tehran","new-dehli","bangkok","shanghai","tokyo",
                      "hong-kong","melbourne","wellington","vancouver"]
    let testHeadlines = {"london": ["testing"]}
    wrapper = shallow(<App headlines={testHeadlines} playableCities={testCities} map={"test map"} test={true}/>);
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
    instance.activateCity('vancouver');
    expect(instance.state.playableCities).toEqual(
      ["london","paris","rome","oslo",
       "reykjavik","new-york","madrid","marrakech",
       "cairo","nairobi","istanbul" ,"dubai","cape-town",
       "los-angeles","mexico-city","bogota","rio-de-janeiro",
       "tehran","new-dehli","bangkok","shanghai","tokyo",
       "hong-kong","melbourne","wellington","vancouver"]);
  });

  it('can spend tokens to activate a special ability- fish frenzy', () => {
    const instance = wrapper.instance();
    instance.setState({ tokens: 30 });
    instance.specialAbility("fishFrenzy");
    expect(instance.state.fishFrenzy).toEqual(true);
    expect(instance.state.tokens).toEqual(0);
  });

  it('can spend tokens to activate a special ability - flying zombies', () => {
    const instance = wrapper.instance();
    instance.setState({ tokens: 40 });
    instance.specialAbility("flyingZombies");
    expect(instance.state.flyingZombies).toEqual(true);
    expect(instance.state.tokens).toEqual(0);
  });

  it('can spend tokens to activate a special ability - wwZ', () => {
    const instance = wrapper.instance();
    instance.setState({ tokens: 50 });
    instance.specialAbility("worldWarZ");
    expect(instance.state.worldWarZ).toEqual(true);
    expect(instance.state.tokens).toEqual(0);
  });



  it('randomizes headlines on the main page', () => {
    const instance = wrapper.instance();
    instance.getHeadline({ "london": ["testing"] },["london"]);
    expect(instance.state.currentHeadline).toEqual("BREAKING NEWS: testing");
  });

  it('increases stats', () => {
    const instance = wrapper.instance();
    instance.setState({ tokens: 10 });
    instance.increaseStat("speed");
    expect(instance.state.speed).toEqual(1);
  });

  it('enterStats', () => {
    const instance = wrapper.instance();
    instance.enterStats();
    expect(instance.state.showStats).toBe(true);
  });
});
