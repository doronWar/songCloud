/**
 * Created by Doron Warzager on 28/03/2017.
 */
import React from 'react';
import {NavLink} from 'react-router-dom';
import Songthumbnail from './Songthumbnail';
// import Player from './Player'


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
  xhr.open('GET',`https://create-bootcamp-songcloud-server.now.sh/tracks?genre=${this.props.match.params.genre}`)
  xhr.send();

  xhr.addEventListener('load', ()=>{

    this.setState({songs: JSON.parse(xhr.responseText)})
    console.info(this.state.songs);
  })
  xhr.addEventListener('error', ()=>{
    this.setState({loadingState: 'error'})
  })
}


  componentDidUpdate(prevProps) {
    if (prevProps.match.params.genre === this.props.match.params.genre)
      return;
    this.loadSongs();
  }


  createThumbnail (){
    return (
      <ul className="song-holder">
         {this.state.songs.map((song) => <li key={song.id} className="one-song">
           <Songthumbnail title={song.title}
                          img={song.artwork_url}
                          time={song.duration}/>
         </li>)}
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
        <div className="explore-component">

          {/*<h1 style={{border: '1px solid black', textAlign: "center"}}>Explore component</h1>*/}
          <ul className="genre-nav-bar">

            <li className="genre-name">
              <NavLink to="/explore/trance" activeClassName="ganere-chosen" className="link">Trance</NavLink>
            </li>

            <li className="genre-name">
              <NavLink to="/explore/house" activeClassName="ganere-chosen" className="link">House</NavLink>
            </li>

            <li className="genre-name">
              <NavLink to="/explore/dubstep" activeClassName="ganere-chosen" className="link">Dubstep</NavLink>
            </li>


          </ul>

          <h2 className="genre-titl">Genre: {this.props.match.params.genre}</h2>
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
