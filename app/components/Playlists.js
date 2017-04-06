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

    this.state = {
      newList:'',
    }


  }

  //
  // componentDidUpdate(prevProps) {
  //   const haveNewPlayList = this.props.playLists.find((oneList) => oneList.id === this.props.newListId);
  //   if (haveNewPlayList) {
  //     this.setState({newListId: this.props.newListId})
  //   }
  //
  // }


  creatUIPlyalist(playlistsExists) {

    if (!playlistsExists) {
      return (
        <h1 className="empty-playlist-msg">
          Why don't you create some nice playlist
        </h1>
      )
    }
    if (playlistsExists) {

      const titleState = this.state.isNameHidden ? "hiden" : ""
      const inputeState = this.state.isInputeHidden ? "ply-input-title hiden" : "ply-input-title"
      return (
        this.props.playLists.map((element, i) => {
          return (
            <div key={element.id}>
              <OnePlaylist playlistsExists={playlistsExists}
                           playLists={this.props.playLists}
                           changeName={this.props.changeName}
                           nowPlaying={this.props.playingNow}
                           listOfPlayLists={this.props.listOfPlayLists}
                           element={element}
                           newList={this.props.newListId}
                           resetNewListId={this.props.resetNewListId}

              />
            </div>
          )
        })
      );
    }


  }


  listOfPlaylist() {

    return (
      this.props.playLists.map((playList) => {
        return <input key={uuid()} type="button" value={playList.title} className="playlist-links"/>
      })
    )
  }


  addNewPlayListBybutton() {
    this.props.addPlaylist()

  }

  render() {

    const playlistsExists = this.props.playLists.length !== 0

    return (
      <div className="plalist-page">

        <aside className="playlist-holder">
          <button className="btn-add-playlist" onClick={() => {
            this.addNewPlayListBybutton()
          }}>Add new Playlist
          </button>
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
