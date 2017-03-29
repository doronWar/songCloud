/**
 * Created by Doron Warzager on 28/03/2017.
 */
export default function Topbar () {
  return (
    <div>
      <header className="header">
      <nav className="nav-bar">

        <div className="nav-parts">
        <a className="logo fa fa-mixcloud position-logo" aria-hidden="true"></a>

        <ul className="nav-link-holder">
          <li className="nav-link"> <a>Explor</a> </li>
          <li className="nav-link"> <a>Play List</a> </li>
        </ul>
        </div>

        <div className="nav-parts ">
        <input type="text" id="search-songs" placeholder="Song name" className="search-song" />
        <input type="button" id="log-out-button" value="Log out" className="search-song"/>
        </div>

      </nav>
      </header>
    </div>
  )
}
