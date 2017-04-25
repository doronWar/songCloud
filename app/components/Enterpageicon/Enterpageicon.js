import './Enterpageicon.scss'
import '../../assets/styles/_helpers.scss'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Enterpageicon extends React.Component {

  autorization() {

    if (!this.props.userInfo.email.includes('@')) {
      alert('please enter a valid Email')
    }
    else {
      const infoData = {
        email: this.props.userInfo.email,
        password: this.props.userInfo.password
      }

      const xhr = new XMLHttpRequest();

      xhr.open('POST', `http://localhost:3000/login`);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(infoData));

      xhr.addEventListener('load', (e) => {
        const temp = JSON.parse(e.target.responseText);
        if (temp) {
          this.props.grantAccess();
          this.props.history.push("/explore");
          this.props.userInfo.email = "";
          this.props.userInfo.password = "";

        }
        else {
          alert('Password or Email are incorrect')

        }


      })
    }

  }

  componentDidUpdate() {
    if (this.props.userInfo.email !== "") {
      this.emailInput.classList.add('input-full')
      this.emailInput.classList.remove('input-empty')
    }
    if (this.props.userInfo.email === "") {
      this.emailInput.classList.remove('input-full')
      this.emailInput.classList.add('input-empty')

    }
    if (this.props.userInfo.password !== "") {
      this.passwordInput.classList.add('input-full')
      this.passwordInput.classList.remove('input-empty')
    }
    if (this.props.userInfo.password === "") {
      this.passwordInput.classList.remove('input-full')
      this.passwordInput.classList.add('input-empty')

    }

  }

  emailCheck() {

    if (!this.props.userInfo.email.includes('@') && this.props.userInfo.email !== "") {
      this.mailError.classList.remove('hiden')
    }
    else {
      this.mailError.classList.add('hiden')
    }
  }

  render() {

    return (
      <div className="sign-in-modal">
        <i className="logo fa fa-mixcloud big-logo" aria-hidden="true"/>
        <h1 className="title-sign-in">Sound Cloud</h1>
        <div className="inser-info-component">
          <h1>{this.props.action}</h1>
          <div className="user-register">


            <input type="email" id="email" className="login-inputes input-empty"
                   autoComplete="off"
                   value={this.props.userInfo.email}
                   onChange={(e) => {
                     this.props.inputEmail(e.target.value)
                   }}
                   onBlur={() => {
                     this.emailCheck()
                   }}
                   ref={(emailInput) => this.emailInput = emailInput}
            />
            <label htmlFor="email" className="labels">Email<br/></label>
            <span className="animated-underline"/>
            <span className="user-name-error hiden"
                  ref={(mailError) => this.mailError = mailError}>Please enter a valid email</span>

            <input type="password" id="password" className="login-inputes input-empty"
                   value={this.props.userInfo.password}
                   onChange={(e) => {
                     this.props.inputPassword(e.target.value)
                   }}
                   ref={(passwordInput) => this.passwordInput = passwordInput}
                   onKeyDown={(e) => {
                     if (e.keyCode === 13) {
                       this.autorization();
                     }
                   }}
            />
            <label htmlFor="password" className="labels">password<br/></label>
            <span className="animated-underline"/>
            <p className="enter-info"><b>Plaese use:</b> <br/><b>Email:</b> example@gmail.com<br/> <b>password:</b> 1234</p>


          </div>


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
