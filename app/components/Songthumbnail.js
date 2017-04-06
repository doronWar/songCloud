/**
 * Created by Doron Warzager on 29/03/2017.
 */
import  AddToPlaylist from "./AddToPlaylist";
import 'font-awesome/css/font-awesome.css';
import 'normalize.css/normalize.css';
import  React from "react";


export default class Songthumbnail extends React.Component {
  constructor() {
    super();
    this.state = {
      clientId: "?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z",
      showDropDownMenu:false,
    }
  }


  songTime() {
    let ms = this.props.song.duration;
    const min = Math.floor(ms / 60000);
    const sec = ((ms % 60000) / 1000).toFixed(0);
    return min + ':' + sec
  }



  changeHeartState() {
  if(!this.props.dropDownMenuState) {                 //checking if any other menu is open
    this.props.setDropDownMenuId(this.props.song.id); //changing menu state in expre & saving this songs ID
    this.heartIcon.classList.toggle('fa-heart-o');
    this.heartIcon.classList.toggle('fa-heart');
    this.setState({showDropDownMenu: !this.state.showDropDownMenu})   //opening dropDownMenu
    // this.addSongToPlaylist.classList.toggle('menu-toggle-view');
  }
  else if(this.props.dropDownMenuId===this.props.song.id){    // when reentering and having a menu open
                                                          // checking if this menu's Id is the saved one.
    this.props.setDropDownMenuId(this.props.song.id);     //changing through here the drop menu state back to false.
    this.heartIcon.classList.toggle('fa-heart-o');
    this.heartIcon.classList.toggle('fa-heart');
    this.setState({showDropDownMenu: !this.state.showDropDownMenu})
  }
  }


  render() {
    const imgUrl = this.props.song.artwork_url ? this.props.song.artwork_url.replace('large', 't300x300') : this.props.song.artwork_url;

    return (
      <div className="song-thumbnail"
           data-id={this.props.song.uri + this.clientId}
           >
        <div className="song-img"
             style={{'backgroundImage': `url( ${imgUrl} )`}}
             onClick={() => this.props.nowPlaying(this.props.song)}/>
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
        <div >

          { this.state.showDropDownMenu &&
          <AddToPlaylist addPlaylist={this.props.addPlaylist}
                         song={this.props.song}
                         listOfPlayLists={this.props.listOfPlayLists}
                         addNRemoveSongToPlaylist={this.props.addNRemoveSongToPlaylist}
                         findSong={this.props.findSong}
                         dropDownMenuClose={this.props.closeDropDownMenu}
                         dropDownMenuState={this.props.oneDropMenuOpen}/>}

        </div>

      </div>
    )
  }

}
//duration + gy(ganre)
