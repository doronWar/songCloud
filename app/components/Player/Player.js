import './Player.scss'
export default function Player(song) {
  const songImg = song.playingNow.artwork_url;
  const songTitle = song.playingNow.title || "song name";
  const clientId = "?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z";
  const songApi = song.playingNow.stream_url + clientId || "";


  return (
    <div>
      <footer className="player-holder">
        <img src={songImg} alt="Song Thumbnail" className="player-thumbnail"/>
        <p className="player-song-name">{songTitle.slice(0, 20)}</p>
        <audio controls autoPlay className="player-controls" src={songApi}>
          <source src="" type="audio/ogg"/>
          <source src="" type="audio/mpeg"/>
        </audio>
      </footer>

    </div>
  )
}
//"http://learn.shayhowe.com.s3-website-us-east-1.amazonaws.com/assets/misc/courses/html-css/adding-media/jazz.ogg"
