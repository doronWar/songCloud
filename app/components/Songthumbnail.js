/**
 * Created by Doron Warzager on 29/03/2017.
 */
import 'font-awesome/css/font-awesome.css';
import 'normalize.css/normalize.css';1

export default function Songthumbnail(props) {

  let ms=props.time;
  const min= Math.floor(ms/60000);
  const sec= ((ms % 60000) / 1000).toFixed(0);


  return(
    <div className="song-thumbnail">
      <div className="song-img" style ={{ 'backgroundImage': `url( ${props.img.replace('large','t300x300')} )` }}/>
      <p className="song-title">{props.title.slice(0, 33)}...</p>


      <i className="fa fa-clock-o time-logo">
        <p className="song-time">{min + ':' + sec}</p>
      </i>
      <i className="fa fa-heart-o add-to-playlist-icon" aria-hidden="true"></i>


    </div>
  )
}
//duration + gy(ganre)
