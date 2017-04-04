/**
 * Created by Doron Warzager on 04/04/2017.
 */

import React from 'react';


export default class AddToPlaylist extends React.Component {

creatNewPlyList(){
  this.props.addPlaylist(this.props.song);
}


dropdownMenuOfPlayLists(){

  // listOfPlayLists={this.props.playLists}
  return(
    <div>
      {this.props.listOfPlayLists.map((oneList)=>{
        return (
          <div key={oneList.id}>
            <label htmlFor={oneList.id}>temp</label>
            <input type="checkbox" id={oneList.id} value={oneList.title}/>
          </div>
        )
      })}
    </div>
  )

}

render(){

  return (
    <div className="add-to-playlist-menu">
      <p>Add to playlist</p>
      <input type="button" value="Create playlist +" onClick={()=>this.creatNewPlyList()}/>
        <div className="seporater-line"/>
      {this.dropdownMenuOfPlayLists()}
      {/*<label htmlFor="playlist-name">temp</label>*/}
      {/*<input type="radio" id="playlist-name" value="list name"/>*/}

    </div>
  )
}

}
