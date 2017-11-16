import React from 'react'
import ReactDOM from 'react-dom'
import CounterContainer from './containers/CounterContainer';
import AddItemContainer from './containers/AddItemContainer';
import './assets/styles/main.css';

ReactDOM.render(
  <div>
    <CounterContainer />
    <AddItemContainer />
  </div>, document.getElementById("render-app")
);