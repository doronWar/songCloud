/**
 * Created by Doron Warzager on 06/04/2017.
 */
import React from "react";
import  store from "../../store";
import  { connect } from "react-redux";


class AddToPlatylistInputController extends React.Component {
  constructor() {
    super();
    this.state = {
      isChosen: false,
    }
  }

  changeInputState(listId) {
    this.setState({isChosen: !this.state.isChosen}, () => {
      this.props.addAndRemoveSongFromPlayList(listId, this.props.song, this.state.isChosen);
      this.props.playLists.forEach((onePlayList)=>{
        onePlayList.songs.forEach((oneSong)=>{
          if(oneSong.id=== this.props.song.id){
            this.props.MarkingSongAsInPlayList();
          }
        })
      });

      // store.dispatch({
      //   type:'ADD_AND_REMOVE_SONG_FROM_PLAYLIST',
      //   listId:listId,
      //   song:this.props.song,
      //   toAdd:this.state.isChosen,
      // })
      // this.props.addNRemoveSongToPlaylist(this.props.song, this.state.isChosen, listId)
    })
  }

  changeInputByLabelState(listId) {
    this.setState({isChosen: !this.state.isChosen})
  }

  componentDidMount() {

    this.props.playLists.forEach((onePlayList)=>{
      onePlayList.songs.forEach((oneSong)=>{
        if(oneSong.id=== this.props.song.id){
          this.setState({isChosen: !this.state.isChosen})
        }
      })
    });

    // this.props.findSong(this.props.oneList, this.props.song);
    // const doesExists = this.props.findSong(this.props.oneList, this.props.song);
    // if (doesExists) {
    //
    // }

  }


  componentDidUpdate(){
    if(this.state.isChosen) {
      // this.props.MarkingSongAsInPlayList();
    }
  }


  render() {
    const oneList = this.props.oneList;
    return (
      <div className="one-list-checkbox"> {/* had here a key - key={oneList.id}*/}
        <label htmlFor={oneList.id} className="for-global-flag">
          <input type="checkbox" className="for-global-flag"
                 id={oneList.id} value={oneList.title}
                 checked={this.state.isChosen}
                 onChange={() => {

                   this.changeInputState(oneList.id);

                 }}
          />

          {oneList.title}</label>
      </div>
    )
  }

}

function mapStateToProps(stateData) {
  return {

    playLists: stateData.playLists,

  }
}
function mapDispatchToProps(dispatch) {

  return {
    addAndRemoveSongFromPlayList(listId, song, toAdd){
      dispatch({
        type:'ADD_AND_REMOVE_SONG_FROM_PLAYLIST',
        listId:listId,
        song:song,
        toAdd: toAdd,
      })
    }
  }
}


function mapStateToProps(stateData) {
  return {
    isDropDowmMenuOpen: stateData.oneDropDownMenuOpen,
    playLists: stateData.playLists,
    doesSongExist: stateData.doesSongExist,
  }
}

export default connect(mapStateToProps,mapDispatchToProps )(AddToPlatylistInputController);

