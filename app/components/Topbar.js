/**
 * Created by Doron Warzager on 28/03/2017.
 */
import {NavLink} from 'react-router-dom';


export default function Topbar () {
  return (
    <div>
      <header className="header">
      <nav className="nav-bar">

        <div className="nav-parts">
          <NavLink to="/" className="logo-content">< i className="logo fa fa-mixcloud position-logo" aria-hidden="true"/>  SougCloud</NavLink>

        <ul className="nav-link-holder">
          <li className="nav-link"> <NavLink to="/" activeClassName="selected">Explor</NavLink> </li>
          <li className="nav-link"> <NavLink to="/Playlist" activeClassName="selected">Playlist</NavLink> </li>
        </ul>
        </div>

        <div className="nav-parts ">

          <input type="text" id="search-songs" placeholder="Song name"/>
        <input type="button" id="log-out-button" value="Log out" className="search-song"/>
        </div>

      </nav>
      </header>
    </div>
  )
}
