import './OnePlayList.scss'
import React from 'react';
import Songthumbnail from '../Songthumbnail/Songthumbnail';

import  store from "../../store";

export default class OnePlaylist extends React.Component {
  constructor() {
    super();
    this.state = {
      isNameHidden: false,
      isInputeHidden: true,
    }
  }

  togglePlaylistTitle() {
    this.setState({isNameHidden: !this.state.isNameHidden})
    this.setState({isInputeHidden: !this.state.isInputeHidden})
  }


  //gaing focuse on inpute when it appears
  componentDidUpdate() {
    this.inputState.focus()
  }

  //if component was just created (compering ID ) then give it focus!
  componentDidMount() {

    if (store.getState().newListId === this.props.element.id) {
      this.togglePlaylistTitle();
      store.dispatch({
        type:'RESET_LIST_ID'
      })
      //this.props.resetNewListId();      //reset saved id in Root

    }
  }

  render() {

    const titleState = this.state.isNameHidden ? "hiden" : ""
    const inputeState = this.state.isInputeHidden ? "ply-input-title hiden" : "ply-input-title"
    const element = this.props.element;

    return (
      <div key={element.id}>
        <li className="play-list-title">

          <p className={titleState }
             onClick={() => {
               this.togglePlaylistTitle()
             }}
          >{element.title}
          </p>

          <input className={inputeState} type="text" tabIndex="0" value={element.title}
                 ref={(inputState) => {
                   this.inputState = inputState
                 }}
                 onChange={(e) => {
                   store.dispatch({
                     type:'CHANGE_NAME',
                     name:e.target.value,
                     id:element.id,
                   })
//                   this.props.changeName(e.target.value, element.id)
                 }}
                 onBlur={() => {

                   this.togglePlaylistTitle();

                 }}
          />
          <span>{element.songs.length}</span>
          <button className="del-btn btn-eff"
                  onClick={() => {
                    store.dispatch({
                      type:'REMOVE_PLAYLIST',
                      playListId:element.id,
                    });
//                    this.props.removePlayList(element.id)
                  }}
          >Delete
          </button>
        </li>
        <ul className="playlist-song-holder">
          {element.songs.map((song) => {
            return (
              <li key={song.id} className="one-song">

                <Songthumbnail
                  nowPlaying={this.props.nowPlaying}
   //               {/*listOfPlayLists={this.props.listOfPlayLists}*/}
                  song={song}
                  redirect={this.props.redirect}
                  dropDownMenuClose={this.props.closeDropDownMenu}
                  setDropDownMenuId={this.props.setDropDownMenuId}
                  dropDownMenuState={this.props.oneDropMenuOpen}
                  dropDownMenuId={this.props.dropDownMenuId}
                  findSong={this.props.findSong}
  //                addNRemoveSongToPlaylist={this.props.addNRemoveSongToPlaylist}
                  showDropMenu={this.props.showDropMenu}
                  toggleDropDownMenu={this.props.toggleDropDownMenu}
                  closeAllDropDownMenues={this.props.closeAllDropDownMenues}/>


              </li>)
          })}
        </ul>
      </div>



    )
  }


}
/*
 render(){
 console.log(this.props)
 if(!this.props.playlistsExists){
 return (
 <h1 className="empty-playlist-msg">
 Why don't you create some nice playlist
 </h1>
 )
 }
 if(this.props.playlistsExists){

 const titleState= this.state.isNameHidden? "hiden": ""
 const inputeState= this.state.isInputeHidden? "ply-input-title hiden" : "ply-input-title"
 return (
 <div>
 {this.props.playLists.map((element)=>{
 return(
 <div key={element.id}>
 <li  className="play-list-title">

 <p className={titleState }
 onClick={()=>{this.togglePlaylistTitle()}}
 >{element.title}
 </p>

 <input className={inputeState} type="text" tabIndex="0"value={element.title}

 onChange={(e)=>{this.props.changeName(e.target.value, element.id)}}
 onBlur={()=>{this.togglePlaylistTitle()}}
 />
 <span>{element.songs.length}</span>
 <button className="del-btn">Delete</button>
 </li>
 <ul className="playlist-song-holder">
 {element.songs.map((song) =>{
 return(
 <li key={song.id} className="one-song">
 <Songthumbnail
 nowPlaying={this.props.playingNow}
 listOfPlayLists={this.props.listOfPlayLists}
 song={song}/>
 </li>)
 })}
 </ul>
 </div>



 )})
 }
 </div>

 );
 }




 }*/



