/**
 * Created by Doron Warzager on 28/03/2017.
 */
import Greeting from './Greeting'
import Signin from './Signin'
import Signup from './Signup'
import Topbar from './Topbar'
import Explore from './Explore'
import Playlist from './Playlists'
import Player from './Player'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import React from 'react';
import uuid from 'uuid';
// console.info(uuid());


export default class Root extends React.Component {
// export default function  (){
  constructor() {
    super();

    this.nowPlaying = this.nowPlaying.bind(this);
    this.addPlaylist = this.addPlaylist.bind(this);
    this.changePlayListName = this.changePlayListName.bind(this);
    this.addNRemoveSongToPlaylist=this.addNRemoveSongToPlaylist.bind(this);
    this.findSong = this.findSong.bind(this);
    this.resetNewListId= this.resetNewListId.bind(this);
    this.searchForMusic = this.searchForMusic.bind(this)
    this.FindSearchTerm = this.FindSearchTerm.bind(this)

    this.state = {
      playerSong: 'none',
      playLists:[

      ],
      newListId:"",
      searchMusic:"",

    }

  }

  searchForMusic(searchTerm){
  this.setState({searchMusic:searchTerm})
  }

  FindSearchTerm(){
    this.props.history.push(`/explore/${this.state.searchMusic}`)
  }

  nowPlaying(newSong) {
    this.setState({playerSong: Object.assign({}, newSong)})
  }

  addPlaylist(song , redirect){

    const playlists = this.state.playLists.map((playlist)=>playlist);

    const addedPlayList = {

      title: 'New Playlist ',
      id: uuid(),
      songs: song? [song] : []
    }


    playlists.push(addedPlayList);
    if(!redirect){
      this.setState({playLists: playlists, newListId:addedPlayList.id})
    }
    if(redirect){
      this.setState({playLists: playlists, newListId:addedPlayList.id}, ()=>{this.props.history.push("/playlist")}  )

    }
  }

  resetNewListId(){
    this.setState({newListId: ""});
  }

  changePlayListName(name, id){

    const playLists = [...this.state.playLists];

    const onePlayList = playLists.find((aPlayList) => aPlayList.id===id);
    onePlayList.title = name;
    this.setState({playLists: playLists})

  }


  addNRemoveSongToPlaylist(song, toAdd, listId){
    const playlists = [...this.state.playLists];
    const onePlayList= playlists.find((playList)=> playList.id=== listId)
    if(toAdd){
        onePlayList.songs.push(song);
        this.setState({playLists: playlists})
    }
    else{
      const indexOfSong= onePlayList.songs.indexOf((oneSong)=>{
        return oneSong.id===song.id;
      })
      onePlayList.songs.splice(indexOfSong,1);
      this.setState({playLists: playlists})
    }

  }

  findSong(playList, song){
    const savedPlayList= this.state.playLists.find((thePlayList)=> thePlayList.id===playList.id);
    return savedPlayList.songs.find((savedSong)=>{
      return savedSong.id===song.id });
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
                goToSignIn={this.props.goToSignIn}/>
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
                              addNRemoveSongToPlaylist={this.addNRemoveSongToPlaylist}
                              findSong={this.findSong}
                              newListId={this.state.newListId}
                              {...props}/>


            }}/>
            <Route exact path="/playlist" render={(props) => {
              return <Playlist playingNow={this.nowPlaying}
                               playLists={this.state.playLists}
                               addPlaylist={this.addPlaylist}
                               changeName = {this.changePlayListName}
                               listOfPlayLists={this.state.playLists}
                               newListId={this.state.newListId}
                               resetNewListId={this.resetNewListId}
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


