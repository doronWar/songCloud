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

  changeInputState(listId){
    this.setState({isChosen: !this.state.isChosen},()=>{
      this.props.addNRemoveSongToPlaylist(this.props.song, this.state.isChosen, listId)
    })
  }

  componentDidMount(){
    this.props.findSong(this.props.oneList, this.props.song);
    const doesExists = this.props.findSong(this.props.oneList, this.props.song);
    if(!doesExists){
      this.setState({isChosen: !this.state.isChosen})
    }

  }


  render(){
    const oneList = this.props.oneList;
    return (
            <div className="one-list-checkbox"> {/* had here a key - key={oneList.id}*/}
              <label htmlFor={oneList.id}>
                <input type="checkbox"
                       id={oneList.id} value={oneList.title} checked={this.state.isChosen}
                       onChange={()=>{
                         this.changeInputState(oneList.id);

                       }}
                />

                {oneList.title}</label>
            </div>
          )
        }

}
