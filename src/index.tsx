import React from 'react'
import ReactDOM from 'react-dom'
import CounterContainer from './containers/CounterContainer';
import SelectedGodContainer from './containers/SelectGodContainer';
import './assets/styles/main.css';

ReactDOM.render(
  <div>
    <CounterContainer />
    <SelectedGodContainer />
  </div>, document.getElementById("render-app")
);