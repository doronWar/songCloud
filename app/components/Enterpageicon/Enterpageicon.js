import './Enterpageicon.scss'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Enterpageicon extends React.Component{

  autorization() {
    const infoData={
      email:this.props.userInfo.email,
      password:this.props.userInfo.password
    }

    const xhr = new XMLHttpRequest();

    xhr.open('POST', `http://localhost:3000/login`);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(infoData));

    xhr.addEventListener('load', (e) => {
      const temp =JSON.parse(e.target.responseText);
      if(temp){
        this.props.grantAccess();
        this.props.history.push("/explore")
      }
      else{
        console.info('ooops wronf password');

      }


    })
  }

  render(){

  return (
    <div className="sign-in-modal">
      <i className="logo fa fa-mixcloud big-logo" aria-hidden="true"/>
      <h1 className="title-sign-in">Sound Cloud</h1>
      <div className="inser-info-component">
        <h1>{this.props.action}</h1>
        <div className="user-register">


          <input type="email" id="email" className="login-inputes"
                 value={this.props.userInfo.email}
                 onChange={(e)=>{
                   this.props.inputEmail(e.target.value)}}
          />
          <label htmlFor="email" className="labels">Email<br/></label>
          <span className="animated-underline"/>
          <span className="user-name-error">Please enter a valid email</span>

          <input type="password" id="password" className="login-inputes"
                 value={this.props.userInfo.password}
                 onChange={(e)=>{
                   this.props.inputPassword(e.target.value)}}
          />
          <label htmlFor="password" className="labels">password<br/></label>
          <span className="animated-underline"/>


        </div>

        {/*<input type="text" required placeholder="Username"/>*/}
        {/*<input type="password" required placeholder="Password"/>*/}
      </div>
      <button className="btn-sign-in btn-eff"
              onClick={() => {
                this.autorization();


              }}>
        CONTINUE
      </button>

      <p>{this.props.lastLine}<Link to={this.props.redirectTo}>{this.props.linkTitle}</Link></p>
    </div>

  )
}
}


function mapStateToProps(dataState) {
  return {
    userInfo: dataState.userInfo,
  }
}

function mapDispatchToProps(dispatch) {
  return {

    inputEmail(email){
      dispatch({
        type: 'SET_USER_MAIL',
        email: email
      })
    },
    inputPassword(password){
      dispatch({
        type: 'SET_USER_PASSWORD',
        password: password,

      })
    },
    grantAccess(){
      dispatch({
        type: 'ACCESS_GRANTED',
      })
    }

  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Enterpageicon);
