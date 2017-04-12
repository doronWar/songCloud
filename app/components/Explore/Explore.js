/**
 * Created by Doron Warzager on 28/03/2017.
 */
import './Explore.scss'
import React from 'react';
import {NavLink} from 'react-router-dom';
import Songthumbnail from '../Songthumbnail/Songthumbnail';
// import Player from './Player'


export default class Explore extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      loadingState: "loading",
      clientId: "2t9loNQH90kzJcsFCODdigxfp325aq4z",
      offset: 0,
      limit: 15,
      // oneDropMenuOpen: false,
      // dropDownMenuId: '',

    }
    // this.closeDropDownMenu = this.closeDropDownMenu.bind(this);
    // this.setDropDownMenuId = this.setDropDownMenuId.bind(this);

  }

  //                                  opening only one menu at a time
  // closeDropDownMenu(songId) {
  //   if (songId === this.state.dropDownMenuId) {
  //     this.setState({oneDropMenuOpen: !this.state.oneDropMenuOpen})
  //   }
  // }
  //
  // setDropDownMenuId(menuId) {
  //   this.setState({dropDownMenuId: menuId}, () => {
  //     this.closeDropDownMenu(menuId)
  //   });
  // }


  //                                  opening songs

  componentDidMount() {
    this.loadSongs();
  }

  loadSongs() {

    this.setState({loadingState: 'loading'})
    const genre = this.props.match.params.genre;
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.soundcloud.com/tracks?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z&limit=${this.state.limit}&offset=${this.state.offset}&tags=${genre}`);

    xhr.send();

    xhr.addEventListener('load', () => {

      this.setState({songs: JSON.parse(xhr.responseText), loadingState: 'loaded'})
      // console.info(this.state.songs);

      // console.info('rendered');
    })
    xhr.addEventListener('error', () => {
      this.setState({loadingState: 'error'})
    })
  }


  componentDidUpdate(prevProps, prevState) {

    const prevGenre = prevProps.match.params.genre;
    const targetGenre = this.props.match.params.genre;
    const currentSongs = this.state.offset;
    const preveSongs = prevState.offset;

    if (prevGenre !== targetGenre) {
      this.setState({offset: 0});
      this.loadSongs();
    }
    if (currentSongs !== preveSongs) {
      this.loadSongs();
    }

  }


  createThumbnail() {

    return (
      <ul className="song-holder"
          onClick={(e) => this.props.closeAllDropDownMenues(e)}>
        {this.state.songs.map((song) => <li key={song.id} className="one-song">

          <Songthumbnail

            song={song}
            addPlaylist={this.props.addPlaylist}
            listOfPlayLists={this.props.listOfPlayLists}
            addNRemoveSongToPlaylist={this.props.addNRemoveSongToPlaylist}
            findSong={this.props.findSong}

            dropDownMenuClose={this.props.closeDropDownMenu}
            setDropDownMenuId={this.props.setDropDownMenuId}
            dropDownMenuState={this.props.oneDropMenuOpen}
            dropDownMenuId={this.props.dropDownMenuId}
            showDropMenu={this.props.showDropMenu}
            toggleDropDownMenu={this.props.toggleDropDownMenu}
            parent="explore"/>
        </li>)}

      </ul>
    )
  }


//things that awhere sent and son't need to be sent anymore
  // nowPlaying={this.props.playingNow}

//   title={song.title}
// img={song.artwork_url}
// time={song.duration}
// uri={song.uri}

  changePage(direction) {
    if (direction === 'next') {
      this.setState({offset: this.state.offset + this.state.limit});
    }
    if (direction === 'priv') {
      this.setState({offset: this.state.offset - this.state.limit});
    }
  }


  render() {
    if (this.state.loadingState === 'loading') {
      return <i className="fa fa-spinner fa-pulse fa-3x fa-fw loading-logo"/>

    }


    if (this.state.loadingState === 'error') {
      return (<div className="error-loading-page">
        <h1>Loading failed please try again</h1>
        <a href="#" onClick={() => this.loadSongs()}>Click Here to Realod</a>

      </div>)
    }


    else if (this.state.loadingState === 'loaded') {
      const isFirstPage = this.state.offset === 0;
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

            <li className="genre-name">
              <NavLink to="/explore/hip hop" activeClassName="ganere-chosen" className="link">Hip Hop</NavLink>
            </li>

            <li className="genre-name">
              <NavLink to="/explore/rock" activeClassName="ganere-chosen" className="link">Rock</NavLink>
            </li>

            <li className="genre-name">
              <NavLink to="/explore/pop" activeClassName="ganere-chosen" className="link">Pop</NavLink>
            </li>

            <li className="genre-name">
              <NavLink to="/explore/reggae" activeClassName="ganere-chosen" className="link">Reggae</NavLink>
            </li>


          </ul>

          <h2 className="genre-titl">Genre: {this.props.match.params.genre}</h2>
          {this.createThumbnail()}
          <div className="song-page-wrapper">
            <div className="navigation-song-btn">

              <button className="nav-btn" onClick={ this.changePage.bind(this, 'next')}>
                Next Page
              </button>

              <span>  page {this.state.offset / this.state.limit + 1}   </span>

              <button className="nav-btn" onClick={ this.changePage.bind(this, 'priv')}
                      disabled={isFirstPage}>
                Prev
              </button>

            </div>
            <div >

            </div>
          </div>

        </div>
      )
    }
  }
}
