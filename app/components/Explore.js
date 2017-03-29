/**
 * Created by Doron Warzager on 28/03/2017.
 */
import React from 'react';
import Songthumbnail from './Songthumbnail';

export default class Explore extends React.Component {


  createThumbnail (){
    const numberOfSongs = 17;
    const listOfSong = [];

    for (let i=0; i< numberOfSongs; i++) {
      listOfSong.push(<li key={i} className="one-song"><Songthumbnail/></li>)
    }


    return (
      <ul className="song-holder">
        <Songthumbnail/>
        {listOfSong}
      </ul>
    )
  }
  render() {
    return (
      <div>
        <h1 style={{border: '1px solid black', textAlign: "center"}}>Explore component</h1>
        <ul className="genre-nav-bar">
          <li className="genre-name">genre</li>
          <li className="genre-name">genre</li>
          <li className="genre-name">genre</li>
          <li className="genre-name">genre</li>
          <li className="genre-name">genre</li>

        </ul>
        {this.createThumbnail()}
        <div className="song-page-wrapper">
          <div className="navigation-song-btn">
            <button>Next Page</button>
            <span>  page 1   </span>
            <button>Privious Page</button>
          </div>
         <div >

         </div>
        </div>
      </div>
    )
  }
}
