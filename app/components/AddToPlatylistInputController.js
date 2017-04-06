/**
 * Created by Doron Warzager on 06/04/2017.
 */
import React from "react";


export default class AddToPlatylistInputController extends React.Component{
  constructor(){
    super();
    this.state={
      isChosen:false,
    }
  }

  changeInputState(){
    this.setState({isChosen: !this.state.isChosen},()=>{
      this.props.addNRemoveSongToPlaylist(this.props.song, this.state.isChosen)
    })
  }


  render(){
    const oneList = this.props.oneList;
    return (
            <div className="one-list-checkbox"> {/* had here a key - key={oneList.id}*/}
              <label htmlFor={oneList.id}>
                <input type="checkbox"
                       id={oneList.id} value={oneList.title} checked={this.state.isChosen}
                       onChange={()=>{
                         this.changeInputState();

                       }}
                />

                {oneList.title}</label>
            </div>
          )
        }

}
