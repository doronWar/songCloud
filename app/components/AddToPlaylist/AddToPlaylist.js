import './AddToPlaylist.scss'
import React from 'react';
import AddToPlatylistInputController from '../AddToPlatylistInputController/AddToPlatylistInputController';
import { connect } from 'react-redux'
import  store from "../../store";
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
              findSong={this.props.findSong}
            />

          </div>

        )
      })
    )

  }

  addNewPlayList(id){

    this.props.setNewId(id);
    this.props.addAPlayList(this.props.song,id);
    this.props.closingDropFownMenu() ; //making sure dropDown menu is restarted

    this.props.redirect();
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

function mapDispatchToProps(dispatch){
  return{
    addAPlayList(song,id){
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
    }
  }
}

function mapStateToProps(dataState){
  return{
    playlists: dataState.playLists,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToPlaylist)


//left over from newlist on click:
// store.dispatch({
//   type: 'ADD_PLAYLIST',
//   song: this.props.song,
//   newId: this.props.song.id,
// });              //,()=>{this.props.redirect()}
// store.dispatch({
//   type: 'SET_DROPDOWN_MENU',
//   menuId: this.props.song.id,
// });
//
// this.props.redirect();
// {/*this.creatNewPlyList()*/
// }
//this.props.closingDropFownMenu()  //making sure dropDown menu is restarted
