import ReactDOM from 'react-dom';
import React from 'react';
import Greeting from './Greeting'
//
{/*const firstReact = <Greeting*/}
  {/*name = 'michal'*/}
  {/*age ='18'*/}
{/*/>*/}

// const firstPro =<Greeting
//   name="michael"
//   age="18"
//   fn={alertSomthing}
// />
//

function FirstPro(){

  return (<Greeting
    name="michael"
    age="18"
    fn={alertSomthing}
  />)};



const Root = () =>  {
  return (
    <div>
      <h1>Song Cloud123</h1>
      <Greeting
        name="michael"
        age="18"
        fn={alertSomthing} />
      {/*{FirstPro}*/}
    </div>
  );
};


ReactDOM.render(<Root/>, document.querySelector('#root'));

function alertSomthing() {
  alert('hello')
}
