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
// export default function  (){
  constructor() {
    super();

    this.redirect = this.redirect.bind(this);
    this.findSong = this.findSong.bind(this);
    this.FindSearchTerm = this.FindSearchTerm.bind(this);
    this.goToSignIn = this.goToSignIn.bind(this);

    this.closeAllDropDownMenues = this.closeAllDropDownMenues.bind(this);
  //  this.toggleDropDownMenu = this.toggleDropDownMenu.bind(this);

    this.closingTheDrompDownMenu = this.closingTheDrompDownMenu.bind(this);
    this.state = {
      // playLists: [],
  //    showDropMenu: false,

    }

  }


  //        closing globaly all menues when clicked anywhere

  closeAllDropDownMenues(e) {
    if (e.target.className !== "add-to-playlist-menu" &&
      e.target.className !== "create-list-btn-explore" &&
      e.target.className !== "seporater-line" &&
      e.target.className !== "playlist-checkbox-holder" &&
      e.target.className !== "fa add-to-playlist-icon fa-heart" &&
      e.target.className !== "one-list-checkbox" &&
      e.target.className !== "for-global-flag") {

      this.closingTheDrompDownMenu()
      // this.setState({showDropMenu: false})
    }
  }

  closingTheDrompDownMenu(){
    store.dispatch({
      type:'AUTO_CLOSE',
      state: false,
    })
    // this.setState({showDropMenu: false})
  }
  // toggleDropDownMenu() {
  //   store.dispatch({
  //     type:'AUTO_CLOSE',
  //     state: true,
  //   })
  //   // this.setState({showDropMenu: true})
  // }


  FindSearchTerm() {
    console.info("explore", store.getState());
    this.props.history.push(`/explore/${store.getState().searchForMusic}`)
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

  componentDidMount() {

    // store.subscribe(() => {
    //   this.forceUpdate();
    // });

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

            <Route path="/explore/:genre" render={(props) => {

              return <Explore
                redirect={this.redirect}
      //          findSong={this.findSong}
                oneDropMenuOpen={this.state.oneDropMenuOpen}
                closeAllDropDownMenues={this.closeAllDropDownMenues}
                showDropMenu={this.state.showDropMenu}
                toggleDropDownMenu={this.toggleDropDownMenu}
 //               autoClose={this.closingTheDrompDownMenu}
                {...props}/>


            }}/>
            <Route exact path="/playlist" render={(props) => {
              return <Playlist playingNow={this.nowPlaying}
                               redirect={this.redirect}
                               oneDropMenuOpen={this.state.oneDropMenuOpen}
    //                           findSong={this.findSong}
                               showDropMenu={this.state.showDropMenu}
                               toggleDropDownMenu={this.toggleDropDownMenu}
                               closeAllDropDownMenues={this.closeAllDropDownMenues}
                               {...props}/>

            }}/>


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
