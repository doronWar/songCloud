import './OnePlayList.scss'
import React from 'react';
import Songthumbnail from '../Songthumbnail/Songthumbnail';

import  store from "../../store";
import {connect} from 'react-redux'
import {xhrControll} from '../../utils/utils'


class OnePlaylist extends React.Component {
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
  componentDidUpdate(prevProps) {

    this.inputState.focus();
    if (prevProps.newId !== this.props.newId) {
      this.focusingInputWhenNeeded();
    }
  }

  //if component was just created (compering ID ) then give it focus!
  componentDidMount() {
    this.focusingInputWhenNeeded()

  }

  focusingInputWhenNeeded() {
    if (this.props.newId === this.props.element.id) {
      this.togglePlaylistTitle();
      this.props.resetId();
    }
  }

  listCurentName(id) {
    const playlist = this.props.playlists.find((onePlaylits) => onePlaylits.id === id);
    return playlist.title
  }


  actionsOnSongJasonPlaylist(element, actionToDo) {
    const addedPlayList = {
      title: element.title,
      id: element.id,
      songs: [],
    };

    xhrControll(addedPlayList, null, 'POST', actionToDo);
  }


  render() {

    const titleState = this.state.isNameHidden ? "hiden" : ""
    const inputeState = this.state.isInputeHidden ? "ply-input-title hiden" : "ply-input-title"
    const element = this.props.element;

    return (
      <div key={element.id}>
        <li className="play-list-title" tabIndex="0">

          <p className={titleState }
             onClick={() => {
               this.togglePlaylistTitle()
             }}
          >{element.title}
            <span className="song-counter"><span>{element.songs.length}</span></span>
          </p>

          <input className={inputeState} type="text" tabIndex="0" value={this.listCurentName(element.id)}
                 ref={(inputState) => {
                   this.inputState = inputState
                 }}
                 onChange={(e) => {
                   this.props.changeName(e.target.value, element.id);
                 }}
                 onBlur={() => {
                   this.actionsOnSongJasonPlaylist(element, 'newName');
                   this.togglePlaylistTitle();
                 }}
                 onKeyDown={(e) => {
                   if(e.keyCode === 13) {
                     this.inputState.blur()
                   }
                 }}
          />

          <button className="del-btn btn-eff"
                  onClick={() => {
                    const deleteCheck = confirm(`Are you sure you want to delete "${this.inputState.value}" playlist?`);
                    if (deleteCheck) {
                      this.props.deleteList(element);

                      this.actionsOnSongJasonPlaylist(element, 'deleteList')
                    }

                  }}
          >Delete
          </button>
        </li>
        <ul className="playlist-song-holder">
          {element.songs.map((song) => {
            return (
              <li key={song.id} className="one-song">

                <Songthumbnail
                  song={song}
                  {...this.props}/>

              </li>)
          })}
        </ul>
      </div>
    )
  }


}

function mapStateToProps(dataState) {
  return {
    newId: dataState.newListId,
    playlists: dataState.playLists,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    resetId(){
      dispatch({
        type: 'RESET_LIST_ID'
      })
    },
    changeName(title, id){
      dispatch({
        type: 'CHANGE_NAME',
        name: title,
        id: id,
      })
    },
    deleteList(element){
      dispatch({
        type: 'REMOVE_PLAYLIST',
        playListId: element.id,
      })
    }
  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(OnePlaylist);
