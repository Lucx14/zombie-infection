# Zombie infection

Code by:
- [Malachy Gilchrist](https://github.com/Mallig)
- [Josh Nickson](https://github.com/joshnickson)
- [James Sutherland](https://github.com/LondonJim)
- [Lucien Najev](https://github.com/Lucx14)

## Game Story

It is Halloween of 1986, a time when the boundry between physical and spiritual realms blurrs. John is out with his girlfirend buying candy for tonights trick or treating when a hit and run puts his wife in a coma. At the emergency unit John notices a dark figure watching his partner, Death has come for her. John intervenes and makes a deal for his partners life. It turns out that, able to blend into the crowd of costumed trick or treaters, the Reaper wants a day off to enjoy Halloween. Death decides John can take over for a night and if he can reap enough souls before the end of Halloween he can have what he wants. John must leave his soul with Death and send his zombified body through the streets to collect the denizens of towns and cities. John returns to Death with a horde to be reaped, but Death rescinds on the deal and John must use his horde to fight Death and bring back his partner.

## Technology

This project was built with Javascript and React.
We are using Cypress and Jest as our testing frameworks

## How to install

https://learntdd.in/react/
open the app and yarn start
to run tests yarn cypress

## How to run

clone the project and then npm install
Yarn or npm start   (this will run the program and get it running in the browser on localhost:3000)
Yarn or npm test    (this will run the unit tests in jest)
yarn or npm cypress:open  (This will run the cypress feature testing)
yarn or npm lint    (linting with eslint)

### MVP
#### Version 1

* user is on a screen with a world map
* be able to click on city
* taken to top-down local map
* move player(zombie) within top down local map - up down left right
* accumulate objects(people) - Timed one minute
* taken back to world map when when all objects accumulated

#### Version 2

* expand cities on world map
* top down local map add movement to objects, basic AI

#### Version 3

* A player stats page
* styling
