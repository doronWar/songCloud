/**
 * Created by Doron Warzager on 28/03/2017.
 */
export default function Player() {
  return (
    <div>
      <footer className="player-holder">
        <img src="" alt="Song Thumbnail" className="player-thumbnail"/>
        <p className="player-song-name">Song name</p>
        <audio controls className="player-controls" src="http://learn.shayhowe.com.s3-website-us-east-1.amazonaws.com/assets/misc/courses/html-css/adding-media/jazz.ogg">
          <source src="" type="audio/ogg"/>
          <source src="" type="audio/mpeg"/>
        </audio>
      </footer>

    </div>
  )
}
