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


const FirstPro = ()=>{

  return (<Greeting
    name="michael"
    age="19"
    fn={alertSomthing}
  />)};


export default function Root (){

  const data = {
    name: "michael",
    age: "19",
    fn: alertSomthing
  };

  return (
    <div>

      {/*<Greeting*/}
      {/*name= {data.name}*/}
      {/*age= {data.age}*/}
      {/*fn= {data.fn} />*/}
      {/*<FirstPro/>*/}

      {/*<Signup/>*/}
       {/*<Signin/>*/}
       <Topbar/>
      <main>
      <Explore/>
      <Playlist/>
      </main>

      <Player/>
    </div>
  );
};


function alertSomthing() {
  alert('hello')
}

