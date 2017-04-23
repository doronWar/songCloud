import './Enterpageicon.scss'
import {Link} from 'react-router-dom'

export default function Enterpageicon(props) {

  return (
    <div className="sign-in-modal">
      <i className="logo fa fa-mixcloud big-logo" aria-hidden="true"/>
      <h1 className="title-sign-in">Sound Cloud</h1>
      <div className="inser-info-component">
        <h1>{props.action}</h1>
        <div className="user-register">


          <input type="email" id="email" className="login-inputes"/>
          <label htmlFor="email" className="labels">Email<br/></label>
          <span className="animated-underline"/>
          <span className="user-name-error">Please enter a valid email</span>

          <input type="password" id="password" className="login-inputes"/>
          <label htmlFor="password" className="labels">password<br/></label>
          <span className="animated-underline"/>


        </div>

        {/*<input type="text" required placeholder="Username"/>*/}
        {/*<input type="password" required placeholder="Password"/>*/}
      </div>
      <button className="btn-sign-in btn-eff"
              onClick={()=>{props.history.push("/explore")}}>
        CONTINUE
      </button>

      <p>{props.lastLine}<Link to={props.redirectTo}>{props.linkTitle}</Link></p>
    </div>

  )
}
