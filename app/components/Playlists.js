/**
 * Created by Doron Warzager on 28/03/2017.
 */
import React from 'react';
import uuid from 'uuid';
import Songthumbnail from './Songthumbnail';
import OnePlaylist from './OnePlaylist'

export default class Playlist extends React.Component {

  constructor() {
    super();
    // this.togglePlaylistTitle= this.togglePlaylistTitle.bind(this);
    // this.creatUIPlyalist = this.creatUIPlyalist.bind(this);
    this.state={
      // isNameHidden:false,
      // isInputeHidden:true,
    }



  }

  // togglePlaylistTitle(){
  //   this.setState({isNameHidden: !this.state.isNameHidden})
  //   this.setState({isInputeHidden: !this.state.isInputeHidden})


  //   // this.setState({isNameHidden: this.state.isInputeHidden})
  //   // this.setState({isInputeHidden: this.state.isNameHidden})
  //   // this.playListTitle.classList.toggle('hide-title')
  //   // this.inpuListTitle.classList.toggle('hide-title')


  // }

// <p ref={(element)=>{this.playListTitle = element}}
// onClick={()=>{this.togglePlaylistTitle()}}
// >{element.title}</p>
//
// <input className="hide-title ply-input-title" type="text" tabIndex="0"value={element.title}
// ref={(element)=>{this.inpuListTitle = element}}
// onChange={(e)=>{this.props.changeName(e.target.value, element.id)}}
// onBlur={()=>{this.togglePlaylistTitle()}}
// />


  creatUIPlyalist(playlistsExists) {

    if(!playlistsExists){
      return (
        <h1 className="empty-playlist-msg">
          Why don't you create some nice playlist
        </h1>
      )
    }
    if(playlistsExists){

      const titleState= this.state.isNameHidden? "hiden": ""
      const inputeState= this.state.isInputeHidden? "ply-input-title hiden" : "ply-input-title"
      return (
        this.props.playLists.map((element, i)=>{
          return (
            <div key={element.id} >
              <OnePlaylist playlistsExists={playlistsExists}
                        playLists={this.props.playLists}
                        changeName= {this.props.changeName}
                        nowPlaying={this.props.playingNow}
                        listOfPlayLists={this.props.listOfPlayLists}
                        element={element}
                        />
              </div>
          )})
      );
    }


  }


listOfPlaylist(){

  return (
    this.props.playLists.map((playList)=>{
      return <input key={uuid()} type="button" value={playList.title} className="playlist-links"/>
    })
  )
}


addNewPlayListBybutton(){
  this.props.addPlaylist()

}
  render() {

    const playlistsExists = this.props.playLists.length !==0

    return (
      <div className="plalist-page">

        <aside className="playlist-holder">
          <button className="btn-add-playlist" onClick={()=>{ this.addNewPlayListBybutton()}}>Add new Playlist</button>
          <span className="seperating-lien"/>
          {this.listOfPlaylist()}
        </aside>
        <section className="play-list-background">
          <ul className="temp-ul">
            {/*<OnePlaylist playlistsExists={playlistsExists}
                        playLists={this.props.playLists}
                        changeName= {this.props.changeName}
                        nowPlaying={this.props.playingNow}
                        listOfPlayLists={this.props.listOfPlayLists}/>*/}
          {this.creatUIPlyalist(playlistsExists)}
          </ul>
        </section>
      </div>

    )
  }
}
