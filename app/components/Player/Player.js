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
      if (!this.props.canPlaySong && !this.props.togglePlayerIconFromAudio && !this.player.paused){
        return false
      }
      else{
      return true;
      }
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
                 onPause={() => {

                   if (this.props.canPlaySong) {
                     {/*this.props.togglePlayerIcon();*/}
                     {/*this.props.playPusetoggle();*/}

                   }
                 }}
                 onPlay={() => {


                   if(!this.props.canPlaySong) {
                      console.info('can not rech me');
                     {/*this.props.playPusetoggle();*/}
                     {/*this.props.togglePlayerIcon();*/}
                   }
                   if (!this.props.canPlaySong && !this.props.togglePlayerIconFromAudio ) {

                     {/*this.props.togglePlayerIcon();*/}
                     {/*this.props.playPusetoggle();*/}

                   }
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
    togglePlayerIconFromAudio: stateData.playerControlImage,
  }
}


function mapDispatchToProps(dispatch) {

  return {
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

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Player);

