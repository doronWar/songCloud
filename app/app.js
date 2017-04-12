import 'normalize.css/normalize.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'font-awesome/css/font-awesome.css';
// import 'surface/prod/css/surface_styles.css';
import './assets/styles/main.scss';
import store from './store'

import ReactDOM from 'react-dom';
import React from 'react';

import Routes from './components/Routes/Routes'


// function renderApp() {
  ReactDOM.render(<Routes/>, document.querySelector('#root'));
// }
//
// renderApp();
//
// store.subscribe(()=>{
//   renderApp();
// });

