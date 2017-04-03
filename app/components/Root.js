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



export default class Root extends React.Component {
// export default function  (){
constructor(){
  super();
  this.state={
    playerSong: 'none'
  }

}

nowPlaying(newSong){
  this.setState({ playerSong: Object.assign({}, newSong)})
}


  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/signin" component={Signin}/>
          <Route path="/" component={()=>{
            return (
              <div>
              <Topbar/>
                <main>

                  <Switch>
                    <Route exact path="/" render={()=>{
                      return <Redirect to="/explore/trance"/>
                    }
                    }/>
                    <Route exact path="/explore" render={()=>{
                      return <Redirect to="/explore/trance"/>
                    }
                    }/>
                    <Route exact path="/Explore" component={Explore}/>

                    <Route path="/explore/:genre" render={(props)=>{

                      return <Explore playingNow= {this.nowPlaying.bind(this)}
                                      {...props}/>
                    }}/>
                    <Route exact path="/playlist" render={(props)=>{
                      return <Playlist playingNow= {this.nowPlaying.bind(this)}
                                       {...props}/>

                    }}/>


                    {/*<Route path="/explore/:genre" component={Explore}/>*/}
                    {/*<Route exact path="/playlist" component={Playlist}/>*/}


                  </Switch>
                </main>
                <Player playingNow= {this.state.playerSong}/>
              </div>)

          }}/>


        </div>
      </BrowserRouter>
    );
  };
}


