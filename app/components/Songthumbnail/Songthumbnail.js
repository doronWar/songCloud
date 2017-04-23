/**
 * Created by Doron Warzager on 29/03/2017.
 */
import './Songthumbnail.scss'
import  AddToPlaylist from "../AddToPlaylist/AddToPlaylist";
import 'font-awesome/css/font-awesome.css';
import 'normalize.css/normalize.css';
import  React from "react";


import {connect} from 'react-redux';

class Songthumbnail extends React.Component {
  constructor() {
    super();
    this.closingDropFownMenu = this.closingDropFownMenu.bind(this)
    this.state = {
      clientId: "?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z",
      showDropDownMenu: false,

    };
    this.MarkingSongAsInPlayList = this.MarkingSongAsInPlayList.bind(this);
    this.closingDropFownMenu = this.closingDropFownMenu.bind(this)
  }


  songTime() {
    let ms = this.props.song.duration;
    const min = Math.floor(ms / 60000);
    const sec = ((ms % 60000) / 1000).toFixed(0);
    return min + ':' + sec
  }


  changeHeartState() {

    if (!this.props.isDropDowmMenuOpen) {

      this.props.trueFlageForDropDownMenu();
      this.setState({showDropDownMenu: !this.state.showDropDownMenu});   //opening dropDownMenu
      this.heartIcon.classList.toggle('chosen');
    }
    else {
      this.props.falseFlageForDropDownMenu();
    }
  }


  MarkingSongAsInPlayList() {

    let existsInPlayList = false; //dealling with repetetive mounting becouse of connect
    this.props.playLists.forEach((onePlayList) => {
      onePlayList.songs.forEach((oneSong) => {
        if (oneSong.id === this.props.song.id) {
          if (!existsInPlayList) {

            this.heartIcon.classList.toggle('fa-heart-o');
            // this.heartIcon.classList.toggle('chosen');
            this.heartIcon.classList.toggle('fa-heart');
            existsInPlayList = true;
            // this.state.existsInPlayList = true;
          }

        }
      })
    });
  }


  componentDidMount() {
    this.MarkingSongAsInPlayList();

  }


  //dealing with toggle dropDown menu - globaly!
  //&& updating heart state
  componentDidUpdate(preProps, prevState ) {
    if (!this.props.isDropDowmMenuOpen && this.state.showDropDownMenu) {
      this.closingDropFownMenu()
    }
    let toggle = false;
    this.props.playLists.forEach((onePlayList) => {
      onePlayList.songs.forEach((oneSong) => {
        if (oneSong.id === this.props.song.id) {
          toggle = true;
        }
      })
    });

    //if song exists in playlist, but heart is black - toggle heart
    if (toggle && this.heartIcon.classList.toString().includes('fa-heart-o')) {
      this.MarkingSongAsInPlayList();
    }

    //if it wasn't found but heart if full - toggle heart
    if (!toggle && !this.heartIcon.classList.toString().includes('fa-heart-o')) {
      this.heartIcon.classList.toggle('fa-heart-o');
      this.heartIcon.classList.toggle('fa-heart');
    }

    //togglign player icon from player
    if(this.iconPlayer) {
      if(preProps.togglePlayerIconFromAudio!== this.props.togglePlayerIconFromAudio){
        this.toggleIconAction();
      }
    }

  }

  toggleIconAction(){
    this.iconPlayer.classList.toggle('fa-play');
    this.iconPlayer.classList.toggle('fa-pause');
  }

  closingDropFownMenu() {
    this.heartIcon.classList.toggle('chosen');
    this.setState({showDropDownMenu: !this.state.showDropDownMenu}) //closing
  }


  curentSongLogic() {

    this.props.curentSong(this.props.song);

    if (this.props.curentSongPlaying) {
      if (this.props.curentSongPlaying.id === this.props.song.id) {
        this.props.playPusetoggle();
        this.toggleIconAction();
      }
    }

  }


  render() {

    const imgUrl = this.props.song.artwork_url ? this.props.song.artwork_url.replace('large', 't300x300') : this.props.song.user.avatar_url; // priviously written: .artwork_url;
    const showDarkenBakcground = this.props.curentSongPlaying ? (this.props.curentSongPlaying.id === this.props.song.id) : false;

    return (
      <div className="song-thumbnail"
           data-id={this.props.song.uri + this.clientId}>

        <div className="song-img"
             style={{'backgroundImage': `url( ${imgUrl} )`}}
             onClick={() => {
               this.curentSongLogic();
             }}>

          {showDarkenBakcground && <div className="darken-songthumbnail">
            <i className="fa fa-play player-icon"
               ref={(playerIcon) => this.iconPlayer = playerIcon}/>

          </div>}
        </div>

        <p className="song-title">{this.props.song.title.slice(0, 33)}...</p>

        <i className="fa fa-clock-o time-logo">
          <p className="song-time">{this.songTime()}</p>
        </i>
        <i className="fa fa-heart-o add-to-playlist-icon"
           ref={(heartIcon) => {
             this.heartIcon = heartIcon;
           }} onClick={() => {
          this.changeHeartState();
        }}/>
        <div className="for-global-flag">

          { (this.props.isDropDowmMenuOpen && this.state.showDropDownMenu) &&
          <AddToPlaylist
            //redirect={this.props.redirect}
            song={this.props.song}
            //                  findSong={this.props.findSong}
            parent={this.props.parent}
            closingDropFownMenu={this.closingDropFownMenu}
            MarkingSongAsInPlayList={this.MarkingSongAsInPlayList}
            {...this.props}/>}

        </div>

      </div>
    )
  }

}

function mapDispatchToProps(dispatch) {

  return {
    curentSong(song){
      dispatch({
        type: 'CURENT_SONG',
        song: song,
      });
    },
    trueFlageForDropDownMenu(){
      dispatch({
        type: 'AUTO_CLOSE',
        state: true,
      })
    },
    falseFlageForDropDownMenu(){
      dispatch({
        type: 'AUTO_CLOSE',
        state: false,
      })
    },
    checkIfSongExists(playLists, songId){
      dispatch({
        type: 'CHECK_FOR_SONG_IN_ALL_PLAYLINS',
        playLists: playLists,
        songId: songId,
      })
    },
    playPusetoggle(){
      dispatch({
        type: 'PLAYER_TOGGLE',
      })
    },
    togglePlayerIcon(){
      dispatch({
        type: 'PLAYER_TOGGLE_FROM_AUDIO',
      })
    },

  }
}


function mapStateToProps(stateData) {
  return {
    isDropDowmMenuOpen: stateData.oneDropDownMenuOpen,
    playLists: stateData.playLists,
    doesSongExist: stateData.doesSongExist,
    curentSongPlaying: stateData.curentSong,
    canPlaySong: stateData.playPusetoggle,
    togglePlayerIconFromAudio: stateData.playerControlImage
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Songthumbnail);


