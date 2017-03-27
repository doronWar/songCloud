/**
 * Created by Doron Warzager on 26/03/2017.
 */
import React from 'react';

export default class Greeting extends React.Component {
  constructor(){
    super();
   this.state={
     counter: 0,
     isVisiable: true,
    }
  }

  letsCount(){

    this.setState({counter: this.state.counter + 1})
    

    // this.state.counter = 10;

  }

  toggleCounter(){
    this.setState({isVisiable: (!this.state.isVisiable)})
}
  render() {
    const element = this.state.isVisiable ? <h1>{this.state.counter}</h1> : null
    return (
      <div>
        <p>Hello my name is {this.props.name} and my age is {this.props.age}`</p>
        <input type="button" value="Click me to go to hell" onClick={() => {
          console.info('hell');
        }}/>
        <input type="button" value="Click me for God" onClick={this.props.fn}/>
        <input type="button" value="The Counter" onClick={this.letsCount.bind(this)}/>
        <input type="button" value="Hide\Show counter" onClick={this.toggleCounter.bind(this)}/>
        {/*<input type="button" value="The Counter" onClick={this.setState({isVisiable: (!this.state.isVisiable))}/>*/}
        {element}
      </div>
    )
  }
}
