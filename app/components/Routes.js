/**
 * Created by Doron Warzager on 04/04/2017.
 */

import Explore from './Explore'
import Signin from './Signin'
import Signup from './Signup'
import Root from './Root'

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

export default function Routes() {

  return (
    <BrowserRouter>
      <Switch>

      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/signin" component={Signin}/>
        <Route path="/" component={Root}/>

      </Switch>
    </BrowserRouter>
  )
}
