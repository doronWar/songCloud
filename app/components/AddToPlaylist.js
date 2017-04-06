/**
 * Created by Doron Warzager on 04/04/2017.
 */

import React from 'react';
import AddToPlatylistInputController from './AddToPlatylistInputController';


export default class AddToPlaylist extends React.Component {

  // constructor(){
  //   super();
  //   this.state={
  //     isChosen:false,
  //   }
// }

creatNewPlyList()
{
  this.props.addPlaylist(this.props.song, 'redirect');
}

// changeInputState(){
//   this.setState({isChosen: !this.state.isChosen})
// }
  dropdownMenuOfPlayLists(){

  return(
    this.props.listOfPlayLists.map((oneList)=>{
      return (
       <div key={oneList.id}>

        <AddToPlatylistInputController
        listOfPlayLists={this.props.listOfPlayLists}
        addNRemoveSongToPlaylist={this.props.addNRemoveSongToPlaylist}
        oneList={oneList}
        song={this.props.song}/>

       </div>

      )
    })
  )

  }


render(){

  return (
    <div className="add-to-playlist-menu">
      <p>Add to playlist</p>
      <input className="create-list-btn-explore" type="button" value="Create playlist +"
             onClick={() => this.creatNewPlyList()}/>
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
