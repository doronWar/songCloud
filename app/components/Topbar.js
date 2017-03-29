/**
 * Created by Doron Warzager on 28/03/2017.
 */
export default function Topbar () {
  return (
    <div>
      <header className="header">
      <nav className="nav-bar">

        <div className="nav-parts">
          <a className="logo-content">< i className="logo fa fa-mixcloud position-logo" aria-hidden="true"/>  SougCloud</a>

        <ul className="nav-link-holder">
          <li className="nav-link"> <a>Explor</a> </li>
          <li className="nav-link"> <a>Playlist</a> </li>
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
