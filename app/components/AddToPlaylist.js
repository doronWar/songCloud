/**
 * Created by Doron Warzager on 04/04/2017.
 */

import React from 'react';


export default class AddToPlaylist extends React.Component {

creatNewPlyList(){
  this.props.addPlaylist(this.props.song, 'redirect');
}


dropdownMenuOfPlayLists(){

  // listOfPlayLists={this.props.playLists}
  return(
    <div>

      {this.props.listOfPlayLists.map((oneList)=>{
        return (
          <div className="one-list-checkbox" key={oneList.id}>
            <input type="checkbox" id={oneList.id} value={oneList.title}/>
            <label htmlFor={oneList.id}>{oneList.title}</label>
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
      <input className="create-list-btn-explore"  type="button" value="Create playlist +" onClick={()=>this.creatNewPlyList()}/>
        <div className="seporater-line"/>
      <div className="playlist-checkbox-holder">
      {this.dropdownMenuOfPlayLists()}
      </div>
      {/*<label htmlFor="playlist-name">temp</label>*/}
      {/*<input type="radio" id="playlist-name" value="list name"/>*/}

    </div>
  )
}

}
