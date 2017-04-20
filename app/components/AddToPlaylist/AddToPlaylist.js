import './AddToPlaylist.scss'
import {xhrControll} from '../../utils/utils'
import React from 'react';
import AddToPlatylistInputController from '../AddToPlatylistInputController/AddToPlatylistInputController';
import {connect} from 'react-redux'
import uuid from 'uuid'

class AddToPlaylist extends React.Component {


  dropdownMenuOfPlayLists() {

    return (
      this.props.playlists.map((oneList) => {
        return (
          <div key={oneList.id}>

            <AddToPlatylistInputController
              oneList={oneList}
              song={this.props.song}
            />

          </div>

        )
      })
    )

  }

  addNewPlayList(id) {

    this.props.setNewId(id);
    this.props.addAPlayList(this.props.song, id);
    this.props.closingDropFownMenu(); //making sure dropDown menu is restarted
    this.savingNewSongJasonPlaylist(id, this.props.song);
    this.props.history.push("/playlist")
    // this.props.redirect();
  }


  savingNewSongJasonPlaylist(listId, song) {

    const addedPlayList = {

      title: 'New Playlist ',
      id: listId,
      songs: [song],
    };
    xhrControll(addedPlayList, null, 'POST', 'save');

  }


  render() {

    return (
      <div className="add-to-playlist-menu">
        <p className="for-global-flag">Add to playlist</p>
        {this.props.parent && <input className="create-list-btn-explore" type="button" value="Create playlist +"
                                     onClick={() => {
                                       this.addNewPlayList(uuid())

                                     }}/>}
        <div className="seporater-line"/>
        <div className="playlist-checkbox-holder">

          {this.dropdownMenuOfPlayLists()}
        </div>

      </div>
    )
  }

}

function mapDispatchToProps(dispatch) {
  return {
    addAPlayList(song, id){
      dispatch({
        type: 'ADD_PLAYLIST',
        song: song,
        newId: id,
      });
    },
    setNewId(id){
      dispatch({
        type: 'NEW_LIST_ID',
        newListId: id,
      });
    },
    trueFlageForDropDownMenu(){
      dispatch({
        type: 'AUTO_CLOSE',
        state: true,
      })
    },
  }
}

function mapStateToProps(dataState) {
  return {
    playlists: dataState.playLists,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToPlaylist)

