/**
 * Created by Doron Warzager on 26/03/2017.
 */
import React from 'react';

export default class Greeting extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      isVisiable: true,
      people: [
        {
          name: 'John Doe',
          kills: 0
        },
        {
          name: 'Peter Pan',
          kills: 0
        }
      ]
    }
  }


  // syncronizingKills() {
  //   const newState = [...this.state];
  //   newState.people = this.state.people.map((value) => {
  //     value.kills = this.state.counter;
  //   })
  //   this.setState(newState);
  //
  // }
  letsCount() {

    // let newState =  [...this.state.people]
    const counter = this.state.counter + 1;

    const newPeople = this.state.people.map((value) => {
      return Object.assign({}, value, {kills: counter})
      // const tempPerson = Object.assign( {},value)
      // tempPerson.kills = counter;
      // return tempPerson;
    });

    this.setState({counter, people: newPeople})

  }

  toggleCounter() {
    this.setState({isVisiable: (!this.state.isVisiable)})
  }

  creaeList() {
    const list = this.state.people.map((value, index) => {
      return <li key={value.name + String(index)}>{value.name + ' kills: ' + value.kills}</li>
    })
    return (
      <ul>
        {list}
      </ul>
    )
  }


  render() {
    const element = this.state.isVisiable ? <h1>{this.state.counter}</h1> : null;
    // {this.syncronizingKills()};

    return (
      <div>
        <p>Hello my name is {this.props.name} and my age is {this.props.age}`</p>
        <input type="button" value="Click me to go to hell" onClick={() => {
          console.info('hell');
        }}/>
        <input type="button" value="Click me for God" onClick={this.props.fn}/>
        <input type="button" value="The Counter" onClick={this.letsCount.bind(this)}/>
        <input type="button" value="Hide\Show counter" onClick={this.toggleCounter.bind(this)}/>
        {element}

        {this.creaeList()}

      </div>
    )
  }
}

