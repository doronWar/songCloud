/**
 * Created by Doron Warzager on 04/04/2017.
 */

import Explore from './Explore'
import Signin from './Signin'
import Signup from './Signup'
import Root from './Root'

import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';


export default class Routes extends React.Component {

  constructor() {
    super();
    // this.goToSignIn = this.goToSignIn.bind(this);
    this.goToSignOut = this.goToSignOut.bind(this);
  }

  goToSignIn() {

    this.props.history.push("/signin");
  }

  goToSignOut() {
    this.props.history.push("/signout");
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>

          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/signin" component={(props) => {
            return <Signin goToSignOut={this.goToSignOut}
                           {...props}/>
          }}/>
          <Route path="/" component={(props) => {
            return <Root goToSignIn={this.goToSignIn}
                         {...props}/>
          }}/>

        </Switch>
      </BrowserRouter>
    )
  }
}
