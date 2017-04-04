/**
 * Created by Doron Warzager on 28/03/2017.
 */
import Greeting from './Greeting'
import Signin from './Signin'
import Signup from './Signup'
import Topbar from './Topbar'
import Explore from './Explore'
import Playlist from './Playlist'
import Player from './Player'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import React from 'react';


export default class Root extends React.Component {
// export default function  (){
  constructor() {
    super();

    this.nowPlaying = this.nowPlaying.bind(this);
    this.addPlaylist = this.addPlaylist.bind(this);

    this.state = {
      playerSong: 'none',
      playLists:[
    
      ]
    }

  }

  nowPlaying(newSong) {
    this.setState({playerSong: Object.assign({}, newSong)})
  }

  addPlaylist(song = {id: new Date()}, listTitle = 'temp'){

    const playlists = this.state.playLists.map((playlist)=>playlist);
    // const id=song.id || 2;
    // const songToAdd = song || {};
    const addedPlayList = {

      title: listTitle,
      id: song.id,
      songs:[
        song
      ]
    }

    // this.setState({playLists: Object.assign({}, playlists, addedPlayList)})
    playlists.push(addedPlayList);

    this.setState({playLists: playlists})

  }
  addSongToPlaylist(){

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
        <Topbar/>
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

              return <Explore playingNow={this.nowPlaying}
                              addPlaylist={this.addPlaylist}
                              listOfPlayLists={this.state.playLists}
                              {...props}/>


            }}/>
            <Route exact path="/playlist" render={(props) => {
              return <Playlist playingNow={this.nowPlaying}
                               playLists={this.state.playLists}
                               addPlaylist={this.addPlaylist}
                               {...props}/>

            }}/>


            {/*<Route path="/explore/:genre" component={Explore}/>*/}
            {/*<Route exact path="/playlist" component={Playlist}/>*/}


          </Switch>
        </main>
        <Player playingNow={this.state.playerSong}/>
      </div>)

    // }}/>


    // </div>
    // </BrowserRouter>
    // );
  };
}


