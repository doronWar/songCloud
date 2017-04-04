/**
 * Created by Doron Warzager on 28/03/2017.
 */
import React from 'react';

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
              <ul>
                {/*<li key={element.songs.id}>{element.songs}</li>*/}
              </ul>
            </li>
          )})
      );
    }


  }


  render() {

    const playlistsExists = !!this.props.playLists;



    // const playlists = this.props.playLists &&
    //   <h1 className="empty-playlist-msg">
    //     Why don't you create some nice playlist
    //   </h1>

    // console.info(this.props.playLists[0])


    return (
      <div className="plalist-page">
        {/*{console.info(this.props.addPlaylist)}*/}
        <aside className="playlist-holder">
          <button className="btn-add-playlist">Add new Playlist</button>
          <span className="seperating-lien"/>
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
