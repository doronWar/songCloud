/**
 * Created by Doron Warzager on 04/04/2017.
 */

import Explore from '../Explore/Explore'
import Signin from '../Signin/Signin'
import Signup from '../Signup/Signup'
import Root from '../Root/Root'

import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
// import { Navigation } from 'react-router'




export default class Routes extends React.Component {

  constructor() {
    super();
    // this.goToSignIn = this.goToSignIn.bind(this);
    // this.goToSignOut = this.goToSignOut.bind(this);
    this.logIn = this.logIn.bind(this)
  }



  logIn() {
    console.info('what now?');
    {/*<Redirect from='/SignIn' to='/explore' />*/
    }
    // this.transitionTo('/explore')
  }

  //
  // goToSignIn() {
  //
  //   this.props.history.push("/signin");
  // }
  //
  // goToSignOut() {
  //   this.props.history.push("/signout");
  // }

  render() {

    return (

      <BrowserRouter>
        <Switch>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/signin" component={Signin}/>



          <Route path="/" component={(props) => {
            return <Root goToSignIn={this.goToSignIn}
                         {...props}/>
          }}/>

        </Switch>

      </BrowserRouter>
    )
  }
}
