import 'normalize.css/normalize.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'font-awesome/css/font-awesome.css';
// import 'surface/prod/css/surface_styles.css';
import './assets/styles/main.scss';
// import store from './store'

import ReactDOM from 'react-dom';
import React from 'react';

import Routes from './components/Routes/Routes';
import {Provider} from 'react-redux';
import store from './store'

// function renderApp() {

ReactDOM.render(
  <Provider store={ store }>
    <Routes/>
  </Provider>,
  document.querySelector('#root'));
// }
//
// renderApp();
//
// store.subscribe(()=>{
//   renderApp();
// });

