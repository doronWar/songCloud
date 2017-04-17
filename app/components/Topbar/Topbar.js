
import './Topbar.scss'
import {NavLink} from 'react-router-dom';
import React from 'react';
import Routes from '../Routes/Routes';
import store from './../../store'
import { connect } from 'react-redux'


class Topbar extends React.Component {


  render() {

    return (
      <div>
        <header className="header">
          <nav className="nav-bar">

            <div className="nav-parts">
              <NavLink to="/" className="logo-content">
                < i className="logo fa fa-mixcloud position-logo" aria-hidden="true"/> SougCloud
              </NavLink>

              <ul className="nav-link-holder">

                <li className="nav-link">
                  <NavLink to="/Explore" activeClassName="selected" className="link">Explore</NavLink>
                </li>

                <li className="nav-link">
                  <NavLink to="/playlist" activeClassName="selected" className="link">Playlist</NavLink>
                </li>

              </ul>
            </div>

            <div className="search-n-logout">

              <div className="search-icon-holder">

                <i className="fa fa-search search-icon"/>
                <input type="text" id="search-songs" placeholder="Song name"
                       value={this.props.inputValue}
                       onChange={(e) => {
                         this.props.changeInputValu(e.target.value)


                       }}
                       onKeyDown={(e)=>{
                         if(e.keyCode=== 13){
                           this.props.FindSearchTerm();
                         }
                       }}
                       onBlur={() => {
                         this.props.FindSearchTerm()}}/>

              </div>
              <input type="button" id="log-out-button" value="Log out" className="search-song"
                     onClick={() => {
                       this.props.goToSignIn()
                     }}/>
            </div>

          </nav>
        </header>
      </div>
    )
  }
}

function mapStateToProps (stateData){
  return{
    inputValue: stateData.searchForMusic,
  }
}


function mapDispatchToProps (dispatch) {
  return {
    changeInputValu(value){
      dispatch({
        type: 'TERM_FOR_SEARCH',
        value: value,
      })
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure:false})(Topbar);

//erased from on change of inpute:  {/*this.props.searchForMusic(e.target.value)*/}
