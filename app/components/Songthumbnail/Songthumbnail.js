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
    }
    this.MarkingSongAsInPlayList=this.MarkingSongAsInPlayList.bind(this);
    this.closingDropFownMenu = this.closingDropFownMenu.bind(this)
  }


  songTime() {
    let ms = this.props.song.duration;
    const min = Math.floor(ms / 60000);
    const sec = ((ms % 60000) / 1000).toFixed(0);
    return min + ':' + sec
  }


  changeHeartState() {
console.info('global flage',this.props.isDropDowmMenuOpen);
console.info('local flage',this.state.showDropDownMenu);
    if (!this.props.isDropDowmMenuOpen) {

      this.props.trueFlageForDropDownMenu();
      this.setState({showDropDownMenu: !this.state.showDropDownMenu});   //opening dropDownMenu

     //this.heartIcon.classList.toggle('fa-heart-o');
      this.heartIcon.classList.toggle('chosen');
     // this.heartIcon.classList.toggle('fa-heart');

    }
    else {
      this.props.falseFlageForDropDownMenu();


    }
  }


  MarkingSongAsInPlayList(){
    this.props.playLists.forEach((onePlayList)=>{
      onePlayList.songs.forEach((oneSong)=>{
        if(oneSong.id=== this.props.song.id){
          this.heartIcon.classList.toggle('fa-heart-o');
          // this.heartIcon.classList.toggle('chosen');
          this.heartIcon.classList.toggle('fa-heart');

        }
      })
    });
  }


  componentDidMount() {
    this.MarkingSongAsInPlayList();


    //this.props.checkIfSongExists(this.props.playLists, this.props.song.id);
    //console.info('checking here',this.props.playLists);
  }

  //dealing with toggle dropDown menu - globaly!
  componentDidUpdate() {
    if (!this.props.isDropDowmMenuOpen && this.state.showDropDownMenu) {
      this.closingDropFownMenu()
    }

  }

  closingDropFownMenu() {

   // this.heartIcon.classList.toggle('fa-heart-o');  //for emptying the heart
    this.heartIcon.classList.toggle('chosen');
   //this.heartIcon.classList.toggle('fa-heart');

    // store.dispatch({
    //   type: 'SET_DROPDOWN_MENU',
    //   menuId: this.props.song.id,
    // });

    this.setState({showDropDownMenu: !this.state.showDropDownMenu}) //closing


  }




  render() {
    const imgUrl = this.props.song.artwork_url ? this.props.song.artwork_url.replace('large', 't300x300') : this.props.song.artwork_url;

    return (
      <div className="song-thumbnail"
           data-id={this.props.song.uri + this.clientId}
      >
        <div className="song-img"
             style={{'backgroundImage': `url( ${imgUrl} )`}}
             onClick={() => {
               this.props.curentSong(this.props.song);
             }}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Songthumbnail);
//duration + gy(ganre)


//in the explore

//dealing with toggle dropDown menu
//
// changeHeartState() {
//
//   if (!store.getState().oneDropDownMenuOpen) {                 //checking if any other menu is open
//
//     store.dispatch({
//       type: 'SET_DROPDOWN_MENU',
//       menuId: this.props.song.id,
//     });
//     store.dispatch({        //this closes all menus
//       type: 'CHECK_FOR_OPEN_MENU',
//       menuId: this.props.song.id,
//     });
//
//
//     //this.props.setDropDownMenuId(this.props.song.id); //changing menu state in expre & saving this songs ID
//
//     this.props.toggleDropDownMenu();
//     this.heartIcon.classList.toggle('fa-heart-o');
//     this.heartIcon.classList.toggle('fa-heart');
//     this.setState({showDropDownMenu: !this.state.showDropDownMenu})   //opening dropDownMenu
//     // this.addSongToPlaylist.classList.toggle('menu-toggle-view');
//   }
//   else if (store.getState().dropDownMenuId === this.props.song.id) {    // when reentering and having a menu open
//     // checking if this menu's Id is the saved one.
//     store.dispatch({
//       type: 'SET_DROPDOWN_MENU',
//       menuId: this.props.song.id,
//     });
//     store.dispatch({
//       type: 'CHECK_FOR_OPEN_MENU',
//       menuId: this.props.song.id,
//     });
//     //   this.props.setDropDownMenuId(this.props.song.id);     //changing through here the drop menu state back to false.
//     this.heartIcon.classList.toggle('fa-heart-o');
//     this.heartIcon.classList.toggle('fa-heart');
//     this.setState({showDropDownMenu: !this.state.showDropDownMenu})
//   }
// }
