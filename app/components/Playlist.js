/**
 * Created by Doron Warzager on 28/03/2017.
 */
import React from 'react';
import Songthumbnail from './Songthumbnail';

export default class Playlist extends React.Component {

  constructor() {
    super();
    this.state = {
      // playlists: true
    }
  }

  creatUIPlyalist(playlistsExists) {

    if(!playlistsExists){
      return (
        <h1 className="empty-playlist-msg">
          Why don't you create some nice playlist
        </h1>
      )
    }
    if(playlistsExists){
      return (
        this.props.playLists.map((element)=>{
          return(
            
            <li key={element.id} className="play-list-title">
              <p>{element.title}
              <span>1</span>
              </p>
              {/*<ul>*/}
                {/*{element.songs.map((song) =>{*/}
                  {/*return( */}
                    {/*<li key={song.id} className="one-song">*/}
                    {/*<Songthumbnail*/}
                      {/*nowPlaying={this.props.playingNow}*/}
                      {/*song={song}/>*/}
                  {/*</li>)*/}
                {/*})}*/}
                {/*/!*<li key={element.songs.id}>{element.songs}</li>*!/*/}
              {/*</ul>*/}
            </li>
          )})
      );
    }


  }


listOfPlaylist(){

  return (
    this.props.playLists.map((playList)=>{
      return <input type="button" value={playList.title} className="playlist-links"/>
    })
  )
}


addNewPlayListBybutton(){
  this.props.addPlaylist(undefined,'new list')
}
  render() {

    const playlistsExists = this.props.playLists.length !==0
    


    // const playlists = this.props.playLists &&
    //   <h1 className="empty-playlist-msg">
    //     Why don't you create some nice playlist
    //   </h1>

    // console.info(this.props.playLists[0])


    return (
      <div className="plalist-page">
        {/*{console.info(this.props.addPlaylist)}*/}
        <aside className="playlist-holder">
          <button className="btn-add-playlist" onClick={()=>{ this.addNewPlayListBybutton()}}>Add new Playlist</button>
          <span className="seperating-lien"/>
          {this.listOfPlaylist()}
        </aside>
        <section className="play-list-background">
          <ul className="temp-ul">
          {this.creatUIPlyalist(playlistsExists)}
          </ul>



        </section>
      </div>

    )
  }
}
