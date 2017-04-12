/**
 * Created by Doron Warzager on 28/03/2017.
 */
import './Playlists.scss'
import React from 'react';
import uuid from 'uuid';
import Songthumbnail from '../Songthumbnail/Songthumbnail';
import OnePlaylist from '../OnePlayList/OnePlayList'

import  store from "../../store";


export default class Playlist extends React.Component {

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

      const titleState = this.state.isNameHidden ? "hiden" : ""
      const inputeState = this.state.isInputeHidden ? "ply-input-title hiden" : "ply-input-title"
      return (
        store.getState().playLists.map((element, i) => {
          return (
            <div key={element.id}>
              <OnePlaylist playlistsExists={playlistsExists}
                           nowPlaying={this.props.playingNow}
                           element={element}
                           showDropMenu={this.props.showDropMenu}
                           toggleDropDownMenu={this.props.toggleDropDownMenu}
                           redirect={this.props.redirect}


                           dropDownMenuClose={this.props.closeDropDownMenu}
                           findSong={this.props.findSong}
              />


            </div>
          )
        })
      );
    }


  }


  listOfPlaylist() {

    return (

      store.getState().playLists.map((playList) => {
        return <input key={uuid()} type="button" value={playList.title} className="playlist-links"/>
      })
    )
  }


  render() {

    const playlistsExists = store.getState().playLists.length !== 0

    return (
      <div className="plalist-page"
           onClick={(e) => this.props.closeAllDropDownMenues(e)}>

        <aside className="playlist-holder">
          <button className="btn-add-playlist btn-eff" onClick={() => {
            const newId = uuid();
            store.dispatch({
              type: 'ADD_PLAYLIST',
              newId: newId,
            });
            store.dispatch({
              type: 'NEW_LIST_ID',
              newListId: newId,

            });

            {/*this.addNewPlayListBybutton()*/
            }
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
