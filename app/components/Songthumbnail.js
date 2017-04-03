/**
 * Created by Doron Warzager on 29/03/2017.
 */
import 'font-awesome/css/font-awesome.css';
import 'normalize.css/normalize.css';
import * as React from "react";
1

export default class Songthumbnail extends React.Component{
constructor(){
  super();
  this.state ={
    clientId: "?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z"
  }
}


songTime(){
  let ms=this.props.time;
  const min= Math.floor(ms/60000);
  const sec= ((ms % 60000) / 1000).toFixed(0);
  return min + ':' + sec
}

  changeHeartState(){
  console.info(this.heartIcon);
  this.heartIcon.classList.toggle('fa-heart-o')
  this.heartIcon.classList.toggle('fa-heart')
  }
render(){
    const imgUrl = this.props.img? this.props.img.replace('large','t300x300'): this.props.img;
  return(
    <div className="song-thumbnail" data-id={this.props.uri + this.clientId}>
      <div className="song-img"
           style ={{ 'backgroundImage': `url( ${imgUrl} )` }}
      onClick={()=>this.props.nowPlaying(this.props.song)}/>
      <p className="song-title">{this.props.title.slice(0, 33)}...</p>


      <i className="fa fa-clock-o time-logo">
        <p className="song-time">{this.songTime()}</p>
      </i>
      <i className="fa fa-heart-o add-to-playlist-icon"
         ref={(heartIcon)=>{
           this.heartIcon = heartIcon;
         }} onClick={()=>{
        this.changeHeartState();
      }}/>


    </div>
  )
}

}
//duration + gy(ganre)
