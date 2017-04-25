import Signin from '../Signin/Signin'
import Signup from '../Signup/Signup'
import Root from '../Root/Root'


import {connect} from 'react-redux'
import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';


class Routes extends React.Component {

  constructor() {
    super();

    this.grantAccess = this.grantAccess.bind(this)
  }


// //"node server/server.js",

  grantAccess() {
    this.setState({loged: e.target.responseText});
  }


  render() {


    if (this.props.accessGranted.canAccess) {
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
    else {
      return (

        <BrowserRouter>
          <Switch>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/signin" component={Signin}/>

            <Route path="/" component={() => {
              return <Redirect to="/signin"/>
            }}/>

          </Switch>

        </BrowserRouter>
      )
    }

  }
}


function mapStateToProps(dataState) {
  return {
    accessGranted: dataState.userInfo,
  }
}

export default  connect(mapStateToProps)(Routes);
