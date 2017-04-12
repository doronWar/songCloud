import './Player.scss'
import  store from "../../store";


export default function Player(props) {

  const theSong= store.getState().curentSong || "none"
  const songImg = theSong.artwork_url;
  const songTitle = theSong.title || "song name";
  const clientId = "?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z";
  const songApi = theSong.stream_url + clientId || "";

    // console.info(store.getState().curentSong);
    //store.getState().curentSong()
  return (
    <div>
      {store.getState().curentSong !== null && <footer className="player-holder">
        <img src={songImg} alt="Song Thumbnail" className="player-thumbnail"/>
        <p className="player-song-name">{songTitle.slice(0, 20)}</p>
        <audio controls autoPlay className="player-controls" src={songApi}>
          <source src="" type="audio/ogg"/>
          <source src="" type="audio/mpeg"/>
        </audio>
      </footer>}

    </div>
  )
}
//"http://learn.shayhowe.com.s3-website-us-east-1.amazonaws.com/assets/misc/courses/html-css/adding-media/jazz.ogg"
