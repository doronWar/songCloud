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
// console.info(uuid());


export default class Root extends React.Component {
// export default function  (){
  constructor() {
    super();

    // this.nowPlaying = this.nowPlaying.bind(this);
    this.addPlaylist = this.addPlaylist.bind(this);
    this.changePlayListName = this.changePlayListName.bind(this);
    this.addNRemoveSongToPlaylist = this.addNRemoveSongToPlaylist.bind(this);
    this.findSong = this.findSong.bind(this);
    this.resetNewListId = this.resetNewListId.bind(this);
    this.searchForMusic = this.searchForMusic.bind(this);
    this.FindSearchTerm = this.FindSearchTerm.bind(this);
    this.goToSignIn = this.goToSignIn.bind(this);
    this.removePlayList = this.removePlayList.bind(this)


    this.closeDropDownMenu = this.closeDropDownMenu.bind(this);
    this.setDropDownMenuId = this.setDropDownMenuId.bind(this);
    this.closeAllDropDownMenues= this.closeAllDropDownMenues.bind(this);
    this.toggleDropDownMenu = this.toggleDropDownMenu.bind(this);



    this.state = {
      playerSong: 'none',
      playLists: [],
      newListId: "",
      searchMusic: "",
      oneDropMenuOpen: false,
      dropDownMenuId: '',
      showDropMenu: false,

    }

  }


  //        closing globaly all menues when clicked anywhere

  closeAllDropDownMenues(e){
    if(e.target.className!=="add-to-playlist-menu"&&
      e.target.className!=="create-list-btn-explore"&&
      e.target.className!== "seporater-line"&&
      e.target.className!== "playlist-checkbox-holder"&&
      e.target.className!== "fa add-to-playlist-icon fa-heart"&&
      e.target.className!== "one-list-checkbox" &&
      e.target.className!== "for-global-flag") {

      this.setState({showDropMenu:false})
    }
  }

  toggleDropDownMenu(){
    console.info(this.state.showDropMenu);

    this.setState({showDropMenu:true})
  }


//                                  opening only one menu at a time
  closeDropDownMenu(songId) {
    if (songId === this.state.dropDownMenuId) {
      this.setState({oneDropMenuOpen: !this.state.oneDropMenuOpen})
    }
  }

  setDropDownMenuId(menuId) {
    this.setState({dropDownMenuId: menuId}, () => {
      this.closeDropDownMenu(menuId)
    });
  }


  searchForMusic(searchTerm) {
    this.setState({searchMusic: searchTerm})
  }

  FindSearchTerm() {
    this.props.history.push(`/explore/${this.state.searchMusic}`)
  }



  addPlaylist(song, redirect) {

    const playlists = this.state.playLists.map((playlist) => playlist);

    const addedPlayList = {

      title: 'New Playlist ',
      id: uuid(),
      songs: song ? [song] : []
    }


    playlists.push(addedPlayList);
    if (!redirect) {
      this.setState({playLists: playlists, newListId: addedPlayList.id})
    }
    if (redirect) {
      this.setState({playLists: playlists, newListId: addedPlayList.id}, () => {
        this.props.history.push("/playlist")
      })

    }
  }

  removePlayList(playListId) {
    const playLists = [...this.state.playLists];
    const indexToRemove = playLists.findIndex((onePlayList)=>onePlayList.id===playListId)
    playLists.splice(indexToRemove, 1);
    this.setState({playLists: playLists});
  }



  resetNewListId() {
    this.setState({newListId: ""});
  }

  changePlayListName(name, id) {

    const playLists = [...this.state.playLists];

    const onePlayList = playLists.find((aPlayList) => aPlayList.id === id);
    onePlayList.title = name;
    this.setState({playLists: playLists})

  }


  addNRemoveSongToPlaylist(song, toAdd, listId) {
    const playlists = [...this.state.playLists];
    const onePlayList = playlists.find((playList) => playList.id === listId);
    let indexOfSong;

    if (toAdd) {
      onePlayList.songs.push(song);
      this.setState({playLists: playlists})
    }
    else {

      indexOfSong = onePlayList.songs.findIndex((oneSong) => {
        return oneSong.id === song.id;
      });

      onePlayList.songs.splice(indexOfSong, 1);
      this.setState({playLists: playlists})
    }

  }

  findSong(playList, song) {
    const savedPlayList = this.state.playLists.find((thePlayList) => thePlayList.id === playList.id);
    return savedPlayList.songs.find((savedSong) => {
      return savedSong.id === song.id
    });
  }

  goToSignIn() {

    this.props.history.push("/signin");
  }

  componentDidMount(){

    store.subscribe(()=>{
      this.forceUpdate();
    });

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
        <Topbar searchForMusic={this.searchForMusic}
                searchMusic={this.state.searchMusic}
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
                              addPlaylist={this.addPlaylist}
                              listOfPlayLists={this.state.playLists}
                              addNRemoveSongToPlaylist={this.addNRemoveSongToPlaylist}
                              findSong={this.findSong}
                              newListId={this.state.newListId}
                              oneDropMenuOpen={this.state.oneDropMenuOpen}
                              dropDownMenuId={this.state.dropDownMenuId}
                              closeDropDownMenu={this.closeDropDownMenu}
                              setDropDownMenuId={this.setDropDownMenuId}
                              closeAllDropDownMenues={this.closeAllDropDownMenues}
                              showDropMenu={this.state.showDropMenu}
                              toggleDropDownMenu={this.toggleDropDownMenu}
                              {...props}/>


            }}/>
            <Route exact path="/playlist" render={(props) => {
              return <Playlist playingNow={this.nowPlaying}
                               playLists={this.state.playLists}
                               addPlaylist={this.addPlaylist}
                               changeName={this.changePlayListName}
                               listOfPlayLists={this.state.playLists}
                               newListId={this.state.newListId}
                               resetNewListId={this.resetNewListId}
                               oneDropMenuOpen={this.state.oneDropMenuOpen}
                               dropDownMenuId={this.state.dropDownMenuId}
                               closeDropDownMenu={this.closeDropDownMenu}
                               setDropDownMenuId={this.setDropDownMenuId}
                               findSong={this.findSong}
                               addNRemoveSongToPlaylist={this.addNRemoveSongToPlaylist}
                               removePlayList={this.removePlayList}
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
//from player: playingNow={this.state.playerSong}

//from explore: playingNow={this.nowPlaying}


// nowPlaying(newSong) {
//   this.setState({playerSong: Object.assign({}, newSong)})
// }
