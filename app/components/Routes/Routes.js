
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





export default class Routes extends React.Component {

  constructor() {
    super();

  }


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
