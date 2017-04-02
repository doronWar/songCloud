/**
 * Created by Doron Warzager on 28/03/2017.
 */
import React from 'react';

export default class Playlist extends React.Component {

  constructor(){
    super();
   this.state ={
     playlists: true
   }
  }

  render() {
    const playlists= this.state.playlists && <h1 className="empty-playlist-msg">Why don't you create some nice playlist</h1>
    return (
      <div>

        <aside className="playlist-holder">
          <button className="btn-add-playlist">Add new Playlist</button>
          <span className="seperating-lien"/>
        </aside>
        <section>
          {playlists}

        </section>
      </div>

    )
  }
}
