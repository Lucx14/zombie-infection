import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// After some investigation online all resources are suggesting that index.js in a react app does not need to be unit tested and so i have added a jest ignore for it in the package.json

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
