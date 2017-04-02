/**
 * Created by Doron Warzager on 28/03/2017.
 */
import Greeting from './Greeting'
import Signin from './Signin'
import Signup from './Signup'
import Topbar from './Topbar'
import Explore from './Explore'
import Playlist from './Playlist'
import Player from './Player'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import React from 'react';

const FirstPro = ()=>{

  return (<Greeting
    name="michael"
    age="19"
    fn={alertSomthing}
  />)};



export default class Root extends React.Component {
// export default function  (){
constructor(){
  super();
  const data = {
    name: "michael",
    age: "19",
    fn: alertSomthing
  };
}


  render() {
    return (
      <BrowserRouter>
        <div>
          <Topbar/>
          <main>

            <Switch>

              {/*<Signup/>*/}
              {/*<Signin/>*/}


              <Route exact path="/" render={()=>{
              return <Redirect to="/explore/trance"/>
              }
              }/>
              <Route exact path="/explore" render={()=>{
              return <Redirect to="/explore/trance"/>
              }
              }/>
              {/*<Route exact path="/Explore" component={Explore}/>*/}
              <Route path="/explore/:genre" component={Explore}/>
              <Route exact path="/playlist" component={Playlist}/>



              {/*<Greeting*/}
              {/*name= {data.name}*/}
              {/*age= {data.age}*/}
              {/*fn= {data.fn} />*/}
              {/*<FirstPro/>*/}

            </Switch>
          </main>
          <Player/>
        </div>
      </BrowserRouter>
    );
  };
}

function alertSomthing() {
  alert('hello')

}

