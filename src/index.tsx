import React from 'react'
import ReactDOM from 'react-dom'
import CounterContainer from './containers/CounterContainer';
import SelectedGodContainer from './containers/SelectGodContainer';
import CreateGodContainer from './containers/CreateGodContainer';
import './assets/styles/main.css';

ReactDOM.render(
  <div>
    <CounterContainer />
    <SelectedGodContainer />
    <CreateGodContainer />
  </div>, document.getElementById("render-app")
);