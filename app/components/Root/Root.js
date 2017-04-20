/**
 * Created by Doron Warzager on 28/03/2017.
 */
import Greeting from '../Greeting/Greeting'
import Signin from '../Signin/Signin'
import Signup from '../Signup/Signup'
import Topbar from '../Topbar/Topbar'
import Explore from '../Explore/Explore'
import Playlist from '../Playlists/Playlists'
import Player from '../Player/Player'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import React from 'react';
import uuid from 'uuid';

import store from './../../store'


export default class Root extends React.Component {

  constructor() {
    super();

    this.redirect = this.redirect.bind(this);
    this.findSong = this.findSong.bind(this);
    this.FindSearchTerm = this.FindSearchTerm.bind(this);
    this.goToSignIn = this.goToSignIn.bind(this);

  }


  FindSearchTerm() {
    this.props.history.push(`/explore/${store.getState().searchForMusic}?search=true`);
  }

  redirect() {
    this.props.history.push("/playlist")
  }


  findSong(playList, song) {
    const savedPlayList = store.getState().playLists.find((thePlayList) => thePlayList.id === playList.id);
    return savedPlayList.songs.find((savedSong) => {
      return savedSong.id === song.id
    });
  }

  goToSignIn() {

    this.props.history.push("/signin");
  }


  render() {
    // return (
    // <BrowserRouter>
    //   <div>
    {/*<Route exact path="/signup" component={Signup}/>*/
    }
    {/*<Route exact path="/signin" component={Signin}/>*/
    }
    // <Route path="/" component={()=>{
    return (
      <div>
        <Topbar
          FindSearchTerm={this.FindSearchTerm}
          goToSignIn={this.goToSignIn}/>
        <main>

          <Switch>
            <Route exact path="/" render={() => {
              return <Redirect to="/explore/trance"/>
            }
            }/>
            <Route exact path="/explore" render={() => {
              return <Redirect to="/explore/trance"/>
            }
            }/>
            <Route exact path="/Explore" component={Explore}/>

            <Route path="/explore/:genre" component={Explore}/>

            <Route exact path="/playlist" component={Playlist}/>

            {/*<Route path="/explore/:genre" component={Explore}/>*/}
            {/*<Route exact path="/playlist" component={Playlist}/>*/}


          </Switch>
        </main>
        <Player/>
      </div>)

    // }}/>


    // </div>
    // </BrowserRouter>
    // );
  };
}
