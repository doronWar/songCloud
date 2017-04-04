/**
 * Created by Doron Warzager on 04/04/2017.
 */

export default function AddToPlaylist() {
  return (
    <div className="add-to-playlist-menu">
      <p>Add to playlist</p>
      <input type="button" value="Create playlist +"/>
        <div className="seporater-line"/>
      <label htmlFor="playlist-name">temp</label>
      <input type="radio" id="playlist-name" value="list name"/>

    </div>
  )
}
