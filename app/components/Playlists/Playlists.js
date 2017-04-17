
import './Playlists.scss'
import React from 'react';
import uuid from 'uuid';
import Songthumbnail from '../Songthumbnail/Songthumbnail';
import OnePlaylist from '../OnePlayList/OnePlayList'

import  store from "../../store";
import { connect } from 'react-redux'
require('smoothscroll-polyfill').polyfill();



class Playlist extends React.Component {

  constructor() {
    super();

    this.state = {
      newList: '',
      effect: "btn-add-playlist btn-eff",
    }


  }

  //
  // componentDidUpdate(prevProps) {
  //   const haveNewPlayList = this.props.playLists.find((oneList) => oneList.id === this.props.newListId);
  //   if (haveNewPlayList) {
  //     this.setState({newListId: this.props.newListId})
  //   }
  //
  // }


  creatUIPlyalist(playlistsExists) {

    if (!playlistsExists) {
      return (
        <h1 className="empty-playlist-msg">
          Why don't you create some nice playlist
        </h1>
      )
    }
    if (playlistsExists) {

  //    const titleState = this.state.isNameHidden ? "hiden" : ""
  //    const inputeState = this.state.isInputeHidden ? "ply-input-title hiden" : "ply-input-title"
      return (
        this.props.playlist.map((element, i) => {
          return (
            <div key={element.id}
            ref={(onePlaylist)=>this['playlist'+i]=onePlaylist}>
              <OnePlaylist
                //playlistsExists={playlistsExists}
       //                    nowPlaying={this.props.playingNow}
                           element={element}
       //                    showDropMenu={this.props.showDropMenu}
                           toggleDropDownMenu={this.props.toggleDropDownMenu}
                           redirect={this.props.redirect}


                           dropDownMenuClose={this.props.closeDropDownMenu}
  //                         findSong={this.props.findSong}
              />


            </div>
          )
        })
      );
    }


  }


  listOfPlaylist() {

    return (

      this.props.playlist.map((playList,i) => {
        return <input key={uuid()} type="button" value={playList.title} className="playlist-links"
        onClick={()=>{
          this['playlist'+i].scrollIntoView({block: "end", behavior: "smooth"});
          this.props.saveListId(playList.id);

        }
        }/>
      })
    )
  }


  render() {

    const playlistsExists = this.props.playlist.length !== 0

    return (
      <div className="plalist-page"
           onClick={(e) => this.props.closeAllMenues(e)}>

        <aside className="playlist-holder">
          <button className="btn-add-playlist btn-eff" onClick={() => {
            const newId = uuid();
            this.props.addPlayList(newId);
            this.props.saveListId(newId);

//            store.dispatch({
//              type: 'ADD_PLAYLIST',
//              newId: newId,
//            });
//           store.dispatch({
//              type: 'NEW_LIST_ID',
//              newListId: newId,

 //           });

  //          {/*this.addNewPlayListBybutton()*/
  //          }
          }}>Add new Playlist
          </button>
          <span className="seperating-lien"/>
          {this.listOfPlaylist()}
        </aside>
        <section className="play-list-background">
          <ul className="temp-ul">
            {this.creatUIPlyalist(playlistsExists)}
          </ul>
        </section>
      </div>

    )
  }
}


function mapDispatchToProps(dispatch){
  return{
    addPlayList(newId){
      dispatch({
        type: 'ADD_PLAYLIST',
        newId: newId,
      });
    },
    saveListId(newId){
      dispatch({
        type: 'NEW_LIST_ID',
        newListId: newId,

      });
    },
    closeAllMenues(e){
      dispatch({
        type:'AUTO_CLOSE_ALL_MENUS',
        state: false,
        e:e,
      })
    }
  }


}
function mapStateToProps(dataState) {
  return{
    playlist: dataState.playLists
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
