/**
 * Created by Doron Warzager on 29/03/2017.
 */
import  AddToPlaylist from "./AddToPlaylist";
import 'font-awesome/css/font-awesome.css';
import 'normalize.css/normalize.css';
import  React from "react";



export default class Songthumbnail extends React.Component{
constructor(){
  super();
  this.state ={
    clientId: "?client_id=2t9loNQH90kzJcsFCODdigxfp325aq4z"
  }
}


songTime(){
  let ms=this.props.song.duration;
  const min= Math.floor(ms/60000);
  const sec= ((ms % 60000) / 1000).toFixed(0);
  return min + ':' + sec
}

  changeHeartState(){
  this.heartIcon.classList.toggle('fa-heart-o')
  this.heartIcon.classList.toggle('fa-heart')
    this.addToPlaylist.classList.toggle('menu-toggle-view')
  }

render(){
    const imgUrl = this.props.song.artwork_url ? this.props.song.artwork_url.replace('large','t300x300'): this.props.song.artwork_url;

  return(
    <div className="song-thumbnail" data-id={this.props.song.uri + this.clientId}>
      <div className="song-img"
           style ={{ 'backgroundImage': `url( ${imgUrl} )` }}
      onClick={()=>this.props.nowPlaying(this.props.song)}/>
      <p className="song-title">{this.props.song.title.slice(0, 33)}...</p>


      <i className="fa fa-clock-o time-logo">
        <p className="song-time">{this.songTime()}</p>
      </i>
      <i className="fa fa-heart-o add-to-playlist-icon"
         ref={(heartIcon)=>{
           this.heartIcon = heartIcon;
         }} onClick={()=>{
        this.changeHeartState();
      }}/>
      <div className="menu-toggle-view" ref={(addToPlaylist)=>{
        this.addToPlaylist = addToPlaylist}}>
      <AddToPlaylist/>
      </div>

    </div>
  )
}

}
//duration + gy(ganre)
