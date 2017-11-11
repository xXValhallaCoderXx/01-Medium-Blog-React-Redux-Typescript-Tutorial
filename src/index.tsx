import React from 'react'
import ReactDOM from 'react-dom'
import HOC from './containers/Counter';
import './assets/styles/main.css';

ReactDOM.render(
  <HOC />, document.getElementById("render-app")
);