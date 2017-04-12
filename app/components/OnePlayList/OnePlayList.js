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
                  song={song}
                  redirect={this.props.redirect}
                  findSong={this.props.findSong}
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


