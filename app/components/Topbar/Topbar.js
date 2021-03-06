import './Topbar.scss'
import {NavLink} from 'react-router-dom';
import React from 'react';
import Routes from '../Routes/Routes';
import store from './../../store'
import {connect} from 'react-redux'


class Topbar extends React.Component {


  render() {

    return (
      <div>
        <header className="header">
          <nav className="nav-bar">

            <div className="nav-parts">
              <NavLink to="/" className="logo-content">
                < i className="logo fa fa-mixcloud position-logo" aria-hidden="true"/> SongCloud
              </NavLink>

              <ul className="nav-link-holder">

                <li className="nav-link">
                  <NavLink to="/Explore" activeClassName="selected" className="link">Explore</NavLink>
                </li>

                <li className="nav-link">
                  <NavLink to="/playlist" activeClassName="selected" className="link">Playlists</NavLink>
                </li>

              </ul>
            </div>

            <div className="search-n-logout">

              <div className="search-icon-holder">

                <i className="fa fa-search search-icon"
                   onClick={() => this.props.FindSearchTerm()}
                />
                <input type="text" id="search-songs" placeholder="SEARCH"
                       value={this.props.inputValue}
                       onChange={(e) => {
                         this.props.changeInputValu(e.target.value)
                       }}
                       onKeyDown={(e) => {
                         if (e.keyCode === 13) {
                           this.props.FindSearchTerm();
                         }
                       }}
                />

              </div>
              <button id="log-out-button" value="Log out" className="search-song"
                      onClick={() => {
                        this.props.accessDenied()
                        this.props.goToSignIn()
                      }}>Log out
              </button>
            </div>

          </nav>
        </header>
      </div>
    )
  }
}

function mapStateToProps(stateData) {
  return {
    inputValue: stateData.searchForMusic,
  }
}


function mapDispatchToProps(dispatch) {
  return {
    changeInputValu(value){
      dispatch({
        type: 'TERM_FOR_SEARCH',
        value: value,
      })
    },
    accessDenied(){
      dispatch({
        type: 'ACCESS_DENIED',
      })
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(Topbar);


