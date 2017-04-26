import 'normalize.css/normalize.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'font-awesome/css/font-awesome.css';
import './assets/styles/main.scss';
import { serverLocation } from './utils/utils'

import ReactDOM from 'react-dom';
import React from 'react';

import Routes from './components/Routes/Routes';
import {Provider} from 'react-redux';
import store from './store'




function testingGettingJasonPlaylist() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `${serverLocation}/load`);

  xhr.send();

  xhr.addEventListener('load', (e) => {

    store.dispatch({
      type: 'LOAD_APP_LOAD_PLAYLIST',
      loadedPlaylistFromServer: JSON.parse(e.target.responseText)
    })

  })
}


testingGettingJasonPlaylist();

ReactDOM.render(
  <Provider store={ store }>
    <Routes/>
  </Provider>,
  document.querySelector('#root'));

