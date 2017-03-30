/**
 * Created by Doron Warzager on 29/03/2017.
 */

export default function Songthumbnail(props) {


  return(
    <div className="song-thumbnail">
      <img className="song-img" src={props.img}/>
    <p className="song-title">{props.title}</p>
    </div>
  )
}
//duration + gy(ganre)
