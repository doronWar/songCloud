/**
 * Created by Doron Warzager on 28/03/2017.
 */
import React from 'react';

import Songthumbnail from './Songthumbnail';

export default class Explore extends React.Component {
constructor() {
  super();
  this.state = {
    songs: [],
    loadingState:"loaded"

  }
}

  componentDidMount(){
  this.loadSongs();

}

loadSongs(){
  this.setState({loadingState: 'loaded'})
  const xhr = new XMLHttpRequest();
  xhr.open('GET',"https://create-bootcamp-songcloud-server.now.sh/tracks?genre=trance")
  xhr.send();
  xhr.addEventListener('load', ()=>{

    this.setState({songs: JSON.parse(xhr.responseText)})
    console.info(this.state.songs);
  })
  xhr.addEventListener('error', ()=>{
    this.setState({loadingState: 'error'})

  })

}


  createThumbnail (){
    const numberOfSongs = this.state.songs;
    const listOfSong = [];

    for (let i in numberOfSongs) {

      listOfSong.push(<li key={numberOfSongs[i].id} className="one-song">
        <Songthumbnail title={numberOfSongs[i].title} img={numberOfSongs[i].artwork_url}/>
      </li>)
    }
    return (
      <ul className="song-holder">
         {listOfSong}
      </ul>
    )
  }
  render() {
    if (this.state.loadingState === 'error') {
      return (<div className="error-loading-page">
        <h1>Loading failed  please try again</h1>
        <a href="#" onClick={() => this.loadSongs()}>Click Here to Realod</a>

      </div>)
    }
    else if(this.state.loadingState === 'loaded') {
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
          {/*{this.componenetDidMount()}*/}
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
}
