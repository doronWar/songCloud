import './Player.scss'
import {connect} from 'react-redux';
import  React from "react";

class Player extends React.Component {

  constructor() {
    super();
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.curentSong && this.props.curentSong) {
      if (nextProps.curentSong.id !== this.props.curentSong.id) {
        if (!this.props.canPlaySong) {
          this.props.playPusetoggle();
        }
      }
    }

  }

  shouldComponentUpdate(nextProps) {

    if (!nextProps.curentSong) {
      return false;
    }
    else {
      return true;
    }
  }

  componentDidUpdate() {

    if (this.props.canPlaySong) {
      this.player.play();
    }
    else {
      this.player.pause();
    }
  }


  render() {
    const theSong = this.props.curentSong || "none"
    const songImg = theSong.artwork_url;
    const songTitle = theSong.title || "song name";
    const clientId = "?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z";
    const songApi = theSong.stream_url + clientId || "";


    return (
      <div>
        {this.props.curentSong !== null && <footer className="player-holder">
          <img src={songImg} alt="Song Thumbnail" className="player-thumbnail"/>
          <p className="player-song-name">{songTitle.slice(0, 20)}</p>
          <audio controls
                 ref={(player) => {
                   this.player = player
                 }}
                 className="player-controls" src={songApi}>
            <source src="" type="audio/ogg"/>
            <source src="" type="audio/mpeg"/>
          </audio>
        </footer>}

      </div>
    )
  }


}

function mapStateToProps(stateData) {
  return {
    curentSong: stateData.curentSong,
    canPlaySong: stateData.playPusetoggle,
  }
}


function mapDispatchToProps(dispatch) {

  return {
    playPusetoggle(){
      dispatch({
        type: 'PLAYER_TOGGLE',
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Player);

