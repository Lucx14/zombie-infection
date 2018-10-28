# Trick or Eat Brains

[![Build Status](https://travis-ci.com/Lucx14/zombie-infection.svg?branch=master)](https://travis-ci.com/Lucx14/zombie-infection)

[Trick or eat brains](http://trick-or-eat-brains.herokuapp.com/) is an 80s-inspired zombie world domination game built for final project at Makers.

## Dev team
- [Malachy Gilchrist](https://github.com/Mallig)
- [Josh Nickson](https://github.com/joshnickson)
- [James Sutherland](https://github.com/LondonJim)
- [Lucien Najev](https://github.com/Lucx14)

Music by:
- [Ross Bugden](https://www.youtube.com/channel/UCQKGLOK2FqmVgVwYferltKQ)

## Technologies
The team opted not to use a game engine in order to have complete control of the code and build all of the logic from scratch. 

Pixelated world map drawn using our custom-built wep application [Pixel Mapper](https://github.com/joshnickson/pixel-mapper) to transform a drawn grid of different coloured pixels into an array of integers to be rendered by the React component into individual objects.

The top-down game consists of dynamically drawn objects on an HTML5 canvas overlaid with sprite graphics. See the logic file [here](https://github.com/Lucx14/zombie-infection/blob/master/src/model/LocalGameModel.js).

- Javascript, HTML5, CSS3
- React
- Cypress, Jest, Enzyme
- ESLint
- Travis CI

## Quickstart

```
$ git clone https://github.com/Lucx14/zombie-infection.git
$ cd zombie-infection
$ npm install
```


## How to run

To run the game locally
```
npm start
```
To run unit tests 

```
npm test
```
To run the feature tests
```
npm cypress:open
```
Running the linter (eslint)
```
npm run lint
```

## Gameplay
Click the image below to watch the demo video!

[![Trick or Eat Brains](https://user-images.githubusercontent.com/39119623/47614346-96844300-da96-11e8-98a2-c3fdcdc6969f.jpg)](https://www.youtube.com/watch?v=vaUQY_MRhkU)

### Game Story
It is Halloween of 1986, a time when the boundary between physical and spiritual realms blurs. John is out with his fiance buying candy for the night's trick or treating when a hit and run puts his fiance to be in to a coma. At the emergency unit John notices a dark figure watching his partner; Death has come for her. John intervenes and makes a deal for his partners life. It turns out that the Reaper wants a day off to enjoy Halloween. Death decides John can take over for a night and if he can reap enough souls before the end of Halloween he can have what he wants. John must leave his soul with Death and send his zombified body through the streets to collect the denizens of towns and cities. 

### World Map Domination
Infection spreads across the map with a probability function that is modified based on random gameplay events, game success and player stat selection.

A city becomes playable once a cell adjacent to a city is infected.

### Top-Down Game

Run around the city turning as many victims as possible into zombies and increasing your hoard. You have a set amount of time and once its over you have the option to spend points on player buffs to increase your speed, aggression and resilience.

### Strategy

Total world domination is not possible without spending tokens gained by converting humans into zombies. For each 10 zombies converted, the player gains 1 token which can either be spent on improving top-down game stats (speed, resilience, aggression) or by unlocking special abilities that will boost the infection spread over the world map.

The game ends when the clock hits midnight or when the entire world has been overrun by the Zombie infection.

### Heroku

Trick or Eat Brains is hosted on heroku at

```
https://trick-or-eat-brains.herokuapp.com/
```





