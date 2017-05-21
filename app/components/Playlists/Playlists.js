import './Playlists.scss'
import React from 'react';
import uuid from 'uuid';

import OnePlaylist from '../OnePlayList/OnePlayList'
import {xhrControll} from '../../utils/utils'


import {connect} from 'react-redux'
require('smoothscroll-polyfill').polyfill();


class Playlist extends React.Component {

  constructor() {
    super();

    this.state = {
      newList: '',
      effect: "btn-add-playlist btn-eff",
    }


  }


  creatUIPlyalist(playlistsExists) {

    if (!playlistsExists) {
      return (
        <h1 className="empty-playlist-msg">
          Why don't you create some nice playlist
        </h1>
      )
    }
    if (playlistsExists) {


      return (
        this.props.playlist.map((element, i) => {
          return (
            <div key={element.id} className="onePlaylistHolder"
                 ref={(onePlaylist) => this['playlist' + i] = onePlaylist}>
              <OnePlaylist
                element={element}
                {...this.props}/>
            </div>
          )
        })
      );
    }


  }

  playlistLengthController(title) {
    if (title.length > 20) {
      return title.slice(0, 17) + '...'
    }
    return title
  }

  listOfPlaylist() {

    return (

      this.props.playlist.map((playList, i) => {
        return <input key={uuid()} type="button" value={this.playlistLengthController(playList.title)}
                      className="playlist-links"
                      onClick={() => {
                        this['playlist' + i].scrollIntoView({block: "end", behavior: "smooth"});
                      }
                      }/>
      })
    )
  }


  savingNewSongJasonPlaylist(listId) {
    const addedPlayList = {
      title: 'New Playlist ',
      id: listId,
      songs: [],
    };

    xhrControll(addedPlayList, null, 'POST', 'save');
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
            this.savingNewSongJasonPlaylist(newId);

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


function mapDispatchToProps(dispatch) {
  return {
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
        type: 'AUTO_CLOSE_ALL_MENUS',
        state: false,
        e: e,
      })
    }
  }


}
function mapStateToProps(dataState) {
  return {
    playlist: dataState.playLists
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
